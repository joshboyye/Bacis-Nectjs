
import Link from "next/link";
import React from "react";
import classes from'./main-header.module.css';
import styles from "../ui/button.module.css";
import events from '@/componets/events/event-list';

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Networking</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
            <li>
            <Link href="/events"> Browse All Events </Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
