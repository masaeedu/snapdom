import { Snap } from "./types";

export const snap: Snap = cmp => ({ get, set }) => {
  const child = cmp(set);
  return target => get(state => target(child(state)));
};
