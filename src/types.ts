export type Component<TState, TVDom> = (
  set: Function
) => (state: TState) => TVDom;

export type Get<TState> = (listener: (state: TState) => void) => void;

export type StateManager<TState, TSet extends Function = Function> = {
  get: Get<TState>;
  set: TSet;
};

export type Target<TVDom> = (vdom: TVDom) => void;

export type Snap = <TState, TVDom>(
  cmp: Component<TState, TVDom>
) => (stateManager: StateManager<TState>) => (target: Target<TVDom>) => void;
