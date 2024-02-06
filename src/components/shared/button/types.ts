import { ButtonHTMLAttributes } from "react";

export type TButtonVariant = "contained" | "outlined" | "text";

export type TSize = "lg" | "md" | "sm" | "xs";

export type TColor =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning";

export type TButton = {
  variant?: TButtonVariant;
  size?: TSize;
  color?: TColor;
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
