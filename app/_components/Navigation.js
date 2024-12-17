import Link from "next/link";

function Navigation() {
  return (
    <ul>
         <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/cabins">Explore luxury cabins</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/account">Your Account</Link>
      </li>
    </ul>
  );
}

export default Navigation;