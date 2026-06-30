import { useEffect, useState, type ComponentPropsWithoutRef, type ElementType } from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  Clock3,
  Layers3,
  Menu,
  Moon,
  ShieldCheck,
  SunMedium,
  Users,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

const partners = ["Northstar", "Fieldline", "Astra", "Summit", "Brightside"];

const stats = [
  { value: "42%", label: "faster campaign launches" },
  { value: "18k", label: "lead events processed" },
  { value: "99.9%", label: "uptime target" },
];

const features: Array<{ icon: LucideIcon; title: string; text: string }> = [
  {
    icon: BarChart3,
    title: "Campaign analytics",
    text: "Track traffic, demo requests, source quality, and conversion trends from one clean view.",
  },
  {
    icon: Users,
    title: "Lead qualification",
    text: "Capture business context, route prospects, and keep handoff details ready for sales.",
  },
  {
    icon: ShieldCheck,
    title: "Trust-first messaging",
    text: "Use proof, security cues, and clear outcomes so the page feels credible quickly.",
  },
  {
    icon: Zap,
    title: "Fast launch system",
    text: "Reusable page sections make it easy to test offers, pricing, and audience-specific pages.",
  },
];

const steps = [
  "Position the offer with a clear customer outcome.",
  "Capture and qualify every high-intent visitor.",
  "Measure the page, improve the copy, and scale what converts.",
];

const plans = [
  {
    name: "Starter",
    price: "$29",
    text: "For founders validating a new business offer.",
    items: ["Landing page sections", "Lead capture", "Basic reporting"],
  },
  {
    name: "Growth",
    price: "$79",
    text: "For teams running campaigns every month.",
    items: ["Everything in Starter", "Pricing and testimonials", "CRM-ready lead fields"],
    featured: true,
  },
  {
    name: "Scale",
    price: "$149",
    text: "For teams building a repeatable lead engine.",
    items: ["Everything in Growth", "Multi-page content blocks", "Priority support"],
  },
];

