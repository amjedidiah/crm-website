import { PropsWithChildren } from "react";
import styles from "./Button.module.scss";

type Props = PropsWithChildren<{
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}>;

const Button = ({ children, className, ...rest }: Props) => {
  let buttonClassName = styles.button;

  if (className) {
    buttonClassName = `${buttonClassName} ${className}`;
  }

  return (
    <button {...rest} className={buttonClassName}>
      {children}
    </button>
  );
};

export default Button;
