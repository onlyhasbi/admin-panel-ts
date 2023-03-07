import Link from "next/link";
import Label from "@/components/common/label";
import clsx from "clsx";
import { Disclosure, Transition } from "@headlessui/react";
import { selectedContainerStyle, selectedTextStyle } from "./selected.style";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useMemo } from "react";

interface Item {
  label: string;
  path: string;
  icon: JSX.Element;
}

interface props {
  label: string;
  items: {
    label: string;
    path: string;
    icon: JSX.Element;
  }[];
  currentPath: string;
}

function Submenu({ label: parentLabel, items, currentPath }: props) {
  const list = useMemo(() => {
    return items.map((item: Item, index) => {
      const { label, path, icon } = item;
      const active: boolean = path === currentPath;

      return (
        <Link key={index} href={path} className="relative">
          <Label
            label={label}
            icon={icon}
            iconStyle={clsx(["text-lg", ...selectedTextStyle(active)])}
            textStyle={clsx(selectedTextStyle(active))}
            className={clsx([...selectedContainerStyle(active), "pl-6"])}
          />
        </Link>
      );
    });
  }, [items, currentPath]);

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="relative text-left text-white pl-3 mt-3 mb-2">
            {parentLabel}
            <RiArrowDropDownLine
              className={`absolute transition-all duration-150 ease-linear right-0 top-[.1rem] text-2xl ${
                open ? "rotate-180" : ""
              }`}
            />
          </Disclosure.Button>

          <Transition
            enter="transition ease duration-100 transform"
            enterFrom="opacity-0 -translate-y-3"
            enterTo=" translate-y-0"
            leave="transition ease duration-90 transform"
            leaveFrom=" translate-y-0"
            leaveTo="opacity-0 -translate-y-3"
          >
            <Disclosure.Panel className="flex flex-col gap-y-4">
              {list}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

export default Submenu;
