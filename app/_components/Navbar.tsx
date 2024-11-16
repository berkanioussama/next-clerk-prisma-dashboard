import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="w-full absolute top-0 left-0">
      <div className="w-full h-16 max-w-[90rem] mx-auto md:px-8 px-4 flex items-center justify-between">
        <div>
          <span className="text-xl font-bold">LOGO HERE</span>
        </div>
        <UserButton />
      </div>
    </div>
  );
}
 
export default Navbar;