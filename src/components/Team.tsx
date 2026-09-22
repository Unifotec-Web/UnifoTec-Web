"use client";

import React from 'react';
import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";

const defaultTeam = [
  {
    name: "Jane Wanjiku",
    role: "CEO",
    sub: "Strategy & Leadership",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Kevin Mwangi",
    role: "Lead Web Developer",
    sub: "Specializing in High-Performance Frontend & Scalable Backend Architectures.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Faith Njeri",
    role: "Web & Mobile Developer",
    sub: "Expert in Cross-Platform Mobile Apps and Responsive Web Interfaces.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop"
  }
];

const Team = () => {
  const testimonials = defaultTeam.map(member => ({
    author: {
      name: member.name,
      handle: member.role,
      avatar: member.avatar
    },
    text: member.sub
  }));

  return (
    <div id="team">
      <TestimonialsSection
        title="Meet Our Expert Team"
        description="A dedicated group of multidisciplinary professionals building the future of digital solutions."
        testimonials={testimonials}
        className="bg-white"
      />
    </div>
  );
};

export default Team;
