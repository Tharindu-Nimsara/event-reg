import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <header className="event-nav-wrap">
      <nav className="event-nav">
        <Link href="/" className="brand-mark">
          HACKATHON<span>X</span>
        </Link>

        <div className="nav-links">
          <Link href="/rules">Rules</Link>
          <Link href="/#timeline">Timeline</Link>
          <Link href="/#contact">Contact</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/delegate-book" className="outline-btn">
            Delegate Booklet
          </Link>
        </div>

        <Link href="/#register" className="solid-btn">
          Register Now
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
