import React from "react";
import { Link } from "react-router-dom";
// Custom Components
import ShopCart from "./components/ShopCart";
import ThemeToggle from "./components/ThemeToggle";
// ------------------------------------------------
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container mx-auto px-4 lg:px-0">
      <header className="p-6 bg-gray-900 w-full flex items-center justify-between rounded-xl my-6">
        <Link
          to={"/"}
          className="font-extrabold lg:text-2xl text-lg text-slate-200"
        >
          محصولات
        </Link>
        <div className="flex items-center gap-2">
          <ShopCart />
          <ThemeToggle />
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
