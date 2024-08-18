import { FunctionComponent, PropsWithChildren } from "react";
import classNames from "classnames";

type ButtonProps = {
  isSelected: boolean;
  onClick: () => void;
};

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  isSelected,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={classNames("px-2 py-1 border rounded-md", {
        "text-white bg-black": isSelected,
        "text-black border-black": !isSelected,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
