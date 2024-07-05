import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styles from "./VerifierSelector.module.scss";
import { Verifier } from "../../utils/types";
import { Text2 } from "../../ui/Text";
import { ReqButton } from "../../ui/ReqButton";
import { CheckBox } from "../../ui/Checkbox";
import { VerifierActions } from "../../redux/slices/verifiers.slice";
import { Title } from "../../ui/Title";
import { Star } from "../../ui/Icons/Star";

const project_id = window.location.pathname.split("/")[2]
export const VerifierSelector: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(VerifierActions.getVerifiers(project_id))
  }, [])
  return (
    <div className={styles.Page}>
      <Title
        text="Select Verifiers"
        style={{ position: "initial", textAlign: "center" }}
      />
      <div className={styles.ListOuterWrapper}>
        <VerifiersList />
      </div>
      <ReqButton text={"Submit"} className={styles.SubmitButton} onClick={() => dispatch(VerifierActions.sendVerifiers(project_id))} />
    </div>
  );
};

export const VerifiersList: React.FC = () => {
  const { list, selecteds } = useSelector((state: RootState) => ({
    list: state.verifiers.verifiersList,
    selecteds: state.verifiers.selectedVerifiers,
  }));
  return (
    <div className={styles.ListWrapper}>
      {list.map((item) => (
        <VerifierItem
          verifier={item}
          selected={
            selecteds.findIndex((selected) => item.id == selected.id) >= 0
          }
        />
      ))}
    </div>
  );
};

type VerifierItemProps = {
  verifier: Verifier;
  selected?: boolean;
};

export const VerifierItem: React.FC<VerifierItemProps> = (props) => {
  const dispatch = useDispatch();
  return (
    <div
      className={styles.VerifierItem}
      onClick={() => {
        if (props.selected)
          dispatch(VerifierActions.deselectVerifier(props.verifier));
        else dispatch(VerifierActions.selectVerifier([props.verifier]));
      }}
    >
      <div className={styles.InfoWrapper}>
        <CheckBox selected={props.selected} className={styles.Checkbox} />
        <Text2
          text={`${props.verifier.firstname} ${props.verifier.lastname}`}
          style={{overflow: "hidden", whiteSpace: "nowrap", textOverflow: 'ellipsis', maxWidth: 160}}
        />
      </div>
      <div className={styles.RateWrapper}>
        <Star size={20} color="white"/>
        <Text2 text={props.verifier.rate} />
      </div>
    </div>
  );
};
