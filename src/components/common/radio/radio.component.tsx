import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

type InputProps = {
  name: string;
  value?: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Radio = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    const { name, value, label, ...rest } = props;

    return (
      <div className="flex gap-x-2 items-center">
        <input
          ref={ref}
          type="radio"
          id={value}
          name={name}
          value={value}
          className="focus:border-0 focus:ring-0"
          {...rest}
        />
        <label htmlFor={value} className="text-slate-700 text-sm">
          {label}
        </label>
      </div>
    );
  }
);

export default Radio;
