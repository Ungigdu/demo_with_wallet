import { AnchorHTMLAttributes } from "react";
import { TextProps } from "../Text";

export interface LinkProps extends TextProps, AnchorHTMLAttributes<any> {
  external?: boolean;
}
