export const init = diff => cmp => ({ get, set }) => {
  let render;
  const preppedCmp = cmp(state => set(state, render));
  render = oldVdom => {
    const currState = get();
    const currVdom = preppedCmp(currState);
    return diff(oldVdom, currVdom);
  };
  return render;
};
