import clsx from "clsx";
import Portal from "@/components/portal";
import { RiCloseLine } from "react-icons/ri";
import { useClickAway } from "@/components/utils/clickAway";
import { Transition } from "@headlessui/react";
import { useRef } from "react";
import type { HTMLAttributes, ReactElement } from "react";

type Props = {
  onOpen: boolean;
  className?: string;
  onClose: () => void;
  title?: string;
  close?: boolean;
  children: ReactElement;
} & HTMLAttributes<HTMLDivElement>;

function Modal(props: Props) {
  const {
    onOpen,
    className,
    onClose: handleClose,
    title,
    close,
    children,
    ...rest
  } = props;

  const modalRef = useRef(null);
  useClickAway(modalRef, onOpen, handleClose);

  return (
    <Transition show={onOpen}>
      <Transition.Child
        enter="transition-opacity ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-in duration-250"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className={clsx([
            "overflow-auto fixed top-0 left-0 w-full h-full z-1 bg-black/25 ",
          ])}
        />
      </Transition.Child>
      <Transition.Child
        enter="transition-opacity ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          ref={modalRef}
          className={`${clsx([
            "bg-white rounded-xl shadow-lg p-5",
            "fixed top-[50%] left-[50%] z-[100]",
            "-translate-x-1/2 -translate-y-1/2",
          ])} ${className}`}
          {...rest}
        >
          <div className="relative flex items-center justify-between -mt-[.45rem]">
            <Title title={title} />
            <Close active={close} handleClose={handleClose} />
          </div>
          <div className="mt-3">{children}</div>
        </div>
      </Transition.Child>
    </Transition>
  );
}

type Title = {
  title?: string;
};

function Title({ title }: Title) {
  return title ? <h2 className="text-lg font-semibold">{title}</h2> : null;
}

type Close = {
  active?: boolean;
  handleClose: () => void;
};

function Close({ active, handleClose }: Close) {
  return active ? (
    <span className="p-1 rounded-full hover:bg-slate-50 cursor-pointer absolute -right-2">
      <RiCloseLine onClick={handleClose} />
    </span>
  ) : null;
}

export default Portal(Modal);