import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>Top Ramen listing</div>
      <Link to="/">Home</Link>
    </header>
  );
}
