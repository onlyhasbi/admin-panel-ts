import {
  RiMoneyDollarCircleFill,
  RiTeamFill,
  RiUser3Fill,
  RiBuildingFill,
} from "react-icons/ri";

export const cardInfoModel = [
  {
    label: "Earning",
    value: "1.3 K",
    icon: (
      <RiMoneyDollarCircleFill className="w-[1.8rem] h-[1.8rem] text-white" />
    ),
    bgicon: "bg-orange-500",
  },
  {
    label: "User",
    value: "3.3 M",
    icon: <RiTeamFill className="w-[1.8rem] h-[1.8rem] text-white" />,
    bgicon: "bg-teal-500",
  },
  {
    label: "Tenant",
    value: "872",
    icon: <RiUser3Fill className="w-[1.8rem] h-[1.8rem] text-white" />,
    bgicon: "bg-sky-500",
  },
  {
    label: "Building",
    value: "372",
    icon: <RiBuildingFill className="w-[1.8rem] h-[1.8rem] text-white" />,
    bgicon: "bg-rose-500",
  },
];
