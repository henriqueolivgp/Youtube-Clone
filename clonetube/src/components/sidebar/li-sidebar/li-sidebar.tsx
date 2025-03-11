import Link from "next/link";
import { ComponentProps } from "react";
import { SvgIconComponent } from "@mui/icons-material";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface LiSideBarProps extends ComponentProps<"li"> {
  to: string;
  Icon?: SvgIconComponent | FC<{ className?: string }>; // Permite tanto MUI Icons quanto SVGs personalizados
  Icon2?: SvgIconComponent | FC<{ className?: string }>; // Permite tanto MUI Icons quanto SVGs personalizados
  name: string;
  isSelected: boolean;
  classToName?: string;
  classToLink?: string;
}

export const LiSideBar = ({
  to,
  Icon,
  Icon2,
  name,
  isSelected,
  classToName,
  classToLink,
  ...rest
}: LiSideBarProps) => {
  return (
    <li {...rest}>
      <Link
        href={to}
        className={twMerge(`relative flex items-center gap-4 px-2 py-2 rounded-lg 
          hover:bg-gray-100 dark:hover:bg-neutral-800 dark:hover:text-white
          ${isSelected ? "bg-neutral-800 text-white" : ""}`, classToLink)}
      >
        {Icon && <Icon className="w-6 h-6" />}{" "}
        {/* Renderiza o primeiro ícone */}
        <span className={twMerge("text-sm", classToName)}>{name}</span>
        {Icon2 && <Icon2 className="w-6 h-6" />}{" "}
        {/* Renderiza o segundo ícone se presente */}
      </Link>
    </li>
  );
};
