import clsx from "clsx";
import Labeled from "../input/labeled";
import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";

type Props = {
  label?: string;
  labelStyle?: string;
  name: string;
  row?: number;
  col?: number;
  placeholder?: string;
  className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = forwardRef<HTMLTextAreaElement, Props>((props: Props, ref) => {
  const { label, labelStyle, name, row, col, placeholder, className, ...rest } =
    props;
  const textarea = (
    <textarea
      ref={ref}
      id={name}
      className={clsx([
        "rounded-md resize-none placeholder:text-slate-400 text-slate-600 focus:border-transparent border-slate-300",
        className,
      ])}
      spellCheck={false}
      placeholder={placeholder}
      name={name}
      rows={row}
      cols={col}
      {...rest}
    ></textarea>
  );

  return label ? (
    <Labeled id={name} label={label} className={labelStyle}>
      {textarea}
    </Labeled>
  ) : (
    textarea
  );
});

export default TextArea;
