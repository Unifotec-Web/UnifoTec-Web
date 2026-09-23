import Image from "next/image";
import { UserRound } from "lucide-react";
import { teamMembers } from "@/lib/public-content";

export default function Team() {
  return <section id="team" className="bg-white py-12 sm:py-16 lg:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h2 className="mb-2 text-center text-3xl font-extrabold text-dark">Our Team</h2><p className="mb-8 text-center text-grey sm:mb-10">Our published team structure.</p><div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">{teamMembers.map((member) => <article key={member.id} className="overflow-hidden rounded-2xl border border-gray-100 bg-light text-center"><div className="relative aspect-[4/3] bg-blue-50">{member.imagePath ? <Image src={member.imagePath} alt={member.imageAlt ?? `${member.name ?? member.role} profile photograph`} fill className="object-cover" /> : <UserRound aria-hidden="true" className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 text-primary/35" />}</div><div className="p-5"><h3 className="font-bold text-dark">{member.name ?? member.role}</h3>{member.name && <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>}{member.biography ? <p className="mt-3 text-sm leading-relaxed text-grey">{member.biography}</p> : <p className="mt-3 text-sm text-grey">Profile details coming soon</p>}</div></article>)}</div></div></section>;
}
