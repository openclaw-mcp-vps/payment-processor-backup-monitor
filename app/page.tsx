export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Payment Infrastructure
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Monitor Payment Processors &amp; Auto-Switch on Failure
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Real-time health checks for Stripe, PayPal, and Square. When a processor goes down, automatically route transactions to your backup — zero revenue lost.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $39/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-white">99.9%</div>
            <div className="text-sm text-[#8b949e] mt-1">Uptime Guaranteed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">&lt;30s</div>
            <div className="text-sm text-[#8b949e] mt-1">Failover Time</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">3+</div>
            <div className="text-sm text-[#8b949e] mt-1">Processors Supported</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="border border-[#30363d] rounded-2xl p-8 bg-[#161b22] text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$39</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Monitor Stripe, PayPal &amp; Square</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Automatic failover routing</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Instant email &amp; SMS alerts</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Webhook &amp; API health checks</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Custom priority rules</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Real-time dashboard</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does automatic failover work?</h3>
            <p className="text-sm text-[#8b949e]">We continuously ping your payment processors every 30 seconds. If a processor fails two consecutive checks, we instantly update your routing rules to direct new transactions to your next-priority backup processor and alert your team.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Which payment processors are supported?</h3>
            <p className="text-sm text-[#8b949e]">We currently support Stripe, PayPal, and Square out of the box. You can configure priority order and failover rules for each processor from the dashboard. Additional processors are on our roadmap.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Do I need to change my existing checkout code?</h3>
            <p className="text-sm text-[#8b949e]">Minimal changes required. You point your checkout to our routing endpoint, and we handle the rest. Setup takes under 15 minutes with our step-by-step integration guide.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} Payment Processor Backup Monitor. All rights reserved.
      </footer>
    </main>
  );
}
