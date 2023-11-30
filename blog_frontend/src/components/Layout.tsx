import React from "react";
import Header from "./header/Header";

function AdminLayout({ children }: { children: React.ReactElement }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
export default AdminLayout;
