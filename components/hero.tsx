import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-5.5rem)] py-10 sm:py-14">
      <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1.2fr)_420px] lg:gap-10">
        <div className="max-w-4xl pt-8 sm:pt-12">
          <p className="mb-6 text-sm text-foreground/50">
            Product and UX designer helping teams turn complexity into clarity
          </p>
          <h1 className="max-w-5xl text-[3.5rem] font-semibold leading-[0.96] tracking-[-0.06em] text-foreground sm:text-[4.8rem] md:text-[6rem] lg:text-[6.6rem]">
            Designing products
            <br />
            that look clear
            <br />
            and feel{" "}
            <span className="font-display text-primary">
              reliable
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground/68 sm:text-xl">
            I&apos;m Bhrugu Pandya, a research-driven UX designer based in Ahmedabad with a background
            in software development. I design digital experiences that are useful, grounded in user
            insight, and practical for teams to build.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              asChild
              className="h-14 rounded-full bg-foreground px-8 text-base font-medium text-background transition-transform hover:-translate-y-0.5 hover:bg-foreground/92"
            >
              <Link href="#work">
                View selected work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-14 rounded-full border-border bg-white/70 px-8 text-base text-foreground transition-colors hover:bg-white"
            >
              <a href="/resume.pdf" download>
                Download resume
              </a>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 self-end sm:grid-cols-2 lg:grid-cols-2">
          <div className="min-h-[170px] rounded-[28px] bg-[linear-gradient(180deg,#e6c2ff_0%,#d6aef7_100%)] p-5 shadow-[0_18px_40px_rgba(155,105,197,0.18)] transition-transform duration-300 hover:-translate-y-1">
            <div className="flex h-full flex-col justify-between">
              <span className="inline-flex w-fit rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-foreground/70">
                UX / Product Design
              </span>
              <div>
                <p className="text-4xl font-semibold tracking-[-0.06em] text-foreground">4+</p>
                <p className="mt-2 max-w-[10rem] text-sm leading-6 text-foreground/70">
                  years across development and user-centered product work
                </p>
              </div>
            </div>
          </div>

          <div className="min-h-[170px] rounded-[28px] bg-[#1d1d24] p-5 text-white transition-transform duration-300 hover:-translate-y-1">
            <div className="flex h-full flex-col justify-between">
              <span className="text-xs text-white/55">Currently</span>
              <div className="space-y-2">
                <p className="text-xl font-medium">UX Designer at Savitriya Technologies</p>
                <p className="text-sm leading-6 text-white/65">
                  Shaping user-facing workflows, interface clarity, and product usability.
                </p>
              </div>
            </div>
          </div>

          <div className="min-h-[220px] rounded-[28px] bg-[#d8ebff] p-5 transition-transform duration-300 hover:-translate-y-1 sm:col-span-2">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-1 text-xs font-medium text-foreground/75">
                  <MapPin className="h-3.5 w-3.5" />
                  Ahmedabad, India
                </span>
                <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-foreground/70">
                  Open to UX roles
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-[1fr_1.4fr]">
                <div className="rounded-[22px] bg-white/70 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-foreground/40">Core focus</p>
                  <p className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-foreground">
                    Research-led interfaces
                  </p>
                </div>
                <div className="rounded-[22px] bg-[#b9d58a] p-4">
                  <p className="text-sm leading-6 text-foreground/75">
                    From research synthesis and wireframes to polished UI, I focus on products that
                    are clear for users and feasible for teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
