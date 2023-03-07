interface TProps {
  fullname: string;
  role: string;
}

function ProfileInfo(props: TProps) {
  const { fullname, role } = props;
  return (
    <div className="flex flex-col text-right">
      <span className="text-lg font-semibold text-slate-700">{fullname}</span>
      <span className="text-sm font-medium -mt-[.15rem] text-slate-700">
        {role}
      </span>
    </div>
  );
}

export default ProfileInfo;
