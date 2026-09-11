import Link from 'next/link';
import Navbar from '../components/navbar';

export default function Home() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">
            {/* Navbar */}
            <Navbar />

            {/* Hero */}
            <section className="mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-24 text-center lg:px-8 lg:pb-32 lg:pt-32">
                <div className="mb-6 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-400">
                    GitHub repository intelligence
                </div>

                <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                    Understand the health of your{' '}
                    <span className="text-zinc-500">codebase.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                    RepoPulse analyzes your GitHub repositories and turns
                    repository activity into actionable engineering insights.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                    <Link
                        href="/dashboard"
                        className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
                    >
                        Analyze a repository
                    </Link>

                    <a
                        href="#features"
                        className="rounded-lg border border-zinc-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-900"
                    >
                        Explore features
                    </a>
                </div>
            </section>

            {/* Product preview */}
            <section className="mx-auto max-w-6xl px-6 pb-32 lg:px-8">
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl">
                    {/* Fake browser header */}
                    <div className="flex items-center gap-2 border-b border-zinc-800 px-5 py-4">
                        <div className="h-3 w-3 rounded-full bg-zinc-700" />
                        <div className="h-3 w-3 rounded-full bg-zinc-700" />
                        <div className="h-3 w-3 rounded-full bg-zinc-700" />

                        <div className="ml-4 rounded-md border border-zinc-800 px-4 py-1 text-xs text-zinc-500">
                            app.repopulse.dev/dashboard
                        </div>
                    </div>

                    {/* Preview */}
                    <div className="grid min-h-[420px] grid-cols-1 md:grid-cols-[220px_1fr]">
                        <aside className="hidden border-r border-zinc-800 p-5 md:block">
                            <p className="mb-6 text-xs uppercase tracking-wider text-zinc-600">
                                Workspace
                            </p>

                            <div className="rounded-lg bg-zinc-900 px-3 py-2 text-sm">
                                Overview
                            </div>

                            <div className="mt-2 px-3 py-2 text-sm text-zinc-500">
                                Repositories
                            </div>

                            <div className="px-3 py-2 text-sm text-zinc-500">
                                Analytics
                            </div>
                        </aside>

                        <div className="p-6 lg:p-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-zinc-500">
                                        Repository
                                    </p>
                                    <h3 className="mt-1 text-xl font-semibold">
                                        open-source/project
                                    </h3>
                                </div>

                                <span className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400">
                                    Healthy
                                </span>
                            </div>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                {[
                                    ['Health Score', '87'],
                                    ['Contributors', '42'],
                                    ['Commits', '1,284'],
                                    ['Open Issues', '18'],
                                ].map(([label, value]) => (
                                    <div
                                        key={label}
                                        className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5"
                                    >
                                        <p className="text-xs text-zinc-500">
                                            {label}
                                        </p>
                                        <p className="mt-3 text-2xl font-semibold">
                                            {value}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 h-40 rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
                                <p className="text-xs text-zinc-500">
                                    Repository activity
                                </p>

                                <div className="mt-8 flex h-16 items-end gap-2">
                                    {[
                                        35, 55, 42, 70, 48, 80, 65, 92, 72, 86,
                                        60, 95,
                                    ].map((height, index) => (
                                        <div
                                            key={index}
                                            className="flex-1 rounded-sm bg-zinc-700"
                                            style={{ height: `${height}%` }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section
                id="features"
                className="border-y border-zinc-900 bg-[#0c0c0c]"
            >
                <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-medium text-zinc-500">
                            FEATURES
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                            Signals that matter.
                        </h2>

                        <p className="mt-4 text-zinc-400">
                            Instead of drowning you in GitHub data, RepoPulse
                            focuses on signals that help you understand how a
                            repository is actually doing.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 md:grid-cols-3">
                        {[
                            {
                                title: 'Repository Health',
                                description:
                                    'Get a high-level view of repository activity, maintenance and overall health.',
                            },
                            {
                                title: 'Bus Factor',
                                description:
                                    'Understand contributor concentration and identify knowledge-sharing risks.',
                            },
                            {
                                title: 'Engineering Signals',
                                description:
                                    'Turn commits, issues and contributor activity into useful engineering insights.',
                            },
                        ].map((feature) => (
                            <div
                                key={feature.title}
                                className="bg-[#0a0a0a] p-8"
                            >
                                <h3 className="font-semibold">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-zinc-500">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="mx-auto max-w-4xl px-6 py-32 text-center">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Know your repository before problems become obvious.
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-zinc-500">
                    Connect a repository and start exploring its engineering
                    signals.
                </p>

                <Link
                    href="/dashboard"
                    className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
                >
                    Go to RepoPulse
                </Link>
            </section>

            <footer className="border-t border-zinc-900 px-6 py-8">
                <div className="mx-auto flex max-w-7xl items-center justify-between text-sm text-zinc-600">
                    <span>© 2026 RepoPulse</span>
                    <span>Built for engineering teams</span>
                </div>
            </footer>
        </main>
    );
}
