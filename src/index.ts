import { Snap } from "./types";

export const snap: Snap = cmp => ({ get, set }) => target =>
  get(state => target(cmp(set)(state)));
