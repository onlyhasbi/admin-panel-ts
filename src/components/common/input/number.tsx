import clsx from "clsx";
import Labeled from "./labeled";
import { NumericFormat } from "react-number-format";
import { omit } from "lodash";
import { forwardRef } from "react";

type TProps = {
  label?: string;
  name: string;
  placeholder?: string;
  onChange: unknown;
  labelStyle?: string;
  inputStyle?: string;
};

const Number = forwardRef<HTMLInputElement, TProps>(function Number(
  props: TProps,
  ref
) {
  const {
    label,
    name,
    placeholder,
    onChange,
    labelStyle,
    inputStyle,
    ...rest
  } = props;

  const input = (
    <NumericFormat
      getInputRef={ref}
      id={name}
      name={name}
      placeholder={placeholder}
      className={clsx([
        "rounded-md placeholder:text-slate-400 text-slate-600 focus:border-transparent border-slate-300",
        inputStyle,
      ])}
      allowNegative={false}
      thousandSeparator="."
      decimalSeparator=","
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

export default Number;
