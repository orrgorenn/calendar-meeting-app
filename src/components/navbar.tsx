import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/logo.png";

import AuthModal from "./auth-modal";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-5">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="logo" className="h-10 w-14" />
        <h4 className="text-3xl font-semibold">
          Cal<span className="text-orange-500">Meeting</span>
        </h4>
      </Link>
      <nav>
        <AuthModal />
      </nav>
    </div>
  );
}
