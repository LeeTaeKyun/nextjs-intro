import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link>
        <a>HOME</a>
      </Link>
      <a href="/about">About</a>
    </nav>
  );
}