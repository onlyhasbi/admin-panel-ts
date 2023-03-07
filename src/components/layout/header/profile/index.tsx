interface props {
  children: React.ReactNode;
}

function Profile({ children }: props) {
  return <div className="flex items-center gap-x-5">{children}</div>;
}

export default Profile;
