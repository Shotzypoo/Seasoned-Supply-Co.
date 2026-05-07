import React from "react";

const BRAND = {
  name: "Seasoned Supply Co.",
  instagram: "@josh_sheffield0",
  instagramProfile: "https://www.instagram.com/josh_sheffield0/",
  instagramDM: "https://ig.me/m/josh_sheffield0",
  phone: "(850) 368-6324",
  cashApp: "https://cash.app/$Shotzypoo",
  venmo: "https://venmo.com/code?user_id=4491908407625506352&created=1778127414",
  zelle: "Zelle accepted by request",
  slogan: "If you ain’t sneasin, it ain’t seasoned.",
};

const DROP_001_IMAGE = "/images/21280.jpg";
const DROP_002_IMAGE = "/images/drop-002.png";

const drops = [
  {
    number: "DROP 1",
    name: "If You Ain’t Sneasin Tee",
    status: "Available Now",
    statusColor: "bg-green-500",
    price: "$65",
    description: "The original chef-skull design. Navy tee, left-chest print, and bold back graphic.",
    cta: "DM to Reserve Drop 1",
    available: true,
    actionHref: "#contact",
    image: "/images/21280.jpg",
    imageAlt: "Drop 001 If You Ain’t Sneasin tee mockup",
  },
  {
    number: "DROP 2",
    name: "American Seasoned Tee",
    status: "Releasing Next Friday",
    statusColor: "bg-orange-400",
    price: "$65",
    description: "The bigger red, white, and seasoned flag-style design. DM before release day to lock in your order.",
    cta: "Join Drop 2 Waitlist",
    available: false,
    actionHref: "#contact",
    image: "/images/drop-002.png",
    imageAlt: "Drop 002 American Seasoned tee mockup",
  },
];

const sizes = ["S", "M", "L", "XL", "2XL"];

