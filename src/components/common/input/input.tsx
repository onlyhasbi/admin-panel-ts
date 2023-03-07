import clsx from "clsx";
import Labeled from "./labeled";
import { omit } from "lodash";
import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

type InputProps = {
  label?: string;
  name: string;
  placeholder?: string;
  inputStyle?: string;
  labelStyle?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  props: InputProps,
  ref
) {
  const { label, name, placeholder, inputStyle, labelStyle, ...rest } = props;

  const input = (
    <input
      ref={ref}
      id={name}
      name={name}
      type="text"
      placeholder={placeholder}
      className={clsx([
        "rounded-md placeholder:text-slate-400 text-slate-600 focus:border-transparent border-slate-300",
        inputStyle,
      ])}
      {...omit(rest, "className")}
    />
  );

  return label ? (
    <Labeled id={name} label={label} className={labelStyle}>
      {input}
    </Labeled>
  ) : (
    input
  );
});

export default Input;
