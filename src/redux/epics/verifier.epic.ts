import { ofType } from "redux-observable";
import { mergeMap } from "rxjs";
import { API } from "../../api/API";
import { Epic, handleError, handleSuccess } from "./epic";
import { VerifierActions } from "../slices/verifiers.slice";

export const fetchVerifiersEpic: Epic = (action$, state$) =>
  action$.pipe(
    ofType(VerifierActions.getVerifiers.type),
    mergeMap((action) => {
      return API.getVerfiers(
        action.payload
      ).pipe(
        mergeMap((response) => {
          return handleSuccess(VerifierActions.setVerifiers(response.response))
        }),
        handleError("Failed to fetch Verifiers")
      );
    })
  );