const faqs = [
  {
    question: "Can this be a real business landing page?",
    answer:
      "Yes. It has the sections buyers expect: offer, proof, features, workflow, pricing, and clear calls to action.",
  },
  {
    question: "Does dark and light mode work?",
    answer:
      "Yes. The switch remembers the selected theme and uses your system preference the first time you visit.",
  },
  {
    question: "Why Tailwind instead of raw CSS?",
    answer:
      "Tailwind keeps layout, spacing, responsive states, and shadcn-style tokens close to the markup, so the UI is easier to refine.",
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
        "rounded-lg border border-border bg-card p-6 text-card-foreground shadow-[0_18px_44px_rgba(24,32,44,0.08)] dark:shadow-[0_22px_54px_rgba(0,0,0,0.28)]",
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

function DashboardVisual() {
  const barHeights = ["h-20", "h-32", "h-24", "h-40", "h-48"];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden hero-mesh" aria-hidden="true">
      <div className="hero-sweep animate-sweep absolute -left-[35%] top-0 h-full w-[32%]" />
      <div className="animate-drift absolute right-[8%] top-[12%] h-[360px] w-[560px] rounded-full border border-foreground/15" />
      <div className="animate-drift-reverse absolute right-[15%] top-[28%] h-[260px] w-[420px] rounded-full border border-foreground/15" />

      <div className="animate-float-panel absolute bottom-10 left-4 right-4 rounded-lg border border-border bg-card/95 p-3 shadow-[0_22px_60px_rgba(24,32,44,0.16)] dark:shadow-[0_22px_60px_rgba(0,0,0,0.36)] sm:left-auto sm:right-8 sm:w-[560px] lg:right-24 lg:top-[20%] lg:bottom-auto lg:w-[44vw] lg:max-w-[560px]">
        <div className="mb-3 flex gap-2 border-b border-border pb-3">
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-2 rounded-full bg-border" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 rounded-lg border border-border bg-muted p-4 sm:col-span-1 sm:row-span-2">
            <p className="mb-4 text-sm text-muted-foreground">Revenue pipeline</p>
            <div className="flex h-32 items-end gap-2 sm:h-52">
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
            <strong className="block text-2xl">2.4m</strong>
            <small className="text-muted-foreground">avg. session</small>
          </div>
          <div className="rounded-lg border border-border bg-muted p-4">
            <Users className="mb-4 text-primary" size={20} />
            <strong className="block text-2xl">328</strong>
            <small className="text-muted-foreground">qualified leads</small>
          </div>
        </div>
      </div>
    </div>
  );
}

const navLinks = [
  { id: "features", label: "Features" },
  { id: "workflow", label: "Workflow" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
];

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        .map(({ id }) => ({
          id,
          element: document.getElementById(id),
        }))
        .filter((s): s is { id: string; element: HTMLElement } => s.element !== null);

      if (sections.length === 0) return;

      const scrollY = window.scrollY + 100;
      let currentSection = sections[0].id;

      for (const { id, element } of sections) {
        if (element.offsetTop <= scrollY) {
          currentSection = id;
        } else {
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-20 flex items-center gap-4 border-b border-border bg-background/90 px-4 py-3 backdrop-blur md:px-10 lg:px-[72px]">
        <a
          className="inline-flex w-fit items-center gap-2.5 no-underline"
          href="#"
          aria-label="LaunchLedger home"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <span className="grid h-9 w-9 place-items-center rounded-md bg-foreground text-xs font-black text-background">
            LL
          </span>
          <strong>LaunchLedger</strong>
        </a>

        <nav className="hidden flex-1 justify-center gap-6 text-sm font-bold text-muted-foreground md:flex">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              className={cn(
                "whitespace-nowrap transition-colors hover:text-foreground",
                activeSection === id && "text-foreground",
              )}
              href={`#${id}`}
              aria-current={activeSection === id ? "true" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button
            as="button"
            type="button"
            variant="secondary"
            className="px-3"
            onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon size={17} /> : <SunMedium size={17} />}
            <span className="hidden sm:inline">{theme === "light" ? "Dark" : "Light"}</span>
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
            </div>
          </nav>
        </>
      )}

      <main className="overflow-hidden">
        <section className="relative min-h-[780px] px-4 py-10 sm:px-8 md:min-h-[760px] md:py-16 lg:min-h-[calc(100vh-66px)] lg:px-[72px]">
          <DashboardVisual />
          <div className="hero-fade pointer-events-none absolute inset-0" />

          <div className="relative z-10 max-w-[650px]" id="top">
            <Badge>Business landing page system</Badge>
            <h1 className="mt-4 text-[4.2rem] leading-[0.95] tracking-normal sm:text-[5.8rem] lg:text-[7rem]">
              LaunchLedger
            </h1>
            <p className="max-w-[56ch] text-base leading-7 text-muted-foreground sm:text-lg">
              A sharper landing page for teams that need to explain the offer, collect qualified leads,
              and turn campaign traffic into sales conversations.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="#pricing">
                View plans <ArrowRight size={18} />
              </Button>
              <Button href="#features" variant="secondary">
                See details <ChevronRight size={18} />
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1180px] grid-cols-1 gap-3 border-b border-border px-4 py-8 text-sm font-black text-muted-foreground sm:grid-cols-5 sm:px-8 lg:px-9">
          {partners.map((partner) => (
            <span className="rounded-md border border-border bg-card px-3 py-3 text-center sm:border-0 sm:bg-transparent" key={partner}>
              {partner}
            </span>
          ))}
        </section>

        <section className="mx-auto grid max-w-[1180px] grid-cols-1 gap-px px-4 py-10 sm:grid-cols-3 sm:px-8 lg:px-9">
          {stats.map((stat) => (
            <Card className="rounded-none shadow-none first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:first:rounded-tr-none sm:last:rounded-r-lg sm:last:rounded-bl-none" key={stat.label}>
              <strong className="mb-1 block text-4xl">{stat.value}</strong>
              <span className="text-muted-foreground">{stat.label}</span>
            </Card>
          ))}
        </section>

        <section className="mx-auto max-w-[1180px] px-4 py-12 sm:px-8 lg:px-9" id="features">
          <div className="mb-7 max-w-[720px]">
            <Badge>What changed</Badge>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              More detail, cleaner hierarchy, and a calmer business feel.
            </h2>
            <p className="mt-4 text-muted-foreground">
              The page now gives visitors enough context to understand the product while keeping each section easy to scan.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, text }) => (
              <Card key={title}>
                <Icon className="mb-5 text-accent" size={22} />
                <h3 className="mb-2 text-lg font-extrabold">{title}</h3>
                <p className="leading-7 text-muted-foreground">{text}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-[1180px] gap-8 px-4 py-12 sm:px-8 md:grid-cols-[0.85fr_1.15fr] lg:px-9" id="workflow">
          <div>
            <Badge>Workflow</Badge>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              From campaign click to qualified conversation.
            </h2>
          </div>
          <ol className="grid gap-3">
            {steps.map((step) => (
              <li className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 text-muted-foreground" key={step}>
                <Check className="shrink-0 text-primary" size={18} />
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mx-auto max-w-[1180px] px-4 py-12 sm:px-8 lg:px-9" id="pricing">
          <div className="mb-7 max-w-[720px]">
            <Badge>Pricing</Badge>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Plans for testing, growing, and scaling the page.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {plans.map((plan) => (
              <Card
                className={cn(
                  "grid gap-5",
                  plan.featured && "border-primary/60 shadow-[0_22px_54px_rgba(24,32,44,0.14)] dark:shadow-[0_22px_54px_rgba(0,0,0,0.38)]",
                )}
                key={plan.name}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-extrabold">{plan.name}</h3>
                    {plan.featured ? <Badge className="normal-case tracking-normal">Popular</Badge> : null}
                  </div>
                  <strong className="my-3 block text-4xl">{plan.price}</strong>
                  <p className="leading-7 text-muted-foreground">{plan.text}</p>
                </div>
                <ul className="grid gap-2 pl-5 text-muted-foreground">
                  {plan.items.map((item) => (
                    <li className="list-disc" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="mt-auto w-fit" href="#top" variant={plan.featured ? "primary" : "secondary"}>
                  Choose plan <ArrowRight size={16} />
                </Button>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-4 py-12 sm:px-8 lg:px-9" id="faq">
          <div className="mb-7 max-w-[720px]">
            <Badge>FAQ</Badge>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Quick answers before launch.</h2>
          </div>
          <div className="grid gap-3">
            {faqs.map((faq) => (
              <Card className="grid gap-3 md:grid-cols-[0.8fr_1.2fr]" key={faq.question}>
                <h3 className="text-lg font-extrabold">{faq.question}</h3>
                <p className="leading-7 text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto flex max-w-[1180px] flex-col gap-5 border-t border-border px-4 py-12 sm:px-8 md:flex-row md:items-center lg:px-9">
          <Layers3 className="shrink-0 text-primary" size={24} />
          <h2 className="text-3xl leading-tight sm:text-4xl">Ready for a business landing page that feels complete?</h2>
          <Button className="md:ml-auto" href="#top">
            Back to top <ArrowRight size={18} />
          </Button>
        </section>
      </main>
    </>
  );
}

export default App;
