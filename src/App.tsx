import { useEffect, useRef, useState, type ComponentPropsWithoutRef, type ElementType } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  Dumbbell,
  ExternalLink,
  Gauge,
  Home,
  Hotel,
  Layers3,
  LayoutDashboard,
  Menu,
  MessageCircle,
  Moon,
  Newspaper,
  Palette,
  PiggyBank,
  Rocket,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  SunMedium,
  Users,
  UtensilsCrossed,
  X,
  type LucideIcon,
} from "lucide-react";

// TODO: swap for your real inbox / WhatsApp number before this goes live.
const CONTACT_EMAIL = "hello@tech10x.in";
const AUDIT_MAILTO = `mailto:${CONTACT_EMAIL}?subject=Free%205-point%20store%20audit&body=Hi%20Tech10x%2C%0A%0AHere%27s%20a%20link%20to%20our%20store%3A%20`;

const capabilities = [
  "Storefronts",
  "AI Support Bots",
  "WhatsApp Automation",
  "Store Audits",
  "MVP Builds",
];

const stats = [
  { value: 14, suffix: "-day", label: "Launch Sprint delivery, or 10% off" },
  { value: 3, suffix: "", label: "clients we take on at a time, max" },
  { value: 50, suffix: "+", label: "support hours/month an AI bot can take off your team" },
];

const work: Array<{ icon: LucideIcon; iconClass: string; title: string; text: string; link: string; liveLink?: string }> = [
  {
    icon: ShoppingCart,
    iconClass: "from-blue-600 to-blue-900",
    title: "E-Commerce Platform",
    text: "Product listing, cart, and checkout flow.",
    link: "https://github.com/SauravBeginner/ecommerce",
    liveLink: "https://ecom.tech10x.in",
  },
  {
    icon: UtensilsCrossed,
    iconClass: "from-amber-600 to-stone-900",
    title: "Restaurant Website",
    text: "Online booking, seasonal menu, banquet and catering pages.",
    link: "https://github.com/SauravBeginner/restaurant-website",
    liveLink: "https://resturant.tech10x.in",
  },
  {
    icon: Dumbbell,
    iconClass: "from-red-600 to-neutral-900",
    title: "Gym & Fitness Studio",
    text: "Class schedules, trainer profiles, membership plans, trial booking.",
    link: "https://github.com/SauravBeginner/gym-website",
    liveLink: "https://gyms.tech10x.in",
  },
  {
    icon: Hotel,
    iconClass: "from-sky-700 to-slate-900",
    title: "Hotel Booking",
    text: "Room browsing, amenities, dining, and a working reservation flow.",
    link: "https://github.com/SauravBeginner/hotel-booking",
    liveLink: "https://hotel.tech10x.in",
  },
  {
    icon: Home,
    iconClass: "from-emerald-600 to-slate-900",
    title: "Real Estate Agency",
    text: "Property listings with a mortgage calculator and viewing-request booking.",
    link: "https://github.com/SauravBeginner/real-estate-agency",
    liveLink: "https://flats.tech10x.in",
  },
  {
    icon: Scale,
    iconClass: "from-amber-700 to-neutral-900",
    title: "Law Firm",
    text: "Practice areas, attorney profiles, FAQ accordion, consultation booking.",
    link: "https://github.com/SauravBeginner/law-firm",
    liveLink: "https://lawfirm.tech10x.in",
  },
  {
    icon: Sparkles,
    iconClass: "from-rose-500 to-rose-900",
    title: "Salon & Spa",
    text: "Categorized service menu, stylist profiles, appointment booking.",
    link: "https://github.com/SauravBeginner/salon-spa",
    liveLink: "https://spa.tech10x.in",
  },
  {
    icon: Palette,
    iconClass: "from-orange-600 to-neutral-900",
    title: "Interior Design Studio",
    text: "Editorial-style portfolio with a filterable project gallery.",
    link: "https://github.com/SauravBeginner/interior-design-studio",
    liveLink: "https://interior.tech10x.in",
  },
  {
    icon: MessageCircle,
    iconClass: "from-violet-500 to-purple-950",
    title: "AI Chat App",
    text: "AI-powered chat interface with text and voice input.",
    link: "https://github.com/SauravBeginner/ai-chat-app",
    liveLink: "https://chat.tech10x.in",
  },
  {
    icon: Building2,
    iconClass: "from-emerald-700 to-slate-800",
    title: "Hotel SaaS Platform",
    text: "QR-based in-room ordering, cab booking, sightseeing packages.",
    link: "https://github.com/SauravBeginner/hotel-saas-platform",
    liveLink: "https://booking.tech10x.in",
  },
  {
    icon: LayoutDashboard,
    iconClass: "from-indigo-600 to-purple-900",
    title: "Admin Dashboard",
    text: "User management, analytics, and reporting views.",
    link: "https://github.com/SauravBeginner/admin-dashboard",
    liveLink: "https://admin.tech10x.in",
  },
  {
    icon: Newspaper,
    iconClass: "from-orange-500 to-amber-900",
    title: "Blog Website",
    text: "Full-featured blog UI, built for speed.",
    link: "https://github.com/SauravBeginner/blog-website",
    liveLink: "https://blogs.tech10x.in",
  },
  {
    icon: PiggyBank,
    iconClass: "from-teal-500 to-emerald-900",
    title: "Qwark",
    text: "SEBI-registered investment advisory — account aggregation, financial health score, goal-based portfolios. Contributed as part of the engineering team.",
    link: "https://qwark.in",
    liveLink: "https://qwark.in",
  },
];

