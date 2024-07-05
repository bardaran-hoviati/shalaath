import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { Verifier } from "../../utils/types";

type VerifiersSliceType = {
  verifiersList: Verifier[];
  selectedVerifiers: Verifier[];
  singleVerifier?: Verifier
};

const initialState: VerifiersSliceType = {
  verifiersList: [],
  selectedVerifiers: [],
};

const VerifiersSlice = createSlice({
  name: "Verifiers",
  initialState,
  reducers: {
    setVerifiers(state, action: PayloadAction<Verifier[]>) {
      state.verifiersList.concat(action.payload);
    },
    selectVerifier(state, action: PayloadAction<Verifier[]>) {
      state.selectedVerifiers = [...state.selectedVerifiers, ...action.payload];
    },
    deselectVerifier(state, action: PayloadAction<Verifier>) {
      state.selectedVerifiers = state.selectedVerifiers.filter(
        (item) => action.payload.id != item.id
      );
    },
    setVerifier(state, action: PayloadAction<Verifier | undefined>) {
      state.singleVerifier = action.payload
    },

  },
});

export const VerifierActions = {
  ...VerifiersSlice.actions,
  getVerifiers: createAction<string>("Verifiers/getVerifiers"),
  getVerifiers2: createAction<string>("Verifiers/getVerifiers"),
  sendVerifiers : createAction<string>("Verifiers/sendVerifiers")
};
export const VerifierReducers = VerifiersSlice.reducer;
