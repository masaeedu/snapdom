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

const state = synchronous({ name: "Bob" }, "name");

test(`it mounts components`, t => {
  const mount = snap(cmp)(state);
  const target = x => t.snapshot(x);
  mount(target);
});
