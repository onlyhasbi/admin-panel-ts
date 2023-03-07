import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

function Card(props: Props) {
  const { className, children } = props;

  return (
    <div className={`"rounded-xl p-5 shadow-lg ${className}`}>{children}</div>
  );
}

export default Card;
