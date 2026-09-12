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

const questions = [
    'Is this repository being maintained?',
    'Where is important knowledge concentrated?',
    'How is engineering activity changing?',
    'What signals deserve a closer look?',
];

export default function AboutPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
            <Navbar />

            {/* Subtle page atmosphere */}
            <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                        backgroundSize: '64px 64px',
                        maskImage:
                            'linear-gradient(to bottom, black, transparent 65%)',
                    }}
                />
                <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-3xl" />
            </div>

            {/* Hero */}
            <section className="relative border-b border-white/[0.08]">
                <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-28 lg:pt-24">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            About RepoPulse
                        </div>

                        <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                            GitHub tells you what happened.
                            <br />
                            <span className="text-zinc-500">
                                We want to help explain what it means.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                            RepoPulse is being built as an engineering
                            intelligence layer for GitHub repositories—turning
                            scattered activity into signals that are easier to
                            understand and act on.
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

                    {/* Manifesto strip */}
                    <div className="mt-20 grid overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] md:grid-cols-[1.1fr_0.9fr]">
                        <div className="border-b border-white/[0.08] p-7 md:border-b-0 md:border-r md:p-9">
                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                                The idea
                            </p>
                            <p className="mt-5 max-w-xl text-2xl font-medium leading-9 tracking-tight text-zinc-200 sm:text-3xl">
                                Less time reading repository activity. More time
                                understanding the engineering story behind it.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-px bg-white/[0.08]">
                            {[
                                ['01', 'Observe', 'Collect repository signals'],
                                [
                                    '02',
                                    'Interpret',
                                    'Put activity into context',
                                ],
                                [
                                    '03',
                                    'Surface',
                                    'Highlight meaningful patterns',
                                ],
                                ['04', 'Act', 'Help engineers investigate'],
                            ].map(([number, title, description]) => (
                                <div key={number} className="bg-[#0b0b0b] p-6">
                                    <span className="font-mono text-[10px] text-zinc-700">
                                        {number}
                                    </span>
                                    <p className="mt-6 text-sm font-semibold">
                                        {title}
                                    </p>
                                    <p className="mt-1 text-xs leading-5 text-zinc-600">
                                        {description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why it exists */}
            <section className="border-b border-white/[0.08]">
                <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-32">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
                            Why RepoPulse exists
                        </p>
                        <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                            A busy repository is not necessarily a healthy
                            repository.
                        </h2>
                    </div>

                    <div>
                        <div className="space-y-6 text-sm leading-7 text-zinc-400">
                            <p>
                                Modern repositories produce a constant stream of
                                commits, pull requests, issues, contributors and
                                other activity. GitHub makes that activity
                                visible, but the important engineering questions
                                often sit one level deeper.
                            </p>
                            <p>
                                A project can look active while depending
                                heavily on a small group of contributors. A
                                growing issue count can mean trouble—or simply
                                reflect a healthier reporting culture. Activity
                                needs context before it becomes useful.
                            </p>
                            <p className="text-zinc-300">
                                RepoPulse is being built around that gap: take
                                observable repository evidence and turn it into
                                a clearer picture of project health,
                                contribution patterns and potential risks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Questions */}
            <section className="border-b border-white/[0.08] bg-[#0a0a0a]">
                <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                        <div className="max-w-2xl">
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
                                The questions
                            </p>
                            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                                Start with engineering questions, not charts.
                            </h2>
                        </div>
                        <span className="font-mono text-xs text-zinc-700">
                            REPOPULSE / 04
                        </span>
                    </div>

                    <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
                        {questions.map((question, index) => (
                            <div
                                key={question}
                                className="flex items-start gap-5 bg-[#0b0b0b] p-7 transition hover:bg-[#0f0f0f]"
                            >
                                <span className="font-mono text-xs text-zinc-700">
                                    0{index + 1}
                                </span>
                                <p className="max-w-lg text-lg font-medium leading-7 text-zinc-300">
                                    {question}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Principles */}
            <section>
                <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                    <div className="max-w-2xl">
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
                            Product principles
                        </p>
                        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                            Built around useful engineering signals.
                        </h2>
                        <p className="mt-5 text-sm leading-7 text-zinc-500">
                            RepoPulse should make repository analysis easier to
                            reason about, not add another layer of unnecessary
                            complexity.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-4 md:grid-cols-3">
                        {principles.map((principle) => (
                            <div
                                key={principle.number}
                                className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 transition hover:border-white/20 hover:bg-[#0e0e0e]"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-xs text-zinc-700">
                                        {principle.number}
                                    </span>
                                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
                                </div>

                                <h3 className="mt-16 text-lg font-semibold">
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

            {/* Closing CTA */}
            <section className="border-t border-white/[0.08] bg-[#0c0c0c]">
                <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
                        Explore the product
                    </p>
                    <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                        See what the repository is telling you.
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500">
                        Explore the dashboard or learn how RepoPulse turns
                        repository activity into engineering signals.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <Link
                            href="/dashboard"
                            className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
                        >
                            Open Dashboard
                        </Link>
                        <Link
                            href="/docs"
                            className="rounded-lg border border-white/10 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                        >
                            Read the Docs
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
