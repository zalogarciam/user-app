import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto">
      <header className="py-5">
        <nav className="bg-white py-2 rounded-xl my-2">
          <ul className="flex flex-row gap-6">
            <Link href={"/"} className="text-black">
              Home
            </Link>
            <Link href={"user"} className="text-black">
              Users
            </Link>
            <Link href={"product"} className="text-black">
              Products
            </Link>
            <Link href={"contact"} className="text-black">
              Contact
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
}
