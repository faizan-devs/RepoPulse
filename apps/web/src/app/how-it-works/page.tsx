import Link from 'next/link';
import Navbar from '../../components/navbar';

const steps = [
    {
        number: '01',
        title: 'Connect your repository',
        description:
            'Connect a GitHub repository to RepoPulse. RepoPulse uses repository activity and metadata to understand how your project is evolving.',
    },
    {
        number: '02',
        title: 'Analyze repository signals',
        description:
            'RepoPulse analyzes contributors, commits, issues, pull requests and other repository signals to build a picture of project health.',
    },
    {
        number: '03',
        title: 'Understand engineering health',
        description:
            'Instead of looking through raw GitHub activity, you get a centralized view of important engineering signals and potential risks.',
    },
    {
        number: '04',
        title: 'Take action',
        description:
            'Use the insights to identify areas that need attention, improve knowledge distribution and make better engineering decisions.',
    },
];

export default function HowItWorksPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">
            {/* Navbar */}
            <Navbar />

            {/* Hero */}
            <section className="mx-auto max-w-4xl px-6 pb-24 pt-24 text-center lg:px-8 lg:pt-32">
                <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
                    How it works
                </p>

                <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
                    From GitHub activity to{' '}
                    <span className="text-zinc-500">engineering insight.</span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                    RepoPulse takes the signals already present in your
                    repositories and turns them into a clearer picture of
                    project health.
                </p>
            </section>

            {/* Steps */}
            <section className="border-y border-zinc-900 bg-[#0c0c0c]">
                <div className="mx-auto max-w-5xl px-6 py-24 lg:px-8">
                    <div className="space-y-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800">
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="grid gap-6 bg-[#0a0a0a] p-8 md:grid-cols-[100px_1fr] md:p-10"
                            >
                                <span className="font-mono text-sm text-zinc-600">
                                    {step.number}
                                </span>

                                <div>
                                    <h2 className="text-xl font-semibold">
                                        {step.title}
                                    </h2>

                                    <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Signals */}
            <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                <div className="max-w-2xl">
                    <p className="text-sm uppercase tracking-widest text-zinc-600">
                        What RepoPulse looks at
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                        Focus on signals, not noise.
                    </h2>
                </div>

                <div className="mt-12 grid gap-4 md:grid-cols-3">
                    {[
                        {
                            title: 'Contributors',
                            description:
                                'Understand who contributes to the repository and how contribution is distributed.',
                        },
                        {
                            title: 'Repository activity',
                            description:
                                'Track development activity and identify changes in the pace of a project.',
                        },
                        {
                            title: 'Bus factor',
                            description:
                                'Identify whether important repository knowledge is concentrated among a small number of contributors.',
                        },
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="rounded-xl border border-zinc-800 p-6"
                        >
                            <h3 className="font-semibold">{item.title}</h3>

                            <p className="mt-3 text-sm leading-6 text-zinc-500">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-zinc-900">
                <div className="mx-auto max-w-4xl px-6 py-24 text-center">
                    <h2 className="text-3xl font-semibold">
                        Ready to inspect your repository?
                    </h2>

                    <p className="mt-4 text-zinc-500">
                        Connect a repository and start exploring its engineering
                        signals.
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