const features: Array<{ icon: LucideIcon; title: string; text: string }> = [
  {
    icon: Rocket,
    title: "Launch Sprint",
    text: "Your store or business site, designed, built, and live in 14 days — payments, analytics, and a training handover included.",
  },
  {
    icon: MessageCircle,
    title: "AI Support Bot",
    text: "A chatbot trained on your catalog, policies, and FAQs — on your site and WhatsApp. Handles order-status and returns so your team doesn't have to.",
  },
  {
    icon: Gauge,
    title: "Store Rescue",
    text: "A full audit of your store plus the top 10 conversion and speed fixes, implemented. You get a before/after report with the numbers.",
  },
  {
    icon: Layers3,
    title: "MVP-in-30",
    text: "Your app idea, scoped tight and shipped in 30 days. Web or mobile. Fixed scope, fixed price, weekly demos.",
  },
];

const steps = [
  "Free 5-point audit — we tell you what's broken and what it's costing you.",
  "Fixed scope, fixed price — you approve the plan before we write a line of code.",
  "Ship with a deadline guarantee — weekly demos, live in days, not months.",
];

const packages = [
  {
    name: "Launch Sprint",
    price: "₹40k – 80k",
    text: "Store or business site, live in 14 days.",
    items: ["Design + build", "Payments & analytics", "Live in 14 days or 10% off"],
  },
  {
    name: "AI Support Bot",
    price: "₹60k – 120k",
    text: "Chatbot trained on your catalog and policies.",
    items: ["Site + WhatsApp", "Order-status & returns", "Trained on your own data"],
    featured: true,
  },
  {
    name: "Store Rescue",
    price: "₹50k – 90k",
    text: "Audit plus the top 10 fixes, implemented.",
    items: ["Full store audit", "Top 10 fixes shipped", "Before/after report"],
  },
  {
    name: "MVP-in-30",
    price: "₹2L – 4L",
    text: "Your app idea, shipped in 30 days.",
    items: ["Web or mobile", "Fixed scope & price", "Weekly demos"],
  },
  {
    name: "Care Plan",
    price: "from ₹15k/mo",
    text: "Maintenance, monitoring, and monthly improvements.",
    items: ["Uptime monitoring", "Monthly improvement hours", "Priority response"],
  },
];

const faqs = [
  {
    question: "Why fixed price?",
    answer:
      "Because you shouldn't carry the risk of our speed. Scope is agreed upfront; changes outside scope are quoted separately.",
  },
  {
    question: "What if it takes longer than promised?",
    answer: "Launch Sprints carry a deadline guarantee: live in 14 days or 10% off.",
  },
  {
    question: "Do you disappear after launch?",
    answer: "Every project includes 2 weeks of post-launch fixes; most clients move to a Care Plan.",
  },
  {
    question: "Can you work with our existing site or agency?",
    answer: "Yes. About a third of our work is white-label for other agencies.",
  },
];

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Badge({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-black uppercase tracking-[0.1em] text-primary",
        className,
      )}
      {...props}
    />
  );
}

function Card({ className, ...props }: ComponentPropsWithoutRef<"article">) {
  return (
    <article
      className={cn(
        "rounded-lg border border-border bg-card p-6 text-card-foreground shadow-[0_18px_44px_rgba(24,32,44,0.08)] transition-all duration-300 dark:shadow-[0_22px_54px_rgba(0,0,0,0.28)]",
        className,
      )}
      {...props}
    />
  );
}

type ButtonProps<T extends ElementType> = {
  as?: T;
  variant?: "primary" | "secondary" | "ghost";
} & ComponentPropsWithoutRef<T>;

