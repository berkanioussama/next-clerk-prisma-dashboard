import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/hero";
import Categories from "@/app/components/categories";

export default function Home() {
  return (
    <main className="flex flex-col min-h-svh">
      <Navbar />
      <Hero />
      <Categories />
    </main>
  );
}
