"use client";

import Link from "next/link";
import { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

interface BaseProps {
  variant?: "primary" | "secondary" | "outline" | "primary-rounded" | "white";
  className?: string;
  children: React.ReactNode;
  isLink?: boolean;
  href?: string;
}

type ButtonProps =
  | (BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { isLink?: false })
  | (BaseProps &
      AnchorHTMLAttributes<HTMLAnchorElement> & { isLink: true; href: string });

const Button: FC<ButtonProps> = ({
  variant = "",
  children,
  className = "",
  isLink = false,
  href = "",
  ...props
}) => {
  const variantStyle: Record<string, string> = {
    primary:
      "xl:min-w-50 xl:h-14 text-white bg-brand-brown border-brand-brown hover:opacity-80 py-2 sm:py-3 px-5",
    "primary-rounded":
      "text-white bg-brand-brown border-brand-brown hover:opacity-80 rounded-md p-3 md:p-4",
    secondary:
      "xl:min-w-50 xl:h-14 flex-center text-white bg-black/20 border-white hover:bg-white/20 py-2 sm:py-3 px-5",
    outline:
      "xl:min-w-50 xl:h-14 text-brand-dark-gray border-brand-dark-gray hover:opacity-80 py-2 sm:py-3 px-5 rounded-none",
    white:
      "bg-white border border-brand-dark-gray/30 hover:opacity-80 rounded-md hover:opacity-80 hover:text-brand-brown smooth-200 p-3 md:p-4",
  };

  const classes = `${
    variantStyle[variant] || ""
  } ${className} relative z-10 text-xs/5 xs:text-sm/4 cursor-pointer border smooth-200`;

  if (isLink) {
    return (
      <Link
        href={href}
        className={`xl:min-w-50 xl:h-14 inline-flex flex-center group ${classes}`}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`flex-center ${classes}`}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default Button;
