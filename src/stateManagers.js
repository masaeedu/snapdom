export const synchronous = (state, path) => {
  const subscribers = [];
  return {
    get: subscriber => {
      subscribers.push(subscriber);
      subscriber(state[path]);
    },
    set: next => {
      state[path] = next;
      subscribers.forEach(s => s(state[path]));
    }
  };
};
