import React from 'react';
import { Monitor, Smartphone, Settings, Shield, Layout } from 'lucide-react';

const Features = () => {
  const items = [
    { icon: Monitor, title: "Web Development", sub: "Responsive Design" },
    { icon: Smartphone, title: "Mobile Apps", sub: "Android & iOS" },
    { icon: Settings, title: "Software Solutions", sub: "Custom Workflows" },
    { icon: Shield, title: "IT Services", sub: "Support & Maintenance" },
    { icon: Layout, title: "Digital Platforms", sub: "For Your Business" },
  ];

  return (
    <div className="surface-soft py-10 border-y border-blue-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-[#0F172A] text-xs uppercase tracking-tight">{item.title}</h4>
                <p className="text-[#64748B] text-[10px] whitespace-nowrap">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
