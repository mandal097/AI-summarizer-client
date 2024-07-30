import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  });

  const handleToggle = () => {
    setShow(!show);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div
      className={`w-full d-flex-center bg-gray-950 transition-all duration-500  fixed z-40 ${
        scrolled ? "py-3 shadow-navbar" : "py-6"
      }`}>
      <div className="w-full px-3 lg:w-[1024px] flex items-center justify-between sm:px-4">
        <Link
          to="/"
          className="h-full flex items-center justify-between cursor-pointer">
          <img className="rounded-md h-12 w-12" src="/yt_img.png" alt="" />
          <p
            className="pl-3 text-xl font-semibold text-primary font-playwrite"
            onClick={() => {
              window.scroll({ top: 0, behavior: "smooth" });
            }}>
            YouTube summarizer{" "}
          </p>
        </Link>
        <div
          className={`${
            show && "top-0 right-0 left-0"
          } bg-[rgba(0,0,0,0.9)] h-[100%] fixed d-flex-center lg:static lg:h-full lg:bg-transparent`}>
          <div
            className="lg:hidden absolute top-5 right-5"
            onClick={handleToggle}>
            <RxCross2 className="text-3xl text-white" />
          </div>
          <div
            className={`flex-col  ${
              show ? "flex animate-[fade_200ms_ease-in_1]" : "hidden"
            } items-start rounded-lg p-5 h-[80%] w-[90%] bg-gray-950 lg:bg-transparent static lg:h-full lg:w-full lg:flex lg:flex-row lg:items-center lg:p-0 gap-8`}>
            <Link
              onClick={handleClose}
              to="/"
              className="nav-links">
              Home
            </Link>
            <Link
              onClick={handleClose}
              to="/about"
              className="nav-links">
              About us
            </Link>
            <button
              // http://15.206.80.75:3000/api
              onClick={() => {
                navigate("/tr");
                handleClose();
              }}
              className="btn-primary w-full md:w-fit bg-blue hover:bg-primary">
              Get started
            </button>
          </div>
        </div>
        <div className="flex lg:hidden cursor-pointer" onClick={handleToggle}>
          <RxHamburgerMenu className="text-2xl text-primary" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
