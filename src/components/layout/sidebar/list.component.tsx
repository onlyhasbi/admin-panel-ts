import Submenu from "./submenu.component";
import Label from "@/components/common/label";
import Link from "next/link";
import clsx from "clsx";
import { selectedContainerStyle, selectedTextStyle } from "./selected.style";
import { useMemo } from "react";

interface props {
  items: ({
    label: string;
    path: string;
    icon?: JSX.Element;
    submenu?: {
      label: string;
      path: string;
      icon: JSX.Element;
    }[];
  })[];
  currentPath: string;
}

function List({ items, currentPath }: props) {
  const list = useMemo(() => {
    return items.map((item, index) => {
      const { label, path, icon, submenu } = item;
      const active = path === currentPath;

      if (submenu) {
        return (
          <Submenu
            key={index}
            label={label}
            items={submenu}
            currentPath={currentPath}
          />
        );
      }

      return (
        <Link key={index} href={path} className="relative">
          <Label
            label={label}
            icon={icon}
            iconStyle={clsx(["text-lg", ...selectedTextStyle(active)])}
            textStyle={clsx(selectedTextStyle(active))}
            className={clsx([selectedContainerStyle(active), "w-[11.5rem]"])}
          />
        </Link>
      );
    });
  }, [items, currentPath]);

  return <>{list}</>;
}

export default List;
