import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
export default function TeamPage() { return <main className="min-h-screen pt-20"><Navbar /><PageHero eyebrow="Our team" title="The roles behind the work" description="Our team structure is published by role while individual names, photographs and biographies await approval." /><Team /><CTA /><Footer /></main>; }