function Button<T extends ElementType = "a">({
  as,
  className,
  variant = "primary",
  ...props
}: ButtonProps<T>) {
  const Component = as ?? "a";

  return (
    <Component
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-extrabold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        variant === "primary" && "bg-foreground text-background shadow-[0_14px_30px_rgba(24,32,44,0.18)]",
        variant === "secondary" && "border border-border bg-card text-foreground",
        variant === "ghost" && "border border-border bg-background text-foreground",
        className,
      )}
      {...props}
    />
  );
}

function useCountUp(target: number, duration = 1500, active = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const isDecimal = target % 1 !== 0;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };

    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
}

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(value, 1400, active);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Fire as soon as any part of the stat is visible, with a bit of
    // lead-in — a 0.5 threshold was missing fast scrolls and leaving
    // the counter stuck at its initial value.
    if (node.getBoundingClientRect().top < window.innerHeight) {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <strong className="mb-1 block text-4xl">
        {count}{suffix}
      </strong>
      <span className="text-muted-foreground">{label}</span>
    </div>
  );
}

function DashboardVisual() {
  const barHeights = ["h-20", "h-32", "h-24", "h-40", "h-48"];

  return (
    <div className="animate-float-panel w-full rounded-lg border border-border bg-card/95 p-3 shadow-[0_22px_60px_rgba(24,32,44,0.16)] dark:shadow-[0_22px_60px_rgba(0,0,0,0.36)]">
      <div className="mb-3 flex gap-2 border-b border-border pb-3">
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-2 rounded-lg border border-border bg-muted p-4 sm:col-span-1 sm:row-span-2">
          <p className="mb-4 text-sm text-muted-foreground">Support tickets automated</p>
          <div className="flex h-32 items-end gap-2 sm:h-44">
            {barHeights.map((height, index) => (
              <span
                className={cn(
                  "animate-pulse-bar min-h-10 flex-1 origin-bottom rounded-t-md bg-gradient-to-t from-accent to-primary",
                  height,
                )}
                style={{ animationDelay: `${index * 120}ms` }}
                key={height}
              />
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-border bg-muted p-4">
          <Clock3 className="mb-4 text-primary" size={20} />
          <strong className="block text-2xl">14 days</strong>
          <small className="text-muted-foreground">avg. launch time</small>
        </div>
        <div className="rounded-lg border border-border bg-muted p-4">
          <Users className="mb-4 text-primary" size={20} />
          <strong className="block text-2xl">Max 3</strong>
          <small className="text-muted-foreground">clients at a time</small>
        </div>
      </div>
    </div>
  );
}

const navLinks = [
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "workflow", label: "How we work" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
];

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("landing-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : prefersDark ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("landing-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .map(({ id }) => ({ id, element: document.getElementById(id) }))
        .filter((s): s is { id: string; element: HTMLElement } => s.element !== null);

      if (sections.length === 0) return;

      const scrollY = window.scrollY + 100;
      let currentSection = sections[0].id;
      for (const { id, element } of sections) {
        if (element.offsetTop <= scrollY) currentSection = id;
        else break;
      }
      setActiveSection(currentSection);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 z-50 h-[3px] bg-primary transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header className="sticky top-0 z-20 flex items-center gap-4 border-b border-border bg-background/90 px-4 py-3 backdrop-blur md:px-10 lg:px-[72px]">
        <a
          className="inline-flex w-fit items-center gap-2.5 no-underline"
          href="#"
          aria-label="Tech10x home"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <span className="grid h-9 w-9 place-items-center rounded-md bg-foreground text-xs font-black text-background">
            10X
          </span>
          <strong>Tech10x</strong>
        </a>

        <nav className="hidden flex-1 justify-center gap-6 text-sm font-bold text-muted-foreground md:flex">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              className={cn(
                "relative whitespace-nowrap transition-colors hover:text-foreground",
                activeSection === id && "text-foreground",
              )}
              href={`#${id}`}
              aria-current={activeSection === id ? "true" : undefined}
            >
              {label}
              {activeSection === id && (
                <span className="absolute -bottom-[17px] left-0 right-0 h-[2px] rounded-full bg-primary" />
              )}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button href={AUDIT_MAILTO} className="hidden sm:inline-flex px-3.5">
            Get a free audit
          </Button>

          <Button
            as="button"
            type="button"
            variant="secondary"
            className="px-3"
            onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon size={17} /> : <SunMedium size={17} />}
          </Button>

          <Button
            as="button"
            type="button"
            variant="secondary"
            className="md:hidden px-3"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </header>

      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-[60px] z-10 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <nav className="fixed top-[60px] left-0 right-0 z-20 md:hidden border-b border-border bg-background/95 backdrop-blur">
            <div className="flex flex-col gap-4 px-4 py-4">
              {navLinks.map(({ id, label }) => (
                <a
                  key={id}
                  className={cn(
                    "text-sm font-bold transition-colors hover:text-foreground",
                    activeSection === id ? "text-foreground" : "text-muted-foreground",
                  )}
                  href={`#${id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={activeSection === id ? "true" : undefined}
                >
                  {label}
                </a>
              ))}
              <Button href={AUDIT_MAILTO} className="w-fit" onClick={() => setMobileMenuOpen(false)}>
                Get a free audit
              </Button>
            </div>
          </nav>
        </>
      )}

      <main className="overflow-hidden">
        <section className="relative overflow-hidden" id="top">
          {/* Background decorations */}
          <div className="hero-mesh pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="hero-sweep animate-sweep absolute -left-[35%] top-0 h-full w-[32%]" />
            <div className="animate-drift absolute right-[8%] top-[12%] h-[360px] w-[560px] rounded-full border border-foreground/15" />
            <div className="animate-drift-reverse absolute right-[15%] top-[28%] h-[260px] w-[420px] rounded-full border border-foreground/15" />
          </div>
          <div className="hero-fade pointer-events-none absolute inset-0" aria-hidden="true" />

          <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 px-4 py-12 sm:px-8 md:py-16 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-9 lg:py-20">
          <div>
            <Badge>AI dev studio for D2C brands</Badge>
            <h1 className="mt-4 text-[2.75rem] leading-[1.05] tracking-normal sm:text-[3.6rem] lg:text-[4.1rem]">
              Sell more. Support less.
            </h1>
            <p className="mt-4 max-w-[52ch] text-base leading-7 text-muted-foreground sm:text-lg">
              We build custom storefronts, AI support bots, and WhatsApp automation for D2C
              brands — shipped in weeks, not months. Fixed prices, fixed deadlines.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={AUDIT_MAILTO}>
                Get a free 5-point store audit <ArrowRight size={18} />
              </Button>
              <Button href="#pricing" variant="secondary">
                See pricing <ChevronRight size={18} />
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Every project ships with a deadline guarantee.
            </p>
          </div>

          <DashboardVisual />
          </div>
        </section>

        {/* Capability strip */}
        <section className="mx-auto grid max-w-[1180px] grid-cols-2 gap-3 border-b border-border px-4 py-8 text-sm font-black text-muted-foreground sm:grid-cols-5 sm:px-8 lg:px-9">
          {capabilities.map((capability) => (
            <span className="rounded-md border border-border bg-card px-3 py-3 text-center sm:border-0 sm:bg-transparent" key={capability}>
              {capability}
            </span>
          ))}
        </section>

        {/* Animated stats */}
        <section className="mx-auto grid max-w-[1180px] grid-cols-1 gap-px px-4 py-10 sm:grid-cols-3 sm:px-8 lg:px-9">
          {stats.map((stat) => (
            <Card
              className="rounded-none shadow-none first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:first:rounded-tr-none sm:last:rounded-r-lg sm:last:rounded-bl-none"
              key={stat.label}
            >
              <AnimatedStat value={stat.value} suffix={stat.suffix} label={stat.label} />
            </Card>
          ))}
        </section>

        {/* Services */}
        <section className="mx-auto max-w-[1180px] px-4 py-12 sm:px-8 lg:px-9" id="services">
          <div className="mb-7 max-w-[720px]">
            <Badge>Ways we can work together</Badge>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Productized packages, not open-ended retainers.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every engagement has a fixed scope and a fixed price, so you know what you're
              getting and when it ships.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, text }) => (
              <Card
                key={title}
                className="cursor-default hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_56px_rgba(24,32,44,0.14)] dark:hover:shadow-[0_24px_56px_rgba(0,0,0,0.38)]"
              >
                <Icon className="mb-5 text-accent" size={22} />
                <h3 className="mb-2 text-lg font-extrabold">{title}</h3>
                <p className="leading-7 text-muted-foreground">{text}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Work showcase */}
        <section className="mx-auto max-w-[1180px] px-4 py-12 sm:px-8 lg:px-9" id="work">
          <div className="mb-7 max-w-[720px]">
            <Badge>What we've built</Badge>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Real platforms, across real verticals.
            </h2>
            <p className="mt-4 text-muted-foreground">
              A sample of the storefronts, booking flows, dashboards, and AI interfaces we've
              shipped — proof of the build quality and speed behind every package.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {work.map(({ icon: Icon, iconClass, title, text, link, liveLink }) => (
              <Card
                key={title}
                className="group grid gap-4 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_56px_rgba(24,32,44,0.14)] dark:hover:shadow-[0_24px_56px_rgba(0,0,0,0.38)]"
              >
                <div className={cn("grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br text-white", iconClass)}>
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="mb-1.5 text-lg font-extrabold">{title}</h3>
                  <p className="leading-7 text-muted-foreground">{text}</p>
                </div>
                <a
                  className="inline-flex w-fit items-center gap-1.5 text-sm font-bold text-primary no-underline"
                  href={liveLink ?? link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {liveLink ? "View live site" : "View code"} <ExternalLink size={14} />
                </a>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Tech10x */}
        <section className="mx-auto max-w-[1180px] px-4 py-12 sm:px-8 lg:px-9">
          <Card className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <Badge>Why Tech10x</Badge>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">One senior team, not agency bloat.</h2>
            </div>
            <p className="leading-7 text-muted-foreground">
              Most D2C brands don't need a big agency and a six-month timeline — they need a
              small team that ships. We work with a maximum of three clients at a time, so
              every project gets real attention instead of getting handed off to a junior
              account team. About a third of our work is white-label for other agencies that
              need senior engineering on tap.
            </p>
          </Card>
        </section>

        {/* How we work */}
        <section className="mx-auto grid max-w-[1180px] gap-8 px-4 py-12 sm:px-8 md:grid-cols-[0.85fr_1.15fr] lg:px-9" id="workflow">
          <div>
            <Badge>How we work</Badge>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              From audit to a live, working system.
            </h2>
          </div>
          <ol className="grid gap-3">
            {steps.map((step) => (
              <li className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground" key={step}>
                <Check className="shrink-0 text-primary" size={18} />
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Pricing */}
        <section className="mx-auto max-w-[1180px] px-4 py-12 sm:px-8 lg:px-9" id="pricing">
          <div className="mb-7 max-w-[720px]">
            <Badge>Pricing</Badge>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Fixed-price packages for every stage.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <Card
                className={cn(
                  "grid gap-5",
                  pkg.featured && "border-primary/60 shadow-[0_22px_54px_rgba(24,32,44,0.14)] dark:shadow-[0_22px_54px_rgba(0,0,0,0.38)]",
                )}
                key={pkg.name}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-extrabold">{pkg.name}</h3>
                    {pkg.featured ? <Badge className="normal-case tracking-normal">Popular</Badge> : null}
                  </div>
                  <div className="my-3">
                    <strong className="text-3xl">{pkg.price}</strong>
                  </div>
                  <p className="leading-7 text-muted-foreground">{pkg.text}</p>
                </div>
                <ul className="grid gap-2 pl-5 text-muted-foreground">
                  {pkg.items.map((item) => (
                    <li className="list-disc" key={item}>{item}</li>
                  ))}
                </ul>
                <Button className="mt-auto w-fit" href={AUDIT_MAILTO} variant={pkg.featured ? "primary" : "secondary"}>
                  Start with an audit <ArrowRight size={16} />
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ accordion */}
        <section className="mx-auto max-w-[1180px] px-4 py-12 sm:px-8 lg:px-9" id="faq">
          <div className="mb-7 max-w-[720px]">
            <Badge>FAQ</Badge>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Quick answers before we start.</h2>
          </div>
          <div className="grid gap-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <article
                  key={faq.question}
                  className="rounded-lg border border-border bg-card text-card-foreground shadow-[0_18px_44px_rgba(24,32,44,0.08)] transition-all duration-300 dark:shadow-[0_22px_54px_rgba(0,0,0,0.28)]"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-lg font-extrabold">{faq.question}</h3>
                    <ChevronDown
                      size={20}
                      className={cn("shrink-0 text-muted-foreground transition-transform duration-300", isOpen && "rotate-180")}
                    />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
                    )}
                  >
                    <p className="px-6 pb-6 leading-7 text-muted-foreground">{faq.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mx-auto flex max-w-[1180px] flex-col gap-5 border-t border-border px-4 py-12 sm:px-8 md:flex-row md:items-center lg:px-9">
          <ShieldCheck className="shrink-0 text-primary" size={24} />
          <div>
            <h2 className="text-3xl leading-tight sm:text-4xl">Ready to fix what's costing you sales and support hours?</h2>
            <p className="mt-2 text-muted-foreground">
              Free 5-point audit, no obligation — most brands hear back from us within a day.
            </p>
          </div>
          <Button className="md:ml-auto" href={AUDIT_MAILTO}>
            Get your free audit <ArrowRight size={18} />
          </Button>
        </section>
      </main>
    </>
  );
}

export default App;
