import { useWindowSize } from "@uidotdev/usehooks"
import React, { useEffect, useState } from "react"
import logo from "../assets/images/logo.png"
export const routes = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "About",
    href: "/about"
  },
  {
    title: "Menu",
    href: "/menu"
  },
  { title: "Reservations", href: "/reserve" },
  { title: "Order Online", href: "/order" },
  { title: "Login", href: "/login" }
]

function Navbar() {
  const size = useWindowSize()
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (size.width < 768) setIsMobile(true)
    else setIsMobile(false)
  }, [size])
  return (
    <nav className="py-6">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
        {isMobile ? (
          <p className="animate-pulse">Sorry, this won't function. :/</p>
        ) : (
          <>
            <img src={logo} alt="Logo" className="w-48" />
            <ul className="flex gap-x-3 font-karla font-medium text-dark">
              {routes.map((item) => (
                <li
                  key={item.title}
                  className="hover:text-black hover:font-bold transition-all hover:-translate-y-1"
                >
                  <a href={item.href} className="">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
