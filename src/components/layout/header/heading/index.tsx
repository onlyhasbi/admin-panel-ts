import { pathToLabel } from "@/components/utils/pathToLabel";

interface headingProps {
  pathName: string;
  username: string;
}

function Heading({ pathName, username }: headingProps) {
  if (pathName === "/") {
    return (
      <div>
        <h1 className="text-2xl font-bold text-slate-800">{`Welcomeback, ${username}`}</h1>
        <p className="text-slate-600">
          {`Here's what happening in your account today`}
        </p>
      </div>
    );
  }
  return (
    <h1 className="font-semibold text-2xl text-slate-700">
      {pathToLabel(pathName)}
    </h1>
  );
}

export default Heading;
