import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./Nav.module.scss";

interface NavProps {
  className: string;
}

interface MenuItem {
  title: string;
  path: string;
}

const menu: Array<MenuItem> = [
  { title: "Home", path: "/" },
  { title: "Connect-4", path: "/connect-4" },
];

const Nav: FC<NavProps> = ({ className }) => {
  const router = useRouter();

  return (
    <header className={`${className} ${styles.nav}`}>
      <nav>
        <ul>
          {menu.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.path}>
                  <a
                    className={
                      router.pathname === item.path ? styles.active : ""
                    }
                  >
                    {item.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
