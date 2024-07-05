import { ajax } from "rxjs/ajax";
import { Verifier } from "../utils/types";
export const END_POINT = "https://salsa.darkube.app";

export const API_HEADERS = {
  "Content-Type": "application/json",
};
export const API = {
  getVerfiers(postId: string) {
    return ajax.get<{ verifiers: Verifier[] }>(
      `${END_POINT}/matching/getVerifiers`,
      {
        ...API_HEADERS,
      }
    );
  },
  getVerfiers2(postId: string) {
    return ajax.get<Verifier[]>(
      `${END_POINT}/matching/selectVerifiersView/${postId}`,
      {
        ...API_HEADERS,
      }
    );
  },
  setVerifiers(ids: number[], postId: string) {
    return ajax.post(
      `${END_POINT}/matching/setVerifiers/${postId}`,
      {
        selected_verifiers: JSON.stringify(ids),
      },
      {
        ...API_HEADERS,
      }
    );
  },
};
