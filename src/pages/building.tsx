import Button from "@/components/common/button";
import Layout from "@/components/layout";
import Modal from "@/components/common/modal";
import TextArea from "@/components/common/textarea";
import Select from "@/components/common/select";
import { useReducer, useState } from "react";
import { useForm } from "react-hook-form";
import { RadioGroup, Radios } from "@/components/common/radio";
import { Input, Number, Password, Search } from "@/components/common/input";

const defaultValues = {
  username: "",
  age: "",
  search: "",
  password: "",
  gender: "female",
  merk: 2,
  address: "",
};

type Gender = {
  label: string;
  value: string;
}[];

const gender: Gender = [
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Shemale",
    value: "shemale",
  },
];

type Phone = {
  label: string;
  value: number;
}[];

const phoneOptions: Phone = [
  {
    label: "Nokia",
    value: 1,
  },
  {
    label: "Sony",
    value: 2,
  },
  {
    label: "Samsung",
    value: 3,
  },
  {
    label: "Xiaomi",
    value: 4,
  },
  {
    label: "Motorola",
    value: 5,
  },
];

function Building() {
  const [open, toggle] = useReducer((open) => !open, false);
  const [search, setSearch] = useState("");
  const { register, handleSubmit, setValue, watch, setFocus } = useForm({
    defaultValues,
  });

  const handleDelete = () => {
    console.log("data telah dihapus");
    toggle();
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-start gap-x-8 mb-14">
      <form
        className="w-[20rem] flex flex-col  gap-y-3 items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="Username"
          labelStyle="w-full"
          placeholder="username"
          {...register("username")}
        />

        <Number
          label="Age"
          labelStyle="w-full"
          placeholder="your age"
          {...register("age")}
        />

        <Search
          label="Search"
          labelStyle="w-full"
          placeholder="search"
          onSearch={watch("search")}
          onClear={() => {
            setValue("search", "");
            setFocus("search", { shouldSelect: true });
          }}
          {...register("search")}
        />

        <Password
          label="Password"
          labelStyle="w-full"
          placeholder="password"
          {...register("password")}
        />

        <RadioGroup label="Jenis Kelamin" labelStyle="w-full mt-2">
          <Radios options={gender} {...register("gender")} />
        </RadioGroup>

        <Select
          label="Merk"
          options={phoneOptions}
          labelStyle="w-full mt-3"
          {...register("merk")}
        />

        <TextArea
          label="Home Address"
          labelStyle="w-full mt-2"
          placeholder="Home address"
          row={3}
          {...register("address")}
        />

        <div className="w-full flex gap-x-3">
          <Button className="text-white p-5 ml-auto" onClick={toggle} primary>
            Modal
          </Button>
          <input
            className="bg-blue-600 rounded-lg text-white px-8 py-2 "
            type="submit"
            value="Save"
          />
        </div>
      </form>

      <Modal title="Add Data" onOpen={open} onClose={toggle} close>
        <p>add data form modal</p>
        <Button
          className="text-white pb-[.35rem] mt-5 ml-auto"
          onClick={handleDelete}
          primary
        >
          Save
        </Button>
      </Modal>
    </div>
  );
}

Building.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>;
};

export default Building;
