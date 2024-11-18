import { SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full absolute top-0 left-0">
      <div className="w-full h-16 max-w-[90rem] mx-auto md:px-8 px-4 flex items-center justify-between">
        <div>
          <span className="text-xl font-bold">LOGO HERE</span>
        </div>
        <div className="flex items-center gap-4">
          <SignedOut>
            <Link href="/sign-in" className="border px-3 py-2 rounded-full">Sign in</Link>
          </SignedOut>
          <UserButton />
        </div>
      </div>
    </div>
  );
}
 
export default Navbar;