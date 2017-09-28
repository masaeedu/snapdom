export const snabbdom = ({ dom, patch }) => {
  let oldVdom;
  return newVdom => {
    patch(oldVdom || dom, newVdom);
    oldVdom = newVdom;
  };
};
