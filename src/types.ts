export type Component<TState, TVDom> = (
  set: Function
) => (state: TState) => TVDom;
export type StateManager<TState> = {
  get: (listener: (state: TState) => void) => void;
  set: (state: TState) => void;
};
export type Target<TVDom> = (vdom: TVDom) => void;
export type Snap = <TState, TVDom>(
  cmp: Component<TState, TVDom>
) => (stateManager: StateManager<TState>) => (target: Target<TVDom>) => void;
