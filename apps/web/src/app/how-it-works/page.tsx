import Link from 'next/link';
import Navbar from '../../components/navbar';

const steps = [
    {
        number: '01',
        title: 'Connect',
        subtitle: 'Bring your repository into RepoPulse.',
        description:
            'Connect a GitHub repository and provide RepoPulse with the repository metadata and activity required for analysis.',
    },
    {
        number: '02',
        title: 'Collect signals',
        subtitle: 'Turn repository activity into structured data.',
        description:
            'RepoPulse looks at contributors, commits, issues, pull requests and repository activity to build a structured view of the project.',
    },
    {
        number: '03',
        title: 'Analyze',
        subtitle: 'Find patterns that raw activity hides.',
        description:
            'The collected signals are analyzed to identify patterns around project health, activity and knowledge distribution.',
    },
    {
        number: '04',
        title: 'Act',
        subtitle: 'Turn engineering signals into decisions.',
        description:
            'Use the resulting insights to identify areas worth investigating and make more informed engineering decisions.',
    },
];

const signals = [
    {
        number: '01',
        title: 'Repository Health',
        value: '91',
        description:
            'A high-level signal representing the apparent maintenance and activity of a repository.',
    },
    {
        number: '02',
        title: 'Bus Factor',
        value: '04',
        description:
            'Understand how concentrated important repository knowledge is among contributors.',
    },
    {
        number: '03',
        title: 'Engineering Activity',
        value: '+18%',
        description:
            'Understand changes in development activity through repository signals over time.',
    },
];

export default function HowItWorksPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
            <Navbar />

            {/* Background */}
            <div className="pointer-events-none fixed inset-0 -z-0">
                <div
                    className="absolute inset-0 opacity-[0.10]"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                        backgroundSize: '64px 64px',
                        maskImage:
                            'linear-gradient(to bottom, black, transparent 70%)',
                    }}
                />

                <div className="absolute left-1/2 top-32 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-3xl" />
            </div>

            {/* Hero */}
            <section className="relative border-b border-white/[0.08]">
                <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400">
                            <span className="font-mono text-zinc-600">
                                REPOPULSE
                            </span>
                            <span className="text-zinc-700">/</span>
                            How it works
                        </div>

                        <h1 className="mt-7 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                            From repository activity
                            <br />
                            <span className="text-zinc-500">
                                to engineering intelligence.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
                            RepoPulse transforms the activity already happening
                            inside your GitHub repositories into structured
                            engineering signals.
                        </p>
                    </div>

                    {/* Pipeline */}
                    <div className="mt-20 overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c]">
                        <div className="border-b border-white/[0.08] px-5 py-4">
                            <div className="flex items-center justify-between">
                                <span className="font-mono text-xs text-zinc-500">
                                    ANALYSIS PIPELINE
                                </span>

                                <span className="text-xs text-zinc-700">
                                    GitHub → RepoPulse
                                </span>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-4">
                            {[
                                ['01', 'GitHub', 'Repository data'],
                                ['02', 'Collect', 'Raw signals'],
                                ['03', 'Analyze', 'Patterns'],
                                ['04', 'Insights', 'Engineering context'],
                            ].map(([number, title, detail], index) => (
                                <div
                                    key={number}
                                    className="relative border-b border-white/[0.08] p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                                >
                                    <span className="font-mono text-xs text-zinc-700">
                                        {number}
                                    </span>

                                    <div className="mt-10">
                                        <p className="text-lg font-semibold">
                                            {title}
                                        </p>

                                        <p className="mt-1 text-xs text-zinc-600">
                                            {detail}
                                        </p>
                                    </div>

                                    {index < 3 && (
                                        <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 text-zinc-700 md:block">
                                            →
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Steps */}
            <section className="border-b border-white/[0.08]">
                <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                    <div className="max-w-2xl">
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
                            The workflow
                        </p>

                        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                            Four stages from data to action.
                        </h2>
                    </div>

                    <div className="mt-14 overflow-hidden rounded-2xl border border-white/10">
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className={`grid gap-8 bg-[#0b0b0b] p-7 md:grid-cols-[90px_1fr_1.2fr] md:p-10 ${
                                    index !== steps.length - 1
                                        ? 'border-b border-white/[0.08]'
                                        : ''
                                }`}
                            >
                                <span className="font-mono text-xs text-zinc-600">
                                    {step.number}
                                </span>

                                <div>
                                    <h3 className="text-xl font-semibold">
                                        {step.title}
                                    </h3>

                                    <p className="mt-2 text-xs text-zinc-600">
                                        {step.subtitle}
                                    </p>
                                </div>

                                <p className="text-sm leading-7 text-zinc-500">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Signals */}
            <section className="relative">
                <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                        <div className="max-w-2xl">
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
                                Engineering signals
                            </p>

                            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                                What RepoPulse actually looks at.
                            </h2>

                            <p className="mt-5 text-sm leading-7 text-zinc-500">
                                Instead of presenting raw repository activity,
                                RepoPulse organizes signals around engineering
                                questions worth investigating.
                            </p>
                        </div>

                        <span className="font-mono text-xs text-zinc-700">
                            SIGNALS / 03
                        </span>
                    </div>

                    <div className="mt-14 grid gap-4 lg:grid-cols-3">
                        {signals.map((signal) => (
                            <div
                                key={signal.number}
                                className="group rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 transition hover:border-white/20 hover:bg-[#0e0e0e]"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-xs text-zinc-700">
                                        {signal.number}
                                    </span>

                                    <span className="font-mono text-sm text-zinc-500">
                                        {signal.value}
                                    </span>
                                </div>

                                <h3 className="mt-14 text-lg font-semibold">
                                    {signal.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-zinc-500">
                                    {signal.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-white/[0.08] bg-[#0c0c0c]">
                <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
                        Start exploring
                    </p>

                    <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                        See the signals behind your repository.
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-500">
                        Open the RepoPulse dashboard and explore how repository
                        activity can be turned into engineering context.
                    </p>

                    <Link
                        href="/dashboard"
                        className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
                    >
                        Open Dashboard
                    </Link>
                </div>
            </section>
        </main>
    );
}
