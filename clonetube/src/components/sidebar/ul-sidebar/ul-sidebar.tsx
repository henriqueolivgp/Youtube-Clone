import { ComponentProps, ReactNode } from "react";

interface UlSideBarProps extends ComponentProps<"ul"> {
  children: ReactNode
}

export const UlSideBar = ({ children, ...rest }: UlSideBarProps) => {
  return (
    <ul {...rest}>
      {children}
    </ul>
  );
};
