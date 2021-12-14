import Link from "next/link";
function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>Ninjs List</h1>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/ninjas">
          <a>Ninja Listing</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
