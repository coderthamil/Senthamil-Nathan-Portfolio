import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Server, ShoppingCart, Workflow, Bot, Github, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FastAPIIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="url(#fastapi-grad)" />
    <path d="M12 4v7h5l-6 9v-7H6l6-9z" fill="#ffffff" />
    <defs>
      <linearGradient id="fastapi-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#009485" />
        <stop offset="1" stopColor="#005950" />
      </linearGradient>
    </defs>
  </svg>
);

const ExpressIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="url(#express-grad)" />
    <path d="M7 8h10v2h-8v2h6v2h-6v2h8v2H7V8z" fill="#ffffff" />
    <defs>
      <linearGradient id="express-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#353535" />
        <stop offset="1" stopColor="#111111" />
      </linearGradient>
    </defs>
  </svg>
);

const GraphQLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="url(#graphql-grad)" />
    <path d="M12 5.5l5.5 3.18v6.36L12 18.22 6.5 15.04V8.68L12 5.5z" stroke="#ffffff" strokeWidth="1" />
    <path d="M12 5.5v12.72M6.5 8.68h11M6.5 15.04h11" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
    <circle cx="12" cy="5.5" r="1" fill="#ffffff" />
    <circle cx="17.5" cy="8.68" r="1" fill="#ffffff" />
    <circle cx="17.5" cy="15.04" r="1" fill="#ffffff" />
    <circle cx="12" cy="18.22" r="1" fill="#ffffff" />
    <circle cx="6.5" cy="15.04" r="1" fill="#ffffff" />
    <circle cx="6.5" cy="8.68" r="1" fill="#ffffff" />
    <circle cx="12" cy="12" r="1.5" fill="#ffffff" />
    <defs>
      <linearGradient id="graphql-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E10098" />
        <stop offset="1" stopColor="#B60072" />
      </linearGradient>
    </defs>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 animate-[spin_20s_linear_infinite]" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="url(#react-grad)" />
    <g stroke="#61dafb" strokeWidth="0.6">
      <ellipse rx="6.5" ry="2.2" transform="translate(12, 12) rotate(0)" />
      <ellipse rx="6.5" ry="2.2" transform="translate(12, 12) rotate(60)" />
      <ellipse rx="6.5" ry="2.2" transform="translate(12, 12) rotate(120)" />
    </g>
    <circle cx="12" cy="12" r="1" fill="#61dafb" />
    <defs>
      <linearGradient id="react-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#20232a" />
        <stop offset="1" stopColor="#15171c" />
      </linearGradient>
    </defs>
  </svg>
);

const techLogos = [
  { name: "FastAPI", icon: <FastAPIIcon />, glowColor: "hover:shadow-[0_0_20px_rgba(0,150,136,0.3)] hover:border-[#009688]/50" },
  { name: "Express.js", icon: <ExpressIcon />, glowColor: "hover:shadow-[0_0_20px_rgba(100,100,100,0.3)] hover:border-[#828282]/50" },
  { name: "GraphQL", icon: <GraphQLIcon />, glowColor: "hover:shadow-[0_0_20px_rgba(225,0,152,0.3)] hover:border-[#E10098]/50" },
  { name: "React", icon: <ReactIcon />, glowColor: "hover:shadow-[0_0_20px_rgba(97,218,251,0.3)] hover:border-[#61dafb]/50" },
];

type Project = {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  endpoints: { method: "GET" | "POST" | "PUT" | "DELETE"; path: string }[];
  metrics: { label: string; value: string }[];
  icon: JSX.Element;
};

const projects: Project[] = [
  {
    title: "Kart — E-Commerce Backend",
    tagline: "Catalog · Cart · Checkout · Orders",
    description:
      "A modular e-commerce API powering product catalog, cart, Stripe checkout, inventory locking, and webhook-driven order fulfilment. Built for multi-tenant storefronts.",
    stack: ["FastAPI", "PostgreSQL", "Redis", "Stripe", "Docker"],
    endpoints: [
      { method: "GET", path: "/api/v1/products" },
      { method: "POST", path: "/api/v1/cart/items" },
      { method: "POST", path: "/api/v1/checkout/session" },
      { method: "POST", path: "/api/v1/webhooks/stripe" },
    ],
    metrics: [
      { label: "p95 latency", value: "82 ms" },
      { label: "Throughput", value: "1.4k rps" },
      { label: "Test coverage", value: "92%" },
    ],
    icon: <ShoppingCart className="w-5 h-5" />,
  },
  {
    title: "PulseAPI — Realtime REST Platform",
    tagline: "REST + WebSockets · Auth · Rate limiting",
    description:
      "A FastAPI service exposing versioned REST endpoints plus a WebSocket gateway for live events. JWT auth, RBAC, Redis-backed rate limiting, and full OpenAPI docs.",
    stack: ["FastAPI", "Pydantic v2", "JWT", "Redis", "Uvicorn"],
    endpoints: [
      { method: "POST", path: "/auth/token" },
      { method: "GET", path: "/v1/feeds/{id}" },
      { method: "PUT", path: "/v1/feeds/{id}" },
      { method: "DELETE", path: "/v1/feeds/{id}" },
    ],
    metrics: [
      { label: "Uptime", value: "99.98%" },
      { label: "Avg response", value: "46 ms" },
      { label: "Concurrent WS", value: "12k" },
    ],
    icon: <Server className="w-5 h-5" />,
  },
  {
    title: "Flowforge — Workflow Engine",
    tagline: "Async tasks · Retries · Observability",
    description:
      "A Python-based workflow orchestrator using Celery + FastAPI for triggering, monitoring, and replaying long-running jobs with structured logs and OpenTelemetry traces.",
    stack: ["FastAPI", "Celery", "RabbitMQ", "PostgreSQL", "OpenTelemetry"],
    endpoints: [
      { method: "POST", path: "/workflows" },
      { method: "GET", path: "/workflows/{id}/runs" },
      { method: "POST", path: "/workflows/{id}/replay" },
    ],
    metrics: [
      { label: "Jobs / day", value: "2.1M" },
      { label: "Retry success", value: "99.4%" },
      { label: "Mean job time", value: "1.3s" },
    ],
    icon: <Workflow className="w-5 h-5" />,
  },
  {
    title: "Inference Gateway",
    tagline: "AI API · Streaming · Quota",
    description:
      "A FastAPI gateway in front of multiple LLM providers — token streaming via Server-Sent Events, per-key quota, prompt logging, and cost analytics.",
    stack: ["FastAPI", "Async SQLAlchemy", "Redis", "SSE", "Python 3.12"],
    endpoints: [
      { method: "POST", path: "/v1/completions" },
      { method: "GET", path: "/v1/usage" },
      { method: "POST", path: "/v1/keys" },
    ],
    metrics: [
      { label: "First token", value: "180 ms" },
      { label: "Daily tokens", value: "48M" },
      { label: "Providers", value: "5" },
    ],
    icon: <Bot className="w-5 h-5" />,
  },
];

