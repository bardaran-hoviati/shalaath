import { ofType } from "redux-observable";
import { EMPTY, exhaustMap, mergeMap, of, switchMap } from "rxjs";
import { API } from "../../api/API";
import { Epic, handleError, handleSuccess } from "./epic";
import { VerifierActions } from "../slices/verifiers.slice";
import { DefaultVerifiers } from "../../utils/text";
import { showSuccessToastMessage } from "../../main";

export const fetchVerifiersEpic: Epic = (action$, state$) =>
  action$.pipe(
    ofType(VerifierActions.getVerifiers.type),
    exhaustMap((action) => {
      return of(VerifierActions.setVerifiers(DefaultVerifiers))
      /*return API.getVerfiers(
        action.payload
      ).pipe(
        mergeMap((response) => {
          return handleSuccess(VerifierActions.setVerifiers(response.response))
        }),
        handleError("Failed to fetch Verifiers")
      );*/
    })
  );


  export const fetchVerifiers2Epic: Epic = (action$, state$) =>
    action$.pipe(
      ofType(VerifierActions.getVerifiers2.type),
      exhaustMap((action) => {
        return API.getVerfiers2(
          action.payload
        ).pipe(
          mergeMap((response) => {
            return handleSuccess(VerifierActions.setVerifiers(response.response))
          }),
          handleError("Failed to fetch Verifiers")
        );
      })
    );
  

  export const setVerifiersEpic: Epic = (action$, state$) =>
    action$.pipe(
      ofType(VerifierActions.sendVerifiers.type),
      switchMap((action) => {
        showSuccessToastMessage("Submitted Successfully")
        window.location.href = `https://divar.ir/v/${action.payload}`
        return EMPTY
      })
    );
  
