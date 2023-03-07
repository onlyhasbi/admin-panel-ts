import type { HTMLAttributes } from "react";

type TProps = HTMLAttributes<HTMLDivElement>;

function Card(props: TProps) {
  const { className, children } = props;

  return (
    <div className={`"rounded-xl p-5 shadow-lg ${className}`}>{children}</div>
  );
}

export default Card;
