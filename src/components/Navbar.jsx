import { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const menus = [
    { name: "Home", link: "/" },
    { name: "Login", link: "/login" },
    { name: "Register", link: "/register" },
  ];

  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className="">
        <div className="container flex justify-between items-center py-4">
          {/* Logo */}
          <img src="https://picsum.photos/1080/" alt="Logo" className="size-6 rounded-full" />

          {/* Menus dekstop */}
          <ul className="sm:flex gap-4 items-center hidden">
            {/* pengulangan array atau list menus */}
            {menus.map((menu, index) => (
              <li key={index}>
                <Link to={menu.link} className="hover:opacity-50 transition-all " >{menu.name}</Link>
              </li>
            ))}
          </ul>

          {/* button toggle mobile menu */}
          <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
            Menu
          </button>

          {/* menus mobile */}
          <ul className={`sm:hidden gap-4 items-center flex font-bold flex-col bg-blue-200 fixed top-0 right-0 w-2/3 h-full z-50 py-12 ${isOpen ? "translate-x-0" : "translate-x-full"} transition-all`}>
            {/* close button */}
            <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
              tutup
            </button>

            {/* pengulangan array atau list menus */}
            {menus.map((menu, index) => (
              <li key={index}>
                <Link to={menu.link} className="hover:opacity-50 transition-all " >{menu.name}</Link>
              </li>
            ))}
          </ul>

          {/* background overlay */}
          <div className={`sm:hidden fixed top-0 left-0 w-full h-full z-40 bg-black bg-opacity-50 transition-all ${isOpen ? "translate-x-0" : "translate-x-full"}`} onClick = {() => setIsOpen(false)}></div>
        </div>
    </nav>
  )
}
