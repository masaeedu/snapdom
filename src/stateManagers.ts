import { StateManager } from "./types";

type Synchronous = <TRoot extends { [P in TPath]: any }, TPath extends string>(
  state: TRoot,
  path: TPath
) => StateManager<TRoot[TPath], (next: TRoot[TPath]) => void>;
export const synchronous: Synchronous = (state, path) => {
  const subscribers: any[] = [];
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
