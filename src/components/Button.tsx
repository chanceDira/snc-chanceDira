import { FunctionComponent, PropsWithChildren } from "react";
import classNames from "classnames";

type ButtonProps = {};

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
}) => {
  return (
    <button
      type="button"
      className={classNames("px-2 py-1 border border-black")}
    >
      {children}
    </button>
  );
};
