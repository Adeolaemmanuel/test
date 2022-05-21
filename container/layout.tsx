import React from "react";
import { LayoutC } from "../@types";
import Nav from "../components/nav";
import { useAppSelector } from "../store/store";

const Layout: React.FC<LayoutC> = ({ children }) => {
  const userState = useAppSelector((state) => state.user);

  console.log({ userState });

  return (
    <div>
      {userState.auth && <Nav />}
      {children}
    </div>
  );
};

export default Layout;
