import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">
        <a>HOME</a>
      </Link>
      <a href="/about">About</a>
    </nav>
  );
}