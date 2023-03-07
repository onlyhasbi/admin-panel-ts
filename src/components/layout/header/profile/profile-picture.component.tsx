import Link from "next/link";
import Label from "@/components/common/label";
import { Popover, Transition } from "@headlessui/react";
import { profileModel } from "@/model/profile";
import { Fragment, useMemo } from "react";

function ProfilePicture() {
  const list = useMemo(() => {
    return profileModel.map((item) => {
      const { label, path, icon } = item;

      return (
        <Link key={path} href={path}>
          <Label
            label={label}
            icon={icon}
            iconStyle="text-xl"
            className="hover:bg-slate-50 text-slate-600 hover:text-blue-500 hover:rounded-md pl-4 py-2 text-left cursor-pointer"
          />
        </Link>
      );
    });
  }, [profileModel]);

  return (
    <Popover className="relative">
      <Popover.Button className="outline-none">
        <img
          src="/assets/profile.png"
          alt="profile-picture"
          className="relative hover:bg-blue-600/50 w-[3.5rem] h-[3.5rem] rounded-full cursor-pointer"
        />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel className="w-[10rem] absolute mt-2 right-0 z-10 p-2 border bg-white rounded-lg shadow-lg ">
          <div className="flex flex-col gap-y-1">{list}</div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default ProfilePicture;
