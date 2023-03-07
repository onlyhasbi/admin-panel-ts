import Submenu from "./submenu.component";
import Label from "@/components/common/label";
import Link from "next/link";
import clsx from "clsx";
import _ from "lodash";
import { selectedContainerStyle, selectedTextStyle } from "./selected.style";
import { useMemo } from "react";

type TMenu = {
  path: string;
  label?: string;
  icon?: JSX.Element;
};

type TSubmenu = {
  header: string;
  submenu: TMenu[];
};

type TElement = TMenu | TSubmenu;

type TProps = {
  items: TElement[];
  currentPath: string;
};

function List(props: TProps) {
  const { items, currentPath } = props;
  const list = useMemo(() => {
    return items.map((item: TElement, index: number) => {
      const isSubmenu = _.has(item, "submenu");

      if (isSubmenu) {
        const { header, submenu } = item as TSubmenu;
        return (
          <Submenu
            key={index}
            header={header}
            items={submenu}
            currentPath={currentPath}
          />
        );
      }

      const { label, path, icon } = item as TMenu;
      const active = path === currentPath;

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
