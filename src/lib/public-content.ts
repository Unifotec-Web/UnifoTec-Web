export const company = {
  name: "UNIFOTEC-WEB",
  statement: "Technology That Connects Businesses to the Digital World",
  tagline: "Websites. Apps. Digital Solutions.",
  phone: "+233 24 499 3720",
  phoneHref: "tel:+233244993720",
  email: "info@unifotecweb.com",
  emailHref: "mailto:info@unifotecweb.com",
  domain: "https://unifotecweb.com",
  address: ["19 Kofi Annan Street", "Airport Residential Area", "Accra, Ghana"],
  primaryMarket: "Ghana",
} as const;

export const companyProfile = {
  story: [
    "UNIFOTEC-WEB was formed around a simple idea: businesses should be able to use modern technology without being overwhelmed by it. From our base in Accra, we bring together development, design and business support to help organisations establish a strong digital presence and improve the way they work.",
    "We work collaboratively from the first conversation to launch. Every engagement begins with the business need, not a preferred technology, so the result is practical, maintainable and appropriate for the people who will use it.",
  ],
  mission: "To design and deliver practical digital solutions that help businesses communicate clearly, operate efficiently and serve their customers better.",
  vision: "To become a trusted Ghanaian technology partner known for dependable delivery, thoughtful design and digital solutions that support sustainable business growth.",
  values: [
    ["Clarity", "We communicate in plain language and make project decisions easy to understand."],
    ["Reliability", "We plan carefully, communicate progress and take responsibility for the work we deliver."],
    ["Practical innovation", "We use modern technology where it creates real value—not simply because it is new."],
    ["Collaboration", "We build with clients, users and team members rather than working around them."],
    ["Continuous improvement", "We review, learn and refine our process as technology and customer needs evolve."],
  ],
} as const;

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Process", href: "/process" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
] as const;

export const services = [
  ["Website Development", "Responsive business websites and web platforms designed around your audience.", "/services/web-development"],
  ["Mobile App Development", "Mobile applications planned around real user needs and business operations.", "/services/mobile-app"],
  ["Custom Software Development", "Purpose-built software for business workflows, teams and digital products.", "/services/custom-software"],
  ["E-Commerce Development", "Online stores and commerce experiences with practical customer journeys.", "/services/ecommerce"],
  ["API & Payment Integration", "Secure connections between applications, business systems and suitable payment providers.", "/services/api-payment"],
  ["Business Automation", "Digital workflows that reduce repetitive work and improve visibility across operations.", "/services/business-automation"],
  ["UI/UX Design", "Clear interface and experience design that makes digital products easier to use.", "/services"],
  ["Website Maintenance & Technical Support", "Structured maintenance and technical support for existing digital products.", "/services/maintenance"],
  ["Cloud & Hosting Solutions", "Hosting and cloud guidance matched to the scale and requirements of each project.", "/services/cloud-hosting"],
  ["Digital Transformation", "Practical improvements to business processes, customer journeys and digital operations.", "/services/digital-transformation"],
] as const;

export const deliverySteps = [
  ["Discover", "We discuss the business, audience, goals, content, budget and technical requirements."],
  ["Plan", "We define the scope, responsibilities, milestones and approval points before development begins."],
  ["Design", "We prepare the structure and visual direction, then refine it through focused feedback."],
  ["Build", "Our developers implement the approved experience and share progress for review."],
  ["Test", "We check the agreed functionality, responsiveness, accessibility and launch requirements."],
  ["Launch & support", "We deploy the approved product and agree on the maintenance or support needed afterwards."],
] as const;

export const differentiators = [
  ["Responsive delivery", "A focused team and clear approval points help work move without unnecessary delays."],
  ["Reliable communication", "Clients know what is being worked on, what requires approval and what comes next."],
  ["Business-first thinking", "We connect technical decisions to the people, processes and goals behind the project."],
  ["Solutions that can grow", "We consider maintainability and future requirements instead of treating launch as the end."],
] as const;

export type TeamMember = {
  id: string;
  role: string;
  name?: string;
  biography?: string;
  imagePath?: string;
  imageAlt?: string;
};

export const teamMembers: readonly TeamMember[] = [
  { id: "chief-executive-officer", role: "Chief Executive Officer" },
  { id: "lead-developer", role: "Lead Developer" },
  { id: "frontend-developer", role: "Frontend Developer" },
  { id: "backend-developer", role: "Backend Developer" },
  { id: "ui-ux-designer", role: "UI/UX Designer" },
  { id: "digital-marketing-specialist", role: "Digital Marketing Specialist" },
  { id: "marketing-business-development-specialist", role: "Marketing & Business Development Specialist" },
] as const;

export const teamRoles = teamMembers.map(({ role }) => role);

export const conceptProjects = [
  {
    title: "Business Operations Platform",
    category: "Concept showcase · Custom software",
    summary: "A modular operations concept showing how customer records, billing, payments and reporting can be brought into one accessible workspace.",
    capabilities: ["Role-based workspaces", "Billing and payment workflows", "Operational reporting"],
    image: "/images/illustrations/automation-cloud.svg",
  },
  {
    title: "Retail & Inventory Experience",
    category: "Concept showcase · Commerce",
    summary: "A retail concept designed around straightforward sales, stock visibility and a customer-friendly digital experience.",
    capabilities: ["Product and stock management", "Responsive checkout", "Sales visibility"],
    image: "/images/illustrations/web-commerce.svg",
  },
  {
    title: "Mobile Service Application",
    category: "Concept showcase · Mobile",
    summary: "A mobile-first service concept demonstrating simple onboarding, secure account access and task-focused customer journeys.",
    capabilities: ["Mobile-first interface", "Account journeys", "Service notifications"],
    image: "/images/illustrations/mobile-software.svg",
  },
] as const;
