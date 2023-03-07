type TProps = {
  children: React.ReactNode;
};

function Profile(props: TProps) {
  const { children } = props;
  return <div className="flex items-center gap-x-5">{children}</div>;
}

export default Profile;
