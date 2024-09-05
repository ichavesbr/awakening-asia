"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import "./navbar.css"

const links = ["about us", "school", "events", "lives", "join us", "contact", "donate"]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenu = () => setMenuOpen(!menuOpen)

  useEffect(() => {
    const handleScreenResize = () => window.innerWidth > 768 && setMenuOpen(false)
    window.addEventListener("resize", handleScreenResize)

    menuOpen ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll")

    // função de limpeza do useEffect
    return () => {
      window.removeEventListener("resize", handleScreenResize)
      document.body.classList.remove("no-scroll")
    }
  }, [menuOpen])

  return (
    <header>
      <div>
        <a href="/home.html" aria-label="link">
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

      <nav className={menuOpen ? "open" : ""}>
        <ul>
          {links.map(link => (
            <React.Fragment key={link}>
              {link === "donate" ? (
                <li className="donate">
                  <a href={`/${link}.html`} aria-label={`${link} link`}>
                    {link.toUpperCase()}
                  </a>
                </li>
              ) : (
                <li>
                  <a href={`/${link}.html`} aria-label={`${link} link`}>
                    {link.toUpperCase()}
                  </a>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </header>
  )
}
export default Navbar
