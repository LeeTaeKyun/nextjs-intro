import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">HOME</Link>
      <Link href="/about">ABOUT</Link>
    </nav>
  );
}