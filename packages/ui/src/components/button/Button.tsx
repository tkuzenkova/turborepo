"use client";

import { Button as ButtonRadix } from "@radix-ui/themes";
import styles from "./button.module.css";

import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return <ButtonRadix className={styles.button}>{children}</ButtonRadix>;
};
