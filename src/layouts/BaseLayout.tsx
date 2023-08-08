import React from "react";
import Sidebar from "../components/Sidebar";
import Asidebar from "../components/Asidebar";
import Header from "../components/Header";

type Props = {
  children: React.ReactNode;
};

export default function BaseLayout({ children }: Props) {
  return (
    <div className="fle flex-col">
        <Header/>
      <div className="flex mx-auto max-w-7xl">
        <Sidebar />
        <main className="flex-[9]">
          {/* Header */}
          {/* Main section */}
          {children}
        </main>
        <Asidebar />
      </div>
    </div>
  );
}
