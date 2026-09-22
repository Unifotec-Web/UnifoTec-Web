import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Team from "@/components/Team";

export default function TeamPage() {
  return <main className="min-h-screen pt-20"><Navbar /><section className="bg-dark text-white py-24 text-center px-4"><p className="text-primary font-bold uppercase tracking-widest mb-4">Our Team</p><h1 className="text-4xl md:text-6xl font-extrabold mb-6">The roles behind our work</h1><p className="text-slate-300 max-w-2xl mx-auto">Our team structure is published by role while individual profiles await approval.</p></section><Team /><Footer /></main>;
}
