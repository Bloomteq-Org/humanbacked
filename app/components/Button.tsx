import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import React from "react";

type CommonProps = {
  label?: string;
  children?: ReactNode;
  variant?: "gradient" | "ghost";
  size?: "md" | "lg";
  fullWidth?: boolean;
  className?: string;
};

type ButtonAsButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "type"> & {
    href: string;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const baseClasses =
  "inline-flex cursor-pointer font-poppins items-center justify-center whitespace-nowrap gap-[8px] rounded-full font-medium transition duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "h-12 px-16 text-[16px] leading-[24px]",
  lg: "h-14 px-[64px]  text-[16px] leading-[24px]",
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  //shadow-[0_10px_30px_rgba(12,61,223,0.35)]
  gradient:
    "bg-gradient-to-r from-[#0c3ddf] to-[#b748be] text-white  hover:brightness-[1.04] active:scale-[0.99] focus-visible:outline-[#0c3ddf]",
  ghost:
    "border border-gray-400 bg-white text-[#1d1d1b] hover:bg-gray-100 active:scale-[0.99] focus-visible:outline-[#0c3ddf]",
};

const Button = (props: ButtonProps) => {
  const {
    label = "Join Our Waitlist",
    children,
    variant = "gradient",
    size = "md",
    fullWidth = false,
    className,
    ...rest
  } = props;

  const classNames = [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = children ?? label;

  if ("href" in rest && rest.href) {
    const { href, target, rel, onClick, ...linkProps } = rest as ButtonAsLinkProps;

    // Handle hash links with smooth scroll for iOS compatibility
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) {
        onClick(e);
      }

      // If it's a hash link, handle smooth scroll manually for iOS
      if (href.startsWith("#") && !e.defaultPrevented) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={classNames}
        onClick={handleClick}
        {...linkProps}
      >
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = rest as ButtonAsButtonProps;

  return (
    <button type={type} className={classNames} {...buttonProps}>
      {content}
    </button>
  );
};

export default Button;
