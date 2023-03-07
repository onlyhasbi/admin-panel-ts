import Layout from "@/components/layout";
import type { ReactElement } from "react";

function Profile() {
  return <h1>Profile</h1>;
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Profile;
