import Heading from "./heading";
import Profile from "./profile";
import ProfileInfo from "./profile/profile-info.component";
import ProfilePicture from "./profile/profile-picture.component";
import { useRouter } from "next/router";

const user = {
  username: "John",
  fullname: "John Doe",
  role: "Administrator",
};

function Header() {
  const { pathname } = useRouter();
  const { username, fullname, role } = user;

  return (
    <div className="flex justify-between items-center mt-[3rem] mb-[3.5rem]">
      <Heading pathName={pathname} username={username} />
      <Profile>
        <ProfileInfo fullname={fullname} role={role} />
        <ProfilePicture />
      </Profile>
    </div>
  );
}

export default Header;
