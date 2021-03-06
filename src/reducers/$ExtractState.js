// @flow

// https://blog.callstack.io/type-checking-react-and-redux-thunk-with-flow-part-2-206ce5f6e705
type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;
export type $ExtractState<R> = $ObjMap<R, $ExtractFunctionReturn>;
