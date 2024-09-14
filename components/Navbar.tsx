"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import "./navbar.css"

const links = ["about", "school", "events", "lives", "join", "contact", "donate"]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenu = () => setMenuOpen(!menuOpen)

  useEffect(() => {
    const handleScreenResize = () => window.innerWidth > 768 && setMenuOpen(false)
    const shouldOpenMenu = menuOpen && window.innerWidth < 775
    window.addEventListener("resize", handleScreenResize)

    shouldOpenMenu ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll")

    // função de limpeza do useEffect
    return () => {
      window.removeEventListener("resize", handleScreenResize)
      document.body.classList.remove("no-scroll")
    }
  }, [menuOpen])

  const OpenedMenu = (
    <ul className="nav-links">
      {links.map(link => (
        <React.Fragment key={link}>
          {link === "donate" ? (
            <li className="donate">
              <Link href={`/${link}`} aria-label={`${link} link`}>
                {link.toUpperCase()}
              </Link>
            </li>
          ) : (
            <li>
              <Link href={`/${link}`} aria-label={`${link} link`} onClick={handleMenu}>
                {link.toUpperCase()}
              </Link>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  )

  return (
    <header>
      <div>
        <a href="/" aria-label="link">
          <Image src="/logo-flag.png" alt="logo flag navbar" width={80} height={80} />
        </a>
      </div>

      {!menuOpen && (
        <Link href="/" className="icons donate">
          DONATE
        </Link>
      )}

      <div className="icons">
        {menuOpen ? (
          <FontAwesomeIcon
            onClick={handleMenu}
            icon={faX}
            style={{ cursor: "pointer", width: "25px", height: "25px" }}
          />
        ) : (
          <FontAwesomeIcon
            onClick={handleMenu}
            icon={faBars}
            style={{ cursor: "pointer", width: "25px", height: "25px" }}
          />
        )}
      </div>

      <nav className={menuOpen ? "open" : ""}>{OpenedMenu}</nav>
    </header>
  )
}

export default Navbar
