import classNames from "classnames";
import styles from "./Checkbox.module.scss";
export const CheckBox: React.FC<React.HTMLProps<HTMLInputElement>> = (
  props
) => {
  return (
    <div
    {...props}
      className={classNames(
        props.className,
        styles.CheckBox,
        { [styles.Selected]: props.selected },
      )}
    ></div>
  );
};
