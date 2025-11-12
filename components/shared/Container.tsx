import clsx from "clsx";
import { ElementType, ReactNode } from "react";

interface ContainerProps extends React.HTMLAttributes<ElementType> {
  className?: string;
  children: ReactNode;
  fluid?: boolean;
  noPadding?: boolean;
  breakpoint?: "sm" | "md" | "lg" | "xl" | "2xl";
  as?: React.ElementType;
}

const Container = ({
  className = "",
  children,
  fluid = false,
  breakpoint,
  as: Comp = "div",
  id,
}: ContainerProps) => {
  const breakpoints = {
    sm: "max-w-screen-sm", // 40rem
    md: "max-w-screen-md", // 48rem
    lg: "max-w-screen-lg", // 64rem
    xl: "max-w-screen-xl", // 80rem
    "2xl": "max-w-screen-2xl", // 96rem
  };

  const maxWidth = fluid
    ? "max-w-none"
    : breakpoint
      ? breakpoints[breakpoint]
      : breakpoints["2xl"];

  return (
    <Comp className={clsx("mx-auto w-full px-4", maxWidth, className)} id={id}>
      {children}
    </Comp>
  );
};

export default Container;
