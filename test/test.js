import test from "ava";
import { init } from "..";
import { h, diff } from "virtual-dom";
import evt from "snabbdom/modules/eventlisteners";

const snap = init(diff);

const cmp = set => {
  const handlers = {
    on: {
      input: e => setState(e.target.value)
    }
  };
  return state => h("div", [h("div", ["Hello ", state]), h("input", handlers)]);
};

let state = "Bob";
const stateMgmt = {
  get: () => state,
  set: (next, render) => {
    state = next;
    render();
  }
};

test(`it mounts components`, t => {
  const mount = snap(cmp)(stateMgmt);
  t.snapshot(mount(h("div")));
});
