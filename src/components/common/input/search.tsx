import clsx from "clsx";
import Labeled from "./labeled";
import { RiCloseFill } from "react-icons/ri";
import { forwardRef } from "react";
import { omit } from "lodash";
import type { InputHTMLAttributes } from "react";

type TProps = {
  label?: string;
  name: string;
  placeholder?: string;
  labelStyle?: string;
  inputStyle?: string;
  className?: string;
  onClear: () => void;
  onSearch: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Search = forwardRef<HTMLInputElement, TProps>(function Search(
  props: TProps,
  ref
) {
  const {
    label,
    name,
    placeholder,
    labelStyle,
    inputStyle,
    className,
    onClear: handleClear,
    onSearch: search,
    ...rest
  } = props;

  const input = (
    <div className={clsx(["relative", className])}>
      <input
        ref={ref}
        id={name}
        name={name}
        type="text"
        className={clsx([
          "w-full rounded-md placeholder:text-slate-400 text-slate-600 focus:border-transparent border-slate-300",
          inputStyle,
        ])}
        placeholder={placeholder}
        {...omit(rest, "className")}
      />
      {search ? (
        <button className="absolute top-3 right-3" onClick={handleClear}>
          <RiCloseFill className="block text-slate-400 hover:text-red-400 hover:rounded-full" />
        </button>
      ) : null}
    </div>
  );

  return label ? (
    <Labeled id={name} label={label} className={labelStyle}>
      {input}
    </Labeled>
  ) : (
    input
  );
});

export default Search;
