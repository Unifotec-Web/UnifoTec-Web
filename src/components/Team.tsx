import Image from "next/image";
import { UserRound } from "lucide-react";
import { teamMembers } from "@/lib/public-content";

export default function Team() {
  return (
    <section id="team" className="bg-[#edf1eb] py-16 sm:py-20">
      <div className="section-shell">
        <p className="eyebrow mb-4">Our team</p>
        <h2 className="section-heading mb-4">Meet the people behind the work.</h2>
        <p className="mb-9 max-w-2xl text-slate-600">
          A multidisciplinary team combining leadership, software engineering and
          marketing to deliver practical digital solutions.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="overflow-hidden rounded-[1.4rem] border border-[#dbe5da] bg-white shadow-sm"
            >
              <div className="relative aspect-[4/5] bg-[#e3ebe3]">
                {member.imagePath ? (
                  <Image
                    src={member.imagePath}
                    alt={
                      member.imageAlt ??
                      `${member.name ?? member.role} profile photograph`
                    }
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <UserRound
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 text-[#6c8c77]"
                  />
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900">
                  {member.name ?? member.role}
                </h3>
                {member.name && (
                  <p className="mt-1 text-sm font-medium leading-relaxed text-[#285749]">
                    {member.role}
                  </p>
                )}
                {member.biography && (
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {member.biography}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
