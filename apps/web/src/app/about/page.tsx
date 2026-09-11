import Link from 'next/link';
import Navbar from '../../components/navbar';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">
            {/* Navbar */}
            <Navbar />

            {/* Hero */}
            <section className="mx-auto max-w-4xl px-6 pb-24 pt-24 text-center lg:px-8 lg:pt-32">
                <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
                    About RepoPulse
                </p>

                <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
                    Building better visibility into{' '}
                    <span className="text-zinc-500">software projects.</span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                    RepoPulse is a repository intelligence platform designed to
                    help developers and engineering teams understand what is
                    happening inside their codebases.
                </p>
            </section>

            {/* Story */}
            <section className="border-y border-zinc-900 bg-[#0c0c0c]">
                <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8">
                    <div>
                        <p className="text-sm uppercase tracking-widest text-zinc-600">
                            The idea
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold">
                            GitHub tells you what happened.
                            <br />
                            RepoPulse helps you understand it.
                        </h2>
                    </div>

                    <div className="space-y-5 text-sm leading-7 text-zinc-500">
                        <p>
                            Modern software projects generate a huge amount of
                            activity: commits, pull requests, issues,
                            contributors and code changes.
                        </p>

                        <p>
                            The problem is that raw activity does not always
                            tell you whether a repository is healthy, maintained
                            or exposed to engineering risks.
                        </p>

                        <p>
                            RepoPulse is being built around that problem —
                            turning repository activity into signals that are
                            easier to understand and act on.
                        </p>
                    </div>
                </div>
            </section>

            {/* Principles */}
            <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                <div className="max-w-2xl">
                    <p className="text-sm uppercase tracking-widest text-zinc-600">
                        Principles
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                        Simple principles behind the product.
                    </h2>
                </div>

                <div className="mt-12 grid gap-4 md:grid-cols-3">
                    <div className="rounded-xl border border-zinc-800 p-7">
                        <span className="font-mono text-sm text-zinc-600">
                            01
                        </span>

                        <h3 className="mt-6 font-semibold">
                            Signal over noise
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-zinc-500">
                            Surface information that can actually help
                            developers make decisions.
                        </p>
                    </div>

                    <div className="rounded-xl border border-zinc-800 p-7">
                        <span className="font-mono text-sm text-zinc-600">
                            02
                        </span>

                        <h3 className="mt-6 font-semibold">Developer first</h3>

                        <p className="mt-3 text-sm leading-6 text-zinc-500">
                            The interface should make engineering information
                            easier to understand, not add another layer of
                            complexity.
                        </p>
                    </div>

                    <div className="rounded-xl border border-zinc-800 p-7">
                        <span className="font-mono text-sm text-zinc-600">
                            03
                        </span>

                        <h3 className="mt-6 font-semibold">
                            Actionable insights
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-zinc-500">
                            Metrics are useful when they help identify something
                            worth investigating or improving.
                        </p>
                    </div>
                </div>
            </section>

            {/* Open Source */}
            <section className="border-t border-zinc-900 bg-[#0c0c0c]">
                <div className="mx-auto max-w-4xl px-6 py-24 text-center">
                    <p className="text-sm uppercase tracking-widest text-zinc-600">
                        Built in public
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold">
                        RepoPulse is an evolving project.
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500">
                        The goal is to build a practical repository intelligence
                        platform while learning from real engineering problems,
                        open-source workflows and developer feedback.
                    </p>

                    <Link
                        href="/dashboard"
                        className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
                    >
                        Explore Dashboard
                    </Link>
                </div>
            </section>
        </main>
    );
}
