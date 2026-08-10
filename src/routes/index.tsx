import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/lumina-logo.png";
import illusWeb from "@/assets/illus-web.jpg";
import illusAutomation from "@/assets/illus-automation.jpg";
import illusSeo from "@/assets/illus-seo.jpg";
import illusBranding from "@/assets/illus-branding.jpg";
import illusUxui from "@/assets/illus-uxui.jpg";
import illusIntegrations from "@/assets/illus-integrations.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

type Service = {
  num: string;
  tag: string;
  title: string;
  copy: string;
  bullets: string[];
  image: string;
  accent: "blue" | "purple";
};

const services: Service[] = [
  {
    num: "01",
    tag: "Desarrollo & Web",
    title: "Webs que no solo cargan, convierten.",
    copy: "Diseñamos y desarrollamos sitios modernos, rápidos y enfocados en transformar visitantes en clientes reales.",
    bullets: ["Landing pages de alta conversión", "Sitios corporativos & e-commerce", "Performance y Core Web Vitals"],
    image: illusWeb,
    accent: "blue",
  },
  {
    num: "02",
    tag: "Automatización",
    title: "Dejá que tus sistemas trabajen por vos.",
    copy: "Eliminamos tareas repetitivas conectando tus herramientas para que tu negocio opere 24/7 sin fricciones.",
    bullets: ["Flujos personalizados (Make, n8n, Zapier)", "Integración CRM & ERP", "Agentes de IA a medida"],
    image: illusAutomation,
    accent: "purple",
  },
  {
    num: "03",
    tag: "SEO Integrado",
    title: "Que te encuentren cuando importa.",
    copy: "Posicionamos tu negocio en Google con una estrategia técnica y de contenido pensada para durar.",
    bullets: ["SEO técnico y on-page", "Investigación de palabras clave", "Contenido optimizado"],
    image: illusSeo,
    accent: "blue",
  },
  {
    num: "04",
    tag: "Branding & Identidad",
    title: "Marcas que transmiten confianza.",
    copy: "Creamos sistemas visuales coherentes que te diferencian y elevan la percepción de tu producto.",
    bullets: ["Identidad visual completa", "Sistema de diseño", "Guidelines de marca"],
    image: illusBranding,
    accent: "purple",
  },
  {
    num: "05",
    tag: "UX / UI",
    title: "Experiencias intuitivas que convierten.",
    copy: "Diseñamos interfaces claras que conectan con tus usuarios y aumentan métricas donde importa.",
    bullets: ["Investigación y wireframes", "Prototipado interactivo", "Diseño de interfaces high-fidelity"],
    image: illusUxui,
    accent: "blue",
  },
  {
    num: "06",
    tag: "Integración de Sistemas",
    title: "Todo conectado. Sincronía perfecta.",
    copy: "Conectamos tus herramientas favoritas para que la información fluya sin cuellos de botella.",
    bullets: ["APIs y webhooks", "Sincronización de datos", "Dashboards unificados"],
    image: illusIntegrations,
    accent: "purple",
  },
];

const process = [
  { step: "01", label: "Descubrimiento", copy: "Auditamos tu negocio y mapeamos los cuellos de botella reales." },
  { step: "02", label: "Estrategia", copy: "Definimos el ecosistema digital ideal y priorizamos por impacto." },
  { step: "03", label: "Ejecución", copy: "Diseñamos, desarrollamos y automatizamos en sprints rápidos." },
  { step: "04", label: "Optimización", copy: "Medimos, iteramos y escalamos lo que funciona." },
];

