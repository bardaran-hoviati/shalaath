import { ajax } from "rxjs/ajax";
import { Verifier } from "../utils/types";
export const END_POINT = "";

export const API_HEADERS = {
  "Content-Type": "application/json",
  credentials: "include",
  withCredentials: "true",
};
export const API = {
  getVerfiers(postId: string) {
    return ajax.get<Verifier[]>(`${END_POINT}/getVerifiers/${postId}`, {
      ...API_HEADERS,
    });
  },
};
