import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/shared/Navbar";
import Loading from "../UI/Loading";

const HomeLayout = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = "Naimur | Portfolio";
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  if (loading) return <Loading />;
  return (
    <div className="text-base-content font-poppins min-h-screen flex flex-col bg-base-100">
      <Toaster />
      <div>
        <Navbar />
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;
