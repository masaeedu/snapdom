import { Target } from "./types";

type Snabbdom = (args: { dom: any; patch: (dom: any, vdom: any) => void }) => Target<any>;
export const snabbdom: Snabbdom = ({ dom, patch }) => {
  let oldVdom: any;
  return newVdom => {
    patch(oldVdom || dom, newVdom);
    oldVdom = newVdom;
  };
};
