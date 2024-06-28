import React from "react";
import Home from "../Pages/Home";
import Topbar from "../Components/common/Topbar";

export default function HomeLayout() {
  return (
    <div>
      <Topbar />
      <Home />
    </div>
  );
}
