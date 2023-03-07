import Radio from "./radio.component";
import { forwardRef, useMemo } from "react";
import type { InputHTMLAttributes } from "react";

type Option = {
  value: any;
  label: string;
};

type Options = Option[];

type Props = {
  options: Options;
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Radios = forwardRef<HTMLInputElement, Props>(
  ({ options, name, ...rest }: Props, ref) => {
    return useMemo<any>(() => {
      return options.map((option: Option) => {
        const { value, label } = option;
        return (
          <Radio
            ref={ref}
            key={value}
            name={name}
            value={value}
            label={label}
            {...rest}
          />
        );
      });
    }, [options]);
  }
);

export default Radios;
