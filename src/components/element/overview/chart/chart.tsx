import { data } from "@/model/chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Chart() {
  return (
    <>
      <div className="mb-5">
        <p className="text-xs leading-[16px] text-scorpion">Earned</p>
        <p className="text-[2.7rem] font-semibold">
          <span>$ 3.5 M</span>
        </p>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%" aspect={3}>
          <LineChart
            data={data}
            margin={{
              right: 10,
              left: -2,
              top: 10,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              fontSize={10}
              color="#2563eb"
              strokeOpacity={0}
            />
            <YAxis
              dataKey="download"
              type="number"
              fontSize={10}
              color="#2563eb"
              strokeOpacity={0}
            />

            <Line
              dataKey="earn"
              type="monotone"
              strokeWidth={2.5}
              stroke="#2563eb"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default Chart;
