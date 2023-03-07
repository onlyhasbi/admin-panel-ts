import clsx from "clsx";
import { HTMLAttributes } from "react";

type Props = {
  danger?: boolean;
  warning?: boolean;
  primary?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

function Button({
  children,
  className,
  danger,
  warning,
  primary,
  ...rest
}: Props) {
  const classes = clsx([
    { "bg-red-600": danger },
    { "bg-yellow-400": warning },
    { "bg-blue-600": primary },
    "block rounded-md px-4 py-[.3rem]",
    className,
  ]);

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;
