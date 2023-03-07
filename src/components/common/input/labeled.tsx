import clsx from "clsx";
import type { ReactElement } from "react";

type Props = {
  id: string;
  label?: string;
  className?: string;
  children: ReactElement;
};

function Labeled({ id, label, className, children }: Props) {
  return (
    <div className={clsx(["flex flex-col gap-y-2", className])}>
      <label htmlFor={id} className="text-slate-700 text-sm">
        {label}
      </label>
      {children}
    </div>
  );
}

export default Labeled;
