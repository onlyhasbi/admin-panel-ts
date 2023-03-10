import clsx from "clsx";
import Labeled from "../input/labeled";
import { forwardRef, useMemo } from "react";
import { omit } from "lodash";
import type { InputHTMLAttributes } from "react";

type TOption = {
  label: string;
  value: number;
};

type TOptions = TOption[];

type TProps = {
  name: string;
  options: TOptions;
  className?: string;
  label?: string;
  labelStyle?: string;
} & InputHTMLAttributes<HTMLSelectElement>;

const Select = forwardRef<HTMLSelectElement, TProps>((props: TProps, ref) => {
  const { name, options, className, label, labelStyle, ...rest } = props;

  const list = useMemo(() => {
    return options.map(({ label, value }: TOption, index:number) => {
      return (
        <option key={index} value={value}>
          {label}
        </option>
      );
    });
  }, [options]);

  const select = (
    <select
      ref={ref}
      id={name}
      name={name}
      className={clsx([
        "rounded-md placeholder:text-slate-400 text-slate-600 focus:border-transparent border-slate-300",
        className,
      ])}
      {...omit(rest, "className")}
    >
      {list}
    </select>
  );

  return label ? (
    <Labeled id={name} label={label} className={labelStyle}>
      {select}
    </Labeled>
  ) : (
    select
  );
});

export default Select;
