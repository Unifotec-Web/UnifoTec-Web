import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Team from "@/components/Team";

export default function TeamPage() {
  return <main className="pt-20"><Navbar /><section className="bg-dark px-4 py-12 text-center text-white sm:py-16"><p className="mb-3 font-bold uppercase tracking-widest text-primary">Our Team</p><h1 className="mb-4 text-4xl font-extrabold md:text-6xl">The roles behind our work</h1><p className="mx-auto max-w-2xl text-slate-300">Our team structure is published by role while individual profiles await approval.</p></section><Team /><Footer /></main>;
}
