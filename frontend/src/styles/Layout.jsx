import { Outlet } from "react-router-dom";
import TopBackgraud from "../components/backgraud";

function Layout() {
  return (
    <>
      <TopBackgraud />

      <Outlet />
    </>
  );
}

export default Layout;