function StarSpark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lumina-spark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4B6BFF" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>
      <path
        d="M50 0 C52 38, 62 48, 100 50 C62 52, 52 62, 50 100 C48 62, 38 52, 0 50 C38 48, 48 38, 50 0 Z"
        fill="url(#lumina-spark)"
      />
    </svg>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b transition-colors ${
        scrolled ? "border-border bg-background/80 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <StarSpark className="h-7 w-7 drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]" />
          <span className="text-lg font-bold uppercase tracking-[0.28em]">Lumina</span>
        </a>
        <div className="hidden items-center gap-10 md:flex">
          <a href="#servicios" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Servicios
          </a>
          <a href="#proceso" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Proceso
          </a>
          <a href="#nosotros" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Nosotros
          </a>
          <a
            href="#contacto"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-bold text-background transition-all hover:bg-[color:var(--accent-blue)] hover:text-white"
          >
            Hablemos
          </a>
          <ThemeToggle />
        </div>
        <ThemeToggle className="md:hidden" />
      </div>
    </nav>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden pt-40 pb-24">
        <div
          className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 spark-glow opacity-30"
          style={{ animation: "pulse-glow 4s ease-in-out infinite" }}
        />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-[color:var(--accent-blue)] font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-blue)]" />
            Digital Studio · Argentina
          </div>
          <h1 className="mb-8 text-balance text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Sistemas que <span className="text-gradient">encienden</span> tu negocio.
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Diseño, desarrollo y automatización de alto impacto. Transformamos ideas complejas en experiencias digitales que escalan.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="w-full rounded-xl bg-gradient-to-r from-[color:var(--accent-blue)] to-[color:var(--accent-purple)] px-8 py-4 font-bold text-white transition-all hover:shadow-[0_0_40px_rgba(75,107,255,0.45)] active:scale-95 sm:w-auto"
            >
              Empezar un proyecto
            </a>
            <a
              href="#servicios"
              className="w-full rounded-xl border border-border bg-white/5 px-8 py-4 font-bold transition-all hover:bg-white/10 sm:w-auto"
            >
              Ver servicios
            </a>
          </div>

        </div>
      </section>

      {/* SERVICES — scrollytelling */}
      <section id="servicios" className="border-t border-border py-24">
        <div className="mx-auto mb-20 max-w-5xl px-6 text-center">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--accent-blue)]">
            Servicios
          </div>
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Todo lo que tu negocio necesita <span className="text-gradient">para crecer</span>.
          </h2>
        </div>

        <div className="space-y-32">
          {services.map((s, i) => {
            const reverse = i % 2 === 1;
            const accentVar = s.accent === "blue" ? "var(--accent-blue)" : "var(--accent-purple)";
            return (
              <div key={s.num} className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
                <div className={reverse ? "md:order-2" : ""}>
                  <div className="group relative overflow-hidden rounded-3xl border border-border bg-white/[0.03]">
                    <div
                      className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-700 group-hover:opacity-70"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${accentVar}22 0%, transparent 65%)`,
                      }}
                    />
                    <img
                      src={s.image}
                      alt={s.title}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="relative aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <div className={`space-y-6 ${reverse ? "md:order-1" : ""}`}>
                  <div className="flex items-center gap-3 font-mono text-sm" style={{ color: accentVar }}>
                    <span>{s.num}</span>
                    <span className="h-px w-8" style={{ background: accentVar }} />
                    <span>{s.tag}</span>
                  </div>
                  <h3 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">{s.title}</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">{s.copy}</p>
                  <ul className="space-y-3 pt-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-sm text-foreground/85">
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: accentVar, boxShadow: `0 0 10px ${accentVar}` }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section id="proceso" className="border-y border-border bg-white/[0.02] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-2xl">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--accent-purple)]">
              Nuestro proceso
            </div>
            <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Rápido, riguroso y sin humo.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="rounded-2xl border border-border bg-background/60 p-8 transition-colors hover:border-[color:var(--accent-blue)]/40">
                <div className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-[color:var(--accent-blue)]">
                  {p.step}
                </div>
                <h4 className="mb-3 text-lg font-semibold">{p.label}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOSOTROS / STATS */}
      <section id="nosotros" className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
          <div className="space-y-6">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--accent-blue)]">
              Nosotros
            </div>
            <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Un solo equipo para <span className="text-gradient">todas las áreas</span> de tu crecimiento digital.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Somos un estudio pequeño, obsesionado con el detalle y con hacer que la tecnología se sienta simple. Unimos diseño, ingeniería y automatización bajo un mismo techo para que no tengas que coordinar cinco proveedores.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Diseño", "Desarrollo", "Automatización", "SEO", "Branding", "Integraciones"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-white/5 px-4 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "+120", v: "Proyectos lanzados" },
              { k: "10x", v: "ROI promedio" },
              { k: "24/7", v: "Sistemas activos" },
              { k: "00", v: "Proyectos aburridos" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border bg-white/[0.03] p-8">
                <div className="mb-2 font-mono text-4xl font-bold text-gradient">{s.k}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <footer id="contacto" className="relative overflow-hidden border-t border-border pt-32 pb-12">
        <div className="pointer-events-none absolute -bottom-32 left-1/2 h-96 w-[80%] -translate-x-1/2 rounded-full bg-[color:var(--accent-blue)]/15 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <StarSpark className="mx-auto mb-10 h-14 w-14 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]" />
          <h2 className="mb-8 text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            ¿Listo para <span className="text-gradient">transformar</span> tu negocio?
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-lg text-muted-foreground">
            Contanos qué necesitás. Te respondemos con un plan claro en menos de 24 hs.
          </p>
          <div className="mb-24 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <a
              href="mailto:luminadesign.atencion@gmail.com"
              aria-label="Gmail"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[color:var(--accent-blue)] to-[color:var(--accent-purple)] p-3.5 text-white shadow-[0_0_30px_rgba(75,107,255,0.45)] transition-all hover:scale-110 hover:shadow-[0_0_45px_rgba(168,85,247,0.55)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-purple)] focus:ring-offset-2 focus:ring-offset-background"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <path d="M22 6.5V17c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6.5l10 6.5 10-6.5zM2 4.5C2 3.7 2.7 3 3.5 3h17c.8 0 1.5.7 1.5 1.5L12 11.5 2 4.5z" />
              </svg>
            </a>
            <a
              href="https://wa.me/5491148887839"
              aria-label="WhatsApp"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[color:var(--accent-blue)] to-[color:var(--accent-purple)] p-3.5 text-white shadow-[0_0_30px_rgba(75,107,255,0.45)] transition-all hover:scale-110 hover:shadow-[0_0_45px_rgba(168,85,247,0.55)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-purple)] focus:ring-offset-2 focus:ring-offset-background"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.834h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
          </div>
          <div className="flex flex-col items-center justify-between gap-6 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
            <div className="flex items-center gap-3">
              <StarSpark className="h-5 w-5" />
              <span className="font-bold uppercase tracking-[0.25em] text-foreground">Lumina Design</span>
              <span className="hidden md:inline">· © 2026 Buenos Aires, AR</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="transition-colors hover:text-foreground">Instagram</a>
              <a href="#" className="transition-colors hover:text-foreground">LinkedIn</a>
              <a href="#" className="transition-colors hover:text-foreground">Behance</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
