import { Outlet } from "react-router-dom";

import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";

const Root = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};

export default Root;
