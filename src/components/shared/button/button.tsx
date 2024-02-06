import React from "react";
import classNames from "classnames";

import { TButton } from "./types";
import "./button.scss";

const Button: React.FC<TButton> = ({
  children,
  variant = "contained",
  color = "primary",
  size = "md",
  fullWidth = false,
  type = "button",
  ...rest
}: TButton) => {
  const className: string = classNames(
    "button",
    `button-${variant}`,
    `button-${variant}-${size}`,
    `button-${variant}-${color}`,
    fullWidth && `button--fullWidth`,
    rest.className
  );

  return (
    <button type={type} className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
