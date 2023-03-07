import clsx from "clsx";
import type { HTMLAttributes, ReactElement } from "react";

type TProps = {
  iconStyle?: string;
  textStyle?: string;
  label?: string;
  icon?: ReactElement;
} & HTMLAttributes<HTMLElement>;

function Label(props: TProps) {
  const { className, iconStyle, textStyle, label, icon, ...rest } = props;

  const render = icon ? (
    <div className={`flex gap-x-2 items-center ${className}`} {...rest}>
      <span className={clsx(["block", iconStyle])}>{icon}</span>
      <h3 className={clsx([textStyle])}>{label}</h3>
    </div>
  ) : (
    <span className={`block ${className}`} {...rest}>
      {label}
    </span>
  );
  return render;
}

export default Label;
