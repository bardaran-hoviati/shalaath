import { ajax } from "rxjs/ajax";
import { Verifier } from "../utils/types";
export const END_POINT = "http://salsa.darkube.app";

export const API_HEADERS = {
  "Content-Type": "application/json",
  credentials: "include",
  withCredentials: "true",
};
export const API = {
  getVerfiers(postId: string) {
    return ajax.get<Verifier[]>(`${END_POINT}/matching/getVerifiers/${postId}`, {
      ...API_HEADERS,
    });
  },
  setVerifiers(ids: number[], postId: string){
    return ajax.post(`${END_POINT}/matching/setVerifiers/${postId}`,{
      "selected_verifiers": JSON.stringify(ids),
    }, {
      ...API_HEADERS,
    });
  }
};
