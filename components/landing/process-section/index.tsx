import { processSteps } from "../data";

export function ProcessSection() {
  return (
    <section className="section-frame px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="section-kicker">PROCESSO</p>
          <h2 className="font-display mt-3 text-4xl leading-none tracking-[-0.04em] sm:text-6xl">
            Do conceito ao preto curado.
          </h2>
        </div>
        <div className="grid gap-px bg-white/10">
          {processSteps.map((step) => (
            <div
              key={step.title}
              className="grid gap-5 bg-black px-5 py-6 transition-colors duration-300 hover:bg-[#080808] sm:grid-cols-[110px_1fr_auto] sm:items-center"
            >
              <span className="font-display text-3xl text-[#ff003c]">
                {step.index}
              </span>
              <div>
                <h3 className="font-display text-2xl tracking-[-0.04em]">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/56">
                  {step.text}
                </p>
              </div>
              <span className="hidden h-px w-24 bg-white/15 sm:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
