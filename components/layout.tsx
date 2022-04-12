import React from "react";
import Navbar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-2">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
