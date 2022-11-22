import React from "react";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Account from "./Update/Account";
import Edit from "./Update/Edit";
import ChangePassword from "./Update/ChangePassword";
import Setting from  "./Update/Setting";
import NavBar from "./Navbar/NavBar";

function AccountRouters() {
  return (
        <>
        <NavBar/>
        <Route path="/account" element={<Account />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/setting" element={<Setting />} />
        </>
  );
}

export default AccountRouters;
