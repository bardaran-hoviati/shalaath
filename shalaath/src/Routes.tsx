import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { VerifierSelector } from "./components/VerifierSelector/VerifierSelector";

type Props = React.HTMLProps<HTMLDivElement>;

export const RoutesFC: React.FC<Props> = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/select-verifier" element={<VerifierSelector />} />
      </Routes>
      {props.children}
    </Router>
  );
};
