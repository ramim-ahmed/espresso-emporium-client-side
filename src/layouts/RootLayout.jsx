import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  const [domLoaded, setDomloaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDomloaded(true);
    }, 1000);
  }, []);
  if (!domLoaded) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
