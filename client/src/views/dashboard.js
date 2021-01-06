import React, { useState, useEffect } from "react";

import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";

export default () => {
  return (
    <div>
      <TopBar />
      <Sidebar />
    </div>
  );
};
