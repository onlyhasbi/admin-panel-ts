import Radio from "./radio.component";
import { forwardRef, useMemo } from "react";
import type { InputHTMLAttributes } from "react";

type TOption = {
  value: any;
  label: string;
};

type TOptions = TOption[];

type TProps = {
  options: TOptions;
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Radios = forwardRef<HTMLInputElement, TProps>(
  ({ options, name, ...rest }: TProps, ref) => {
    return useMemo<any>(() => {
      return options.map((option: TOption) => {
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
