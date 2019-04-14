import React from "react";
import Search from "../tracks/Search";
import { Link } from "react-router-dom";

export default function AppNavbar() {
  return (
    <nav className="navbar bg-warning d-flex aling-items-center">
      <Link to="/" className="app-title">
        Lyrics App
      </Link>
      <Search />
    </nav>
  );
}
