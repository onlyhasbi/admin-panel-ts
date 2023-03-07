import Card from "@/components/common/card";
import Label from "@/components/common/label";
import { RiHistoryLine } from "react-icons/ri";

type Props = {
  label?: string,
  value?: string,
  icon?: JSX.Element,
  bgicon?: string,
};

function CardInfo({ label, value, icon, bgicon }: Props) {
  return (
    <Card className="w-[14rem] h-[9.6rem] relative flex items-center justify-center gap-x-5 border rounded-lg shadow-md">
      <div
        className={`absolute -top-6 left-5 ${bgicon} w-[5rem] h-[5rem] flex justify-center items-center rounded-lg shadow-sm`}
      >
        {icon}
      </div>
      <div className="absolute top-5 right-6 text-right">
        <h2 className="text-slate-500 ">{label}</h2>
        <h3 className="text-3xl text-slate-700">{value}</h3>
      </div>
      <div className="absolute bottom-4 w-10/12 border-t">
        <Label
          label="Last 24 hours"
          icon={<RiHistoryLine />}
          className="text-xs text-slate-500 text-center pt-3"
        />
      </div>
    </Card>
  );
}

export default CardInfo;
