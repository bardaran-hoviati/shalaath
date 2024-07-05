import { StateObservable, combineEpics } from "redux-observable";

import { Action } from "redux";
import { Observable, catchError, merge, of } from "rxjs";
import { RootState } from "../store";
import { showFailToastMessage } from "../../main";
import { RequestState } from "../../utils/types";
import { ReqActions } from "../slices/req.slice";
import { fetchVerifiers2Epic, fetchVerifiersEpic, setVerifiersEpic } from "./verifier.epic";

export interface Epic<Input extends Action = any, Output extends Action = any> {
  (
    action$: Observable<Input>,
    state$: StateObservable<RootState>
  ): Observable<Output>;
}

export const handleError = <T>(message?: string) =>
  catchError<T, Observable<any>>((error) => {
    showFailToastMessage(message ?? error.message);
    return of(ReqActions.setState({ requestState: RequestState.ERROR }));
  });

export const handleSuccess = (callback?: any) => {
  return merge(
    of(callback),
    of(ReqActions.setState({ requestState: RequestState.DONE }))
  );
};

export const rootEpic = combineEpics(fetchVerifiersEpic, setVerifiersEpic, fetchVerifiers2Epic);
