import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/hero";

export default function Home() {
  return (
    <main className="flex min-h-svh">
      <Navbar />
      <Hero />
    </main>
  );
}
