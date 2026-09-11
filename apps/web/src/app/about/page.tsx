import Link from 'next/link';
import Navbar from '../../components/navbar';

const principles = [
    {
        number: '01',
        title: 'Signal over noise',
        description:
            'Repository activity is useful only when it produces meaningful engineering context.',
    },
    {
        number: '02',
        title: 'Evidence over assumptions',
        description:
            'RepoPulse is built around observable repository signals rather than opinions about how teams should work.',
    },
    {
        number: '03',
        title: 'Insights over dashboards',
        description:
            'Metrics should help engineers investigate problems and make better decisions—not simply fill a screen.',
    },
];

const signals = [
    { label: 'Contributors', value: '42', detail: 'Active participants' },
    { label: 'Commits', value: '1,284', detail: 'Repository activity' },
    { label: 'Pull Requests', value: '186', detail: 'Development flow' },
    { label: 'Health', value: '91', detail: 'Repository signal' },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
            <Navbar />

            {/* Background */}
            <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                        backgroundSize: '64px 64px',
                        maskImage:
                            'linear-gradient(to bottom, black, transparent 75%)',
                    }}
                />

                <div className="absolute left-1/2 top-24 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-3xl" />
            </div>

            {/* Hero */}
            <section className="relative border-b border-white/[0.08]">
                <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
                    <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                About RepoPulse
                            </div>

                            <h1 className="mt-7 max-w-3xl text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                                Understand the engineering reality behind your
                                repositories.
                            </h1>

                            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
                                RepoPulse turns GitHub activity into engineering
                                intelligence—helping developers understand
                                repository health, contribution patterns and
                                potential risks.
                            </p>

                            <div className="mt-9 flex flex-wrap gap-3">
                                <Link
                                    href="/dashboard"
                                    className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
                                >
                                    Explore Dashboard
                                </Link>

                                <Link
                                    href="/how-it-works"
                                    className="rounded-lg border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                                >
                                    How it works
                                </Link>
                            </div>
                        </div>

                        {/* Signal visualization */}
                        <div className="relative">
                            <div className="absolute inset-0 rounded-3xl bg-white/[0.03] blur-2xl" />

                            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] shadow-2xl">
                                <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-emerald-400" />
                                        <span className="text-xs font-medium text-zinc-400">
                                            Repository intelligence
                                        </span>
                                    </div>

                                    <span className="font-mono text-[10px] text-zinc-600">
                                        LIVE SIGNALS
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 gap-px bg-white/[0.06]">
                                    {signals.map((signal) => (
                                        <div
                                            key={signal.label}
                                            className="bg-[#0d0d0d] p-6"
                                        >
                                            <p className="text-xs text-zinc-600">
                                                {signal.label}
                                            </p>

                                            <p className="mt-3 text-3xl font-semibold tracking-tight">
                                                {signal.value}
                                            </p>

                                            <p className="mt-1 text-xs text-zinc-600">
                                                {signal.detail}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-white/[0.08] p-5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-zinc-500">
                                            Engineering health
                                        </span>

                                        <span className="font-mono text-xs text-zinc-300">
                                            91 / 100
                                        </span>
                                    </div>

                                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-zinc-800">
                                        <div className="h-full w-[91%] rounded-full bg-zinc-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="relative border-b border-white/[0.08]">
                <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
                            The problem
                        </p>

                        <h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
                            GitHub shows activity.
                            <br />
                            <span className="text-zinc-500">
                                It doesn&apos;t always show context.
                            </span>
                        </h2>
                    </div>

                    <div className="space-y-6 text-sm leading-7 text-zinc-400">
                        <p>
                            Modern repositories generate an enormous amount of
                            information: commits, pull requests, issues,
                            contributors and changes.
                        </p>

                        <p>
                            But activity alone does not answer important
                            engineering questions. Is the project being
                            maintained? Is knowledge concentrated in a few
                            contributors? Is development slowing down?
                        </p>

                        <p className="text-zinc-300">
                            RepoPulse is being built to turn those signals into
                            a clearer engineering picture.
                        </p>
                    </div>
                </div>
            </section>

            {/* Product philosophy */}
            <section className="relative">
                <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                    <div className="max-w-2xl">
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
                            Product principles
                        </p>

                        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                            Built around useful engineering signals.
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-zinc-500">
                            RepoPulse should make repository analysis easier,
                            not introduce another layer of unnecessary
                            complexity.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
                        {principles.map((principle) => (
                            <div
                                key={principle.number}
                                className="bg-[#0b0b0b] p-7 transition hover:bg-[#101010]"
                            >
                                <span className="font-mono text-xs text-zinc-600">
                                    {principle.number}
                                </span>

                                <h3 className="mt-10 text-lg font-semibold">
                                    {principle.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-zinc-500">
                                    {principle.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Built in public */}
            <section className="border-t border-white/[0.08] bg-[#0c0c0c]">
                <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
                        Built in public
                    </p>

                    <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                        A product built around real engineering problems.
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500">
                        RepoPulse is evolving through implementation,
                        experimentation and open-source engineering practices.
                        The goal is not another dashboard—it is a useful
                        intelligence layer for software repositories.
                    </p>

                    <Link
                        href="/dashboard"
                        className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
                    >
                        Explore RepoPulse
                    </Link>
                </div>
            </section>
        </main>
    );
}
