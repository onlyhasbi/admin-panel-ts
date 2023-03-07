import {
  RiLayout4Line,
  RiBuildingLine,
  RiGroupLine,
  RiFolder2Line,
  RiFilePaperLine,
} from "react-icons/ri";

export const sidebarModel = [
  { label: "Overview", path: "/", icon: <RiLayout4Line /> },
  { label: "Building", path: "/building", icon: <RiBuildingLine /> },
  { label: "Tenant", path: "/tenant", icon: <RiGroupLine /> },
  {
    label: "Management",
    submenu: [
      { label: "Audit", path: "/management/audit", icon: <RiFolder2Line /> },
      {
        label: "Document",
        path: "/management/document",
        icon: <RiFilePaperLine />,
      },
    ],
  },
];
