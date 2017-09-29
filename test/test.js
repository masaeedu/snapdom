import test from "ava";
import { snap } from "../src";
import { synchronous } from "../src/stateManagers";
import { h, diff } from "virtual-dom";

const cmp = set => {
  const handlers = {
    on: {
      input: e => set(e.target.value)
    }
  };
  return state =>
    h("div", [h("div", ["Hello, ", state]), h("input", handlers)]);
};

const getState = () => synchronous({ name: "Bob" }, "name");

test(`it renders state`, t => {
  const state = getState();
  const mount = snap(cmp)(state);
  mount(x => t.snapshot(x));
});

test(`it renders updated state`, t => {
  const state = getState();
  const mount = snap(cmp)(state);
  mount(x => t.snapshot(x));
  state.set("Carol");
});
