export const snap = cmp => ({ get, set }) => target =>
  get(state => target(cmp(set)(state)));