function Icon({ children, label }) {
  return (
    <span aria-label={label} role="img" className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-xl text-[#07111f] shadow-lg">
      {children}
    </span>
  );
}

function ProductImage({ src, alt, fit = "contain" }) {
  return (
    <figure className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1728] p-3 shadow-2xl">
      <div className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[1.45rem] bg-[#f3f4f6]">
        <img
          src={src}
          alt={alt}
          className={`relative z-10 h-full w-full ${fit === "cover" ? "object-cover" : "object-contain"}`}
          decoding="async"
          loading="eager"
        />
      </div>
    </figure>
  );
}

function DropCard({ drop }) {
  return (
    <article className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl lg:grid-cols-[0.9fr_1.35fr]">
      <div className="flex flex-col justify-between gap-6">
        <div>
          <span className="inline-flex rounded-md bg-red-700 px-3 py-1 text-xs font-black tracking-widest text-white">
            {drop.number}
          </span>
          <h3 className="mt-4 text-3xl font-black uppercase leading-none tracking-tight text-white">
            {drop.name}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/65">{drop.description}</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-white/80">
            <span className={`h-2.5 w-2.5 rounded-full ${drop.statusColor}`} />
            {drop.status}
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-white/35">Price</p>
            <p className="text-4xl font-black text-white">{drop.price}</p>
          </div>
          <a
            href={drop.actionHref}
            className={`inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-black uppercase tracking-widest transition ${
              drop.available
                ? "bg-red-700 text-white hover:bg-red-800"
                : "border border-white/25 bg-white/5 text-white hover:bg-white/10"
            }`}
          >
            {drop.cta}
          </a>
        </div>
      </div>

      <ProductImage src={drop.image} alt={drop.imageAlt} />
    </article>
  );
}

function runBasicTests() {
  const hasDrop1 = drops.some((drop) => drop.number === "DROP 1" && drop.available === true);
  const hasDrop2 = drops.some((drop) => drop.number === "DROP 2" && drop.available === false);
  const hasInstagram = BRAND.instagram === "@josh_sheffield0";
  const allDropsHaveImages = drops.every((drop) => typeof drop.image === "string" && drop.image.startsWith("/images/"));
  const allDropsHavePrices = drops.every((drop) => drop.price === "$65");

  return {
    hasRequiredDropNames: drops.length === 2,
    hasAvailableDrop1: hasDrop1,
    hasComingSoonDrop2: hasDrop2,
    hasCorrectInstagram: hasInstagram,
    allDropsHaveImages,
    allDropsHavePrices,
  };
}

export default function SeasonedSupplyCoLandingPage() {
  const testResults = runBasicTests();

  return (
    <main className="min-h-screen overflow-hidden bg-[#06101d] text-white">
      <section className="relative px-6 py-6 md:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_75%_12%,rgba(185,28,28,0.34),transparent_34%),linear-gradient(135deg,#06101d_0%,#0a1e36_52%,#050914_100%)]" />
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-800 via-white to-red-800" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <header className="mb-12 flex items-center justify-between gap-5 rounded-3xl border border-white/10 bg-black/25 px-5 py-4 backdrop-blur-xl">
            <a href="#home" className="flex items-center gap-3">
              <Icon label="chef">👨‍🍳</Icon>
              <div>
                <p className="text-2xl font-black uppercase tracking-tight">{BRAND.name}</p>
                <p className="text-xs font-bold uppercase tracking-[0.34em] text-red-500">Kitchen Built · Street Ready</p>
              </div>
            </a>

            <nav className="hidden items-center gap-8 text-sm font-black uppercase tracking-widest text-white/70 lg:flex">
              <a href="#drops" className="hover:text-white">Drops</a>
              <a href="#order" className="hover:text-white">Order</a>
              <a href="#story" className="hover:text-white">Story</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>

            <a
              href={BRAND.instagramProfile}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-2xl bg-red-700 px-6 py-3 text-sm font-black uppercase tracking-widest text-white transition hover:bg-red-800 md:inline-flex"
            >
              Shop / DM
            </a>
          </header>

          <section id="home" className="grid min-h-[68vh] items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold text-white/75 shadow-xl backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                Drop 1 live · Drop 2 coming soon
              </div>

              <div>
                <h1 className="max-w-4xl text-6xl font-black uppercase leading-[0.88] tracking-[-0.06em] md:text-8xl lg:text-9xl">
                  Kitchen Built.<br />
                  <span className="text-red-600">Street Ready.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-2xl font-black leading-tight text-white md:text-4xl">
                  {BRAND.slogan}
                </p>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">
                  Premium culinary streetwear for cooks, crews, and grinders who put in work and wear the proof.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="#drops" className="inline-flex items-center justify-center rounded-2xl bg-red-700 px-8 py-4 text-base font-black uppercase tracking-widest text-white transition hover:bg-red-800">
                  View Drops →
                </a>
                <a href={BRAND.instagramDM} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-base font-black uppercase tracking-widest text-white transition hover:bg-white/10">
                  DM {BRAND.instagram}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 rounded-[3rem] bg-red-700/25 blur-3xl" />
              <div className="relative rounded-[2.5rem] border border-white/10 bg-black/25 p-6 shadow-2xl backdrop-blur-xl">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-red-400">Featured</p>
                    <p className="text-2xl font-black">Seasoned Chef Skull Tee</p>
                  </div>
                  <p className="rounded-xl bg-white px-4 py-2 text-xl font-black text-[#07111f]">$65</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <ProductImage src={DROP_001_IMAGE} alt="Drop 001 shirt mockup" />
                  <ProductImage src={DROP_002_IMAGE} alt="Drop 002 shirt mockup" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section id="drops" className="bg-[#07111f] px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-red-400">Featured Drops</p>
              <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.05em] md:text-7xl">Drop 1 & Drop 2</h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-white/60">
              Drop 1 is the first official run. Drop 2 releases next Friday at $65. DM before release day to lock in your order and get $10 off.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {drops.map((drop) => (
              <DropCard key={drop.number} drop={drop} />
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="bg-white px-6 py-20 text-[#07111f] md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-red-700">How to Order</p>
            <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.05em] md:text-7xl">Simple. Direct. Locked in.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              { title: "Choose size", text: `Available sizes: ${sizes.join(", ")}.` },
              { title: "DM Instagram", text: `Message ${BRAND.instagram} to reserve.` },
              { title: "Confirm payment", text: "Cash App, Venmo, and Zelle accepted. Collect payment before holding inventory." },
              { title: "Pickup or shipping", text: "Local handoff or ship when ready." },
            ].map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-[#07111f]/10 bg-[#f7f3ec] p-6 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-700 text-xl font-black text-white">{index + 1}</div>
                <h3 className="text-2xl font-black uppercase tracking-tight">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-[#07111f]/60">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="bg-[#050914] px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl md:p-12">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-red-400">The Story</p>
            <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.05em] md:text-7xl">Independent. Culinary. Real.</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/65">
              Seasoned Supply Co. is an independent culinary apparel brand built around work ethic, humor, and the people who bring heat to the kitchen every day.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-white/65">
              This is not about pretending to be official gear. It is about building a brand from the ground up and making drops that people actually want to wear.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Drop 1 proves demand",
              "Drop 2 builds anticipation",
              "Instagram drives the first orders",
              "Future releases can expand into hoodies, hats, aprons, and patches",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-lg text-[#07111f]">★</span>
                <p className="text-lg font-black text-white/85">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#07111f] px-6 py-12 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:grid-cols-[0.75fr_1.25fr] md:items-center md:p-8">
          <div className="flex items-center gap-4">
            <Icon label="instagram">📸</Icon>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-red-400">Follow / DM</p>
              <a href={BRAND.instagramProfile} target="_blank" rel="noreferrer" className="text-3xl font-black text-white underline decoration-white/20 underline-offset-4 transition hover:text-red-300">
                {BRAND.instagram}
              </a>
              <div className="mt-3 flex flex-wrap gap-2">
                <a href={BRAND.instagramProfile} target="_blank" rel="noreferrer" className="rounded-xl bg-red-700 px-4 py-2 text-xs font-black uppercase tracking-widest text-white transition hover:bg-red-800">
                  Open Instagram
                </a>
                <a href={`sms:${BRAND.phone.replace(/[^0-9]/g, "")}?body=Hey%20I%20want%20to%20reserve%20Drop%201`} className="rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-widest text-white transition hover:bg-white/10">
                  Text to Reserve
                </a>
              </div>
            </div>
          </div>
          <div className="grid gap-3 text-sm font-bold text-white/70 sm:grid-cols-3">
            <p className="rounded-2xl bg-black/20 p-4">Updates, drops, and availability.</p>
            <p className="rounded-2xl bg-black/20 p-4">Text: {BRAND.phone}</p>
            <p className="rounded-2xl bg-black/20 p-4">Cash App, Venmo, and Zelle accepted.</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-[#07111f] md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#07111f]/10 bg-[#f7f3ec] p-6 shadow-sm md:p-8">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-red-700">Payment Options</p>
          <h2 className="text-4xl font-black uppercase tracking-[-0.04em] md:text-5xl">Reserve first. Pay clean.</h2>
          <p className="mt-3 max-w-3xl text-[#07111f]/65">
            Shirts are $65. For the first drops, payment can stay simple. Have customers DM or text their name, size, and pickup/shipping choice, then send payment through one of the options below.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <a href={BRAND.cashApp} target="_blank" rel="noreferrer" className="rounded-2xl bg-[#07111f] p-5 font-black text-white transition hover:bg-[#10294a]">Cash App →</a>
            <a href={BRAND.venmo} target="_blank" rel="noreferrer" className="rounded-2xl bg-[#07111f] p-5 font-black text-white transition hover:bg-[#10294a]">Venmo →</a>
            <div className="rounded-2xl bg-[#07111f] p-5 font-black text-white">Zelle accepted by request</div>
          </div>
        </div>
      </section>

      <footer className="bg-white px-6 py-8 text-[#07111f] md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row md:items-center">
          <p className="text-2xl font-black uppercase tracking-tight">{BRAND.name}</p>
          <p className="text-sm font-bold text-[#07111f]/55">
            Not affiliated with, endorsed by, or officially connected to any branch of the U.S. military.
          </p>
        </div>

        <div className="sr-only" aria-label="basic build checks">
          {Object.entries(testResults).map(([key, value]) => (
            <span key={key}>{key}: {String(value)}</span>
          ))}
        </div>
      </footer>
    </main>
  );
}
