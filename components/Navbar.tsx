import Link from 'next/link';
import Image from 'next/image';
import logo from './../public/svgs/3.svg';

export default function Navbar() {
  return (
    <>
      <nav className="navbar flex justify-between items-center mx-20 px-8 rounded-2xl">
        <div className="navbar-logo">
          <Link href="/">
            <Image src={logo} alt="Logo" width={90} height={90} />
          </Link>
        </div>
        <div className="nav-links flex justify-around items-center p-2 gap-5 text-[#063a80]">
          <Link href="/" className="link">Home</Link>
          <Link href="/about" className="link">About</Link>
          <Link href="/rentals" className="link">Rentals</Link>
          <Link href="/contact" className="link">Contact</Link>
        </div>
        <div className="signups flex justify-between gap-5 p-2">
          <Link href="/signin" className="p-3  rounded-md">Sign in</Link>
          <Link href="/signup" className="p-3 bg-[#063a80] rounded-md text-white hover:opacity-90">Sign up</Link>
        </div>
      </nav>
    </>
  );
}