import Layout from "@/components/layout";
import type { ReactElement } from "react";

function Tenant() {
  return (
    <div>
      <h1>Tenant page</h1>
    </div>
  );
}

Tenant.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Tenant;