const methodStyles: Record<string, string> = {
  GET: "text-primary border-primary/30 bg-primary/10",
  POST: "text-accent border-accent/30 bg-accent/10",
  PUT: "text-foreground border-border bg-card/60",
  DELETE: "text-destructive border-destructive/30 bg-destructive/10",
};

const BackendCard = ({ project }: { project: Project }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 150, damping: 20 });
  const smy = useSpring(my, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(smy, [0, 1], [4, -4]);
  const rotateY = useTransform(smx, [0, 1], [-4, 4]);
  const tintX = useTransform(smx, (v) => `${v * 100}%`);
  const tintY = useTransform(smy, (v) => `${v * 100}%`);
  const tint = useTransform(
    [tintX, tintY],
    ([x, y]) =>
      `radial-gradient(circle at ${x} ${y}, hsl(var(--primary) / 0.18), transparent 60%)`,
  );

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <ScrollReveal>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        className="group relative overflow-hidden rounded-xl border border-border bg-card/40 backdrop-blur-sm p-7 md:p-8 hover:border-primary/50 hover:bg-card/70 hover:shadow-[0_0_40px_hsl(var(--primary)/0.2),0_0_80px_hsl(var(--primary)/0.06)] transition-[border-color,background-color,box-shadow] duration-500"
      >
        <motion.div
          style={{ background: tint }}
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        <div className="relative">
          <div className="flex items-start justify-between mb-5">
            <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
              {project.icon}
            </div>
            <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>

          <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-primary mb-2">
            {project.tagline}
          </p>
          <h3 className="text-xl md:text-2xl font-display italic text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Endpoints */}
          <div className="rounded-lg border border-border bg-background/50 p-3 mb-5 font-mono">
            {project.endpoints.map((e) => (
              <div key={e.method + e.path} className="flex items-center gap-2 py-1 text-xs">
                <span
                  className={`px-1.5 py-0.5 rounded border text-[9px] font-bold tracking-wider ${methodStyles[e.method]}`}
                >
                  {e.method}
                </span>
                <span className="text-muted-foreground truncate">{e.path}</span>
              </div>
            ))}
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <p className="text-[9px] tracking-widest uppercase text-muted-foreground mb-1">
                  {m.label}
                </p>
                <p className="text-sm font-semibold text-primary">{m.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300">
            View repo <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
};

const BackendProjectsSection = () => {
  return (
    <section id="backend" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end mb-16">
          <ScrollReveal className="max-w-2xl">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-4">
              Backend Engineering
            </p>
            <h2 className="text-4xl md:text-6xl text-foreground font-display italic mb-6">
              APIs that <span className="text-primary">power products.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Python &amp; FastAPI projects across e-commerce, realtime platforms, workflow
              orchestration, and AI gateways — production-grade REST services with auth,
              payments, and observability.
            </p>
          </ScrollReveal>

          {/* Technology logos */}
          <ScrollReveal className="grid grid-cols-2 gap-3 w-full lg:w-[320px]">
            {techLogos.map((tech) => (
              <div
                key={tech.name}
                className={`group flex items-center gap-3 p-3.5 rounded-xl border border-border bg-card/25 backdrop-blur-sm transition-all duration-300 hover:bg-card/75 hover:-translate-y-1 cursor-default ${tech.glowColor}`}
              >
                {tech.icon}
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-foreground truncate">
                    {tech.name}
                  </span>
                  <span className="text-[9px] text-muted-foreground uppercase tracking-widest">
                    Technology
                  </span>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p) => (
            <BackendCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackendProjectsSection;
