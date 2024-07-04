import { AnyAction, configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./epics/epic";
import { combineReducers } from "redux";
import { VerifierReducers } from "./slices/verifiers.slice";

const epicMiddleware = createEpicMiddleware<
  AnyAction,
  AnyAction,
  RootState,
  void
>();
const reducer = combineReducers({
  verifiers: VerifierReducers,
});
export type RootState = ReturnType<typeof reducer>;
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(epicMiddleware as any),
});
epicMiddleware.run(rootEpic);
