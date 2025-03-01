import Link from "next/link";
import { ComponentProps } from "react";

interface LiMenuProps extends ComponentProps<"li"> {
  to: string;
  name: string;
}

export const LiMenu = ({ to, name, ...rest }: LiMenuProps) => {
  return (
    <>
      <li {...rest}>
        <Link href={to}>{name}</Link>
      </li>
    </>
  );
};
