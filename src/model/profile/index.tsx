import {
  RiAccountCircleLine,
  RiSettings3Line,
  RiQuestionLine,
  RiLogoutBoxRLine,
} from "react-icons/ri";

export const profileModel = [
  { label: "Profile", path: "profile", icon: <RiAccountCircleLine /> },
  { label: "Setting", path: "setting", icon: <RiSettings3Line /> },
  { label: "Support", path: "support", icon: <RiQuestionLine /> },
  { label: "Logout", path: "/", icon: <RiLogoutBoxRLine /> },
];
