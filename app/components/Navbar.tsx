import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <Image src="/icons/logo.png" alt="logo" width={24} height={24} />

          <p>DevEvent</p>
        </Link>

        <ul>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Event</Link>
          <Link href={"/"}>Creative Event</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
