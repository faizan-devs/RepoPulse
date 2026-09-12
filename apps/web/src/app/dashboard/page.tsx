'use client';

import { useState } from 'react';
import Link from 'next/link';

const repositories = [
    {
        name: 'repopulse',
        description: 'Repository intelligence platform',
        health: 91,
        activity: '+12%',
        contributors: 4,
        issues: 12,
        pullRequests: 7,
        status: 'Healthy',
    },
    {
        name: 'openone',
        description: 'AI productivity workspace',
        health: 84,
        activity: '+8%',
        contributors: 3,
        issues: 8,
        pullRequests: 5,
        status: 'Healthy',
    },
];

const activityData = [42, 58, 47, 72, 61, 80, 68, 86, 74, 91, 82, 96];

export default function DashboardPage() {
    const [workspaceOpen, setWorkspaceOpen] = useState(false);

    return (
        <main className="min-h-screen bg-[#09090b] text-white">
            <div className="flex min-h-screen">
                {/* =========================================================
            SIDEBAR
        ========================================================= */}
                <aside className="hidden w-64 shrink-0 border-r border-zinc-800/80 bg-[#09090b] lg:flex lg:flex-col">
                    {/* Logo */}
                    <div className="flex h-16 items-center border-b border-zinc-800/80 px-5">
                        <div className="flex items-center gap-2.5">
                            <Link
                                href="/"
                                aria-label="Go to RepoPulse home"
                                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-black transition hover:bg-zinc-200"
                            >
                                R
                            </Link>

                            <div>
                                <p className="text-sm font-semibold tracking-tight">
                                    RepoPulse
                                </p>

                                <p className="text-[10px] uppercase tracking-widest text-zinc-600">
                                    Engineering intelligence
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Workspace */}
                    <div className="relative border-b border-zinc-800/80 p-3">
                        <button
                            type="button"
                            onClick={() => setWorkspaceOpen((open) => !open)}
                            aria-expanded={workspaceOpen}
                            aria-haspopup="menu"
                            className="flex w-full items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-2.5 text-left transition hover:border-zinc-700 hover:bg-zinc-900"
                        >
                            <div>
                                <p className="text-xs text-zinc-500">
                                    Workspace
                                </p>
                                <p className="mt-0.5 text-sm font-medium">
                                    Personal Workspace
                                </p>
                            </div>

                            <span
                                className={`text-xs text-zinc-600 transition ${workspaceOpen ? 'rotate-180' : ''}`}
                            >
                                ⌄
                            </span>
                        </button>

                        {workspaceOpen && (
                            <div
                                role="menu"
                                className="absolute left-3 right-3 top-[calc(100%-0.25rem)] z-50 rounded-lg border border-zinc-800 bg-[#111113] p-1 shadow-2xl"
                            >
                                <button
                                    type="button"
                                    role="menuitem"
                                    onClick={() => setWorkspaceOpen(false)}
                                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm text-zinc-200 transition hover:bg-zinc-900"
                                >
                                    <span>Personal Workspace</span>
                                    <span className="text-xs text-zinc-600">
                                        Current
                                    </span>
                                </button>
                                <button
                                    type="button"
                                    role="menuitem"
                                    onClick={() => setWorkspaceOpen(false)}
                                    className="w-full rounded-md px-3 py-2 text-left text-sm text-zinc-500 transition hover:bg-zinc-900 hover:text-zinc-200"
                                >
                                    + Create workspace
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-7 overflow-y-auto p-4">
                        <NavSection title="Workspace">
                            <NavItem label="Overview" active icon="⌂" />
                            <NavItem label="Repositories" icon="▣" />
                            <NavItem label="Analytics" icon="◫" />
                            <NavItem label="Activity" icon="◷" />
                        </NavSection>

                        <NavSection title="Insights">
                            <NavItem label="Health" icon="◉" />
                            <NavItem label="Contributors" icon="◎" />
                            <NavItem label="Risk signals" icon="△" />
                        </NavSection>

                        <NavSection title="System">
                            <NavItem label="Integrations" icon="⊞" />
                            <NavItem label="Settings" icon="⚙" />
                        </NavSection>
                    </nav>

                    {/* User */}
                    <div className="border-t border-zinc-800/80 p-4">
                        <button className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition hover:bg-zinc-900">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-xs font-medium">
                                FA
                            </div>

                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium">
                                    User
                                </p>

                                <p className="truncate text-xs text-zinc-600">
                                    Free workspace
                                </p>
                            </div>

                            <span className="text-zinc-600">•••</span>
                        </button>
                    </div>
                </aside>

                {/* =========================================================
            MAIN
        ========================================================= */}
                <section className="min-w-0 flex-1">
                    {/* Top bar */}
                    <header className="flex h-16 items-center justify-between border-b border-zinc-800/80 px-5 lg:px-8">
                        <div className="flex min-w-0 items-center gap-4">
                            <button className="text-zinc-500 lg:hidden">
                                ☰
                            </button>

                            {/* Search */}
                            <div className="hidden w-72 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 md:flex">
                                <span className="text-xs text-zinc-600">⌕</span>

                                <input
                                    type="text"
                                    placeholder="Search repositories..."
                                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-700"
                                />

                                <kbd className="rounded border border-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-600">
                                    /
                                </kbd>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Link
                                href="/docs"
                                className="hidden text-sm text-zinc-500 transition hover:text-white sm:block"
                            >
                                Docs
                            </Link>

                            <button className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-sm text-zinc-500 transition hover:bg-zinc-900 hover:text-white">
                                ♧
                                <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-white" />
                            </button>

                            <div className="hidden h-5 w-px bg-zinc-800 sm:block" />

                            <button className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-zinc-900">
                                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-800 text-[10px] font-medium">
                                    FA
                                </div>

                                <span className="hidden text-sm text-zinc-400 sm:block">
                                    Workspace
                                </span>

                                <span className="text-xs text-zinc-600">⌄</span>
                            </button>
                        </div>
                    </header>

                    {/* Content */}
                    <div className="mx-auto max-w-[1600px] p-5 lg:p-8">
                        {/* Page heading */}
                        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                            <div>
                                <div className="flex items-center gap-2 text-xs text-zinc-600">
                                    <span>Workspace</span>
                                    <span>/</span>
                                    <span className="text-zinc-400">
                                        Overview
                                    </span>
                                </div>

                                <h1 className="mt-2 text-2xl font-semibold tracking-tight">
                                    Engineering overview
                                </h1>

                                <p className="mt-1 text-sm text-zinc-500">
                                    Monitor repository health and engineering
                                    signals.
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-xs text-zinc-600">
                                    Updated 4 min ago
                                </span>

                                <button className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-300 transition hover:bg-zinc-900">
                                    Export
                                </button>

                                <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200">
                                    + Add repository
                                </button>
                            </div>
                        </div>

                        {/* =====================================================
                KPI CARDS
            ===================================================== */}
                        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                            <KpiCard
                                label="Overall health"
                                value="87"
                                suffix="/100"
                                change="+4.2%"
                                description="vs. previous period"
                            />

                            <KpiCard
                                label="Repositories"
                                value="2"
                                change="+1"
                                description="this month"
                            />

                            <KpiCard
                                label="Contributors"
                                value="7"
                                change="+2"
                                description="active contributors"
                            />

                            <KpiCard
                                label="Open issues"
                                value="20"
                                change="-8.4%"
                                description="vs. previous period"
                            />
                        </div>

                        {/* =====================================================
                ANALYTICS
            ===================================================== */}
                        <div className="mt-6 grid gap-6 xl:grid-cols-[1.7fr_1fr]">
                            {/* Health chart */}
                            <section className="rounded-xl border border-zinc-800/80 bg-[#0c0c0f]">
                                <div className="flex items-center justify-between border-b border-zinc-800/80 px-6 py-5">
                                    <div>
                                        <h2 className="text-sm font-semibold">
                                            Repository activity
                                        </h2>

                                        <p className="mt-1 text-xs text-zinc-600">
                                            Development activity across your
                                            workspace
                                        </p>
                                    </div>

                                    <button className="rounded-md border border-zinc-800 px-2.5 py-1.5 text-xs text-zinc-500 hover:text-white">
                                        12 weeks
                                    </button>
                                </div>

                                <div className="p-6">
                                    <div className="mb-6 flex items-end justify-between">
                                        <div>
                                            <p className="text-3xl font-semibold tracking-tight">
                                                1,284
                                            </p>

                                            <p className="mt-1 text-xs text-zinc-600">
                                                total repository events
                                            </p>
                                        </div>

                                        <span className="text-xs text-zinc-400">
                                            ↑ 14.8%
                                        </span>
                                    </div>

                                    {/* Chart */}
                                    <div className="relative h-56">
                                        <div className="absolute inset-0 flex flex-col justify-between">
                                            {[100, 75, 50, 25, 0].map(
                                                (value) => (
                                                    <div
                                                        key={value}
                                                        className="border-t border-dashed border-zinc-800/70"
                                                    />
                                                ),
                                            )}
                                        </div>

                                        <div className="absolute inset-0 flex items-end gap-2 px-1">
                                            {activityData.map(
                                                (height, index) => (
                                                    <div
                                                        key={index}
                                                        className="group relative flex h-full flex-1 items-end"
                                                    >
                                                        <div
                                                            className="w-full rounded-t-sm bg-zinc-700 transition group-hover:bg-zinc-500"
                                                            style={{
                                                                height: `${height}%`,
                                                            }}
                                                        />

                                                        <span className="absolute -top-5 left-1/2 hidden -translate-x-1/2 text-[10px] text-zinc-500 group-hover:block">
                                                            {height}
                                                        </span>
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    </div>

                                    <div className="mt-4 flex justify-between text-[10px] text-zinc-700">
                                        <span>Jun 20</span>
                                        <span>Jun 27</span>
                                        <span>Jul 04</span>
                                        <span>Jul 11</span>
                                        <span>Today</span>
                                    </div>
                                </div>
                            </section>

                            {/* Signals */}
                            <section className="rounded-xl border border-zinc-800/80 bg-[#0c0c0f]">
                                <div className="border-b border-zinc-800/80 px-6 py-5">
                                    <h2 className="text-sm font-semibold">
                                        Engineering signals
                                    </h2>

                                    <p className="mt-1 text-xs text-zinc-600">
                                        Areas that may need attention
                                    </p>
                                </div>

                                <div className="divide-y divide-zinc-800/80">
                                    <Signal
                                        type="good"
                                        title="Repository activity"
                                        value="Healthy"
                                        description="Consistent development activity."
                                    />

                                    <Signal
                                        type="good"
                                        title="Bus factor"
                                        value="Good"
                                        description="Knowledge is reasonably distributed."
                                    />

                                    <Signal
                                        type="warning"
                                        title="Issue backlog"
                                        value="Watch"
                                        description="Issue count increased recently."
                                    />

                                    <Signal
                                        type="good"
                                        title="Pull requests"
                                        value="Healthy"
                                        description="Review activity is consistent."
                                    />
                                </div>

                                <div className="px-6 py-4">
                                    <button className="text-xs text-zinc-500 transition hover:text-white">
                                        View all signals →
                                    </button>
                                </div>
                            </section>
                        </div>

                        {/* =====================================================
                REPOSITORIES
            ===================================================== */}
                        <section className="mt-6 rounded-xl border border-zinc-800/80 bg-[#0c0c0f]">
                            <div className="flex flex-col justify-between gap-4 border-b border-zinc-800/80 px-6 py-5 sm:flex-row sm:items-center">
                                <div>
                                    <h2 className="text-sm font-semibold">
                                        Repositories
                                    </h2>

                                    <p className="mt-1 text-xs text-zinc-600">
                                        Health and activity across connected
                                        repositories.
                                    </p>
                                </div>

                                <button className="text-xs text-zinc-500 hover:text-white">
                                    View all repositories →
                                </button>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[850px]">
                                    <thead>
                                        <tr className="border-b border-zinc-800/80 text-left">
                                            <th className="px-6 py-3 text-[10px] font-medium uppercase tracking-wider text-zinc-600">
                                                Repository
                                            </th>

                                            <th className="px-6 py-3 text-[10px] font-medium uppercase tracking-wider text-zinc-600">
                                                Health
                                            </th>

                                            <th className="px-6 py-3 text-[10px] font-medium uppercase tracking-wider text-zinc-600">
                                                Activity
                                            </th>

                                            <th className="px-6 py-3 text-[10px] font-medium uppercase tracking-wider text-zinc-600">
                                                Contributors
                                            </th>

                                            <th className="px-6 py-3 text-[10px] font-medium uppercase tracking-wider text-zinc-600">
                                                Issues
                                            </th>

                                            <th className="px-6 py-3 text-[10px] font-medium uppercase tracking-wider text-zinc-600">
                                                PRs
                                            </th>

                                            <th className="px-6 py-3" />
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {repositories.map((repo) => (
                                            <tr
                                                key={repo.name}
                                                className="border-b border-zinc-800/70 transition last:border-0 hover:bg-zinc-900/40"
                                            >
                                                {/* Repository */}
                                                <td className="px-6 py-5">
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 font-mono text-xs text-zinc-400">
                                                            {repo.name
                                                                .charAt(0)
                                                                .toUpperCase()}
                                                        </div>

                                                        <div>
                                                            <p className="text-sm font-medium">
                                                                {repo.name}
                                                            </p>

                                                            <p className="mt-0.5 text-xs text-zinc-600">
                                                                {
                                                                    repo.description
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>

                                                {/* Health */}
                                                <td className="px-6 py-5">
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-sm font-medium">
                                                            {repo.health}
                                                        </span>

                                                        <div className="h-1.5 w-20 overflow-hidden rounded-full bg-zinc-800">
                                                            <div
                                                                className="h-full rounded-full bg-zinc-400"
                                                                style={{
                                                                    width: `${repo.health}%`,
                                                                }}
                                                            />
                                                        </div>
                                                    </div>

                                                    <p className="mt-1 text-[10px] text-zinc-600">
                                                        {repo.status}
                                                    </p>
                                                </td>

                                                {/* Activity */}
                                                <td className="px-6 py-5">
                                                    <span className="text-xs text-zinc-400">
                                                        ↑ {repo.activity}
                                                    </span>
                                                </td>

                                                {/* Contributors */}
                                                <td className="px-6 py-5 text-sm text-zinc-400">
                                                    {repo.contributors}
                                                </td>

                                                {/* Issues */}
                                                <td className="px-6 py-5">
                                                    <span className="text-sm text-zinc-400">
                                                        {repo.issues}
                                                    </span>
                                                </td>

                                                {/* PR */}
                                                <td className="px-6 py-5">
                                                    <span className="text-sm text-zinc-400">
                                                        {repo.pullRequests}
                                                    </span>
                                                </td>

                                                {/* Action */}
                                                <td className="px-6 py-5 text-right">
                                                    <button className="rounded-md border border-zinc-800 px-3 py-1.5 text-xs text-zinc-500 transition hover:bg-zinc-900 hover:text-white">
                                                        Inspect
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* =====================================================
                BOTTOM GRID
            ===================================================== */}
                        <div className="mt-6 grid gap-6 lg:grid-cols-2">
                            {/* Recent activity */}
                            <section className="rounded-xl border border-zinc-800/80 bg-[#0c0c0f]">
                                <div className="border-b border-zinc-800/80 px-6 py-5">
                                    <h2 className="text-sm font-semibold">
                                        Recent activity
                                    </h2>

                                    <p className="mt-1 text-xs text-zinc-600">
                                        Latest events across your repositories.
                                    </p>
                                </div>

                                <div className="divide-y divide-zinc-800/80">
                                    <Activity
                                        repository="repopulse"
                                        event="Pull request merged"
                                        detail="#184 · Improve repository health calculation"
                                        time="12 min ago"
                                    />

                                    <Activity
                                        repository="openone"
                                        event="New contributor"
                                        detail="Contributor joined the repository"
                                        time="1 hr ago"
                                    />

                                    <Activity
                                        repository="repopulse"
                                        event="Issue opened"
                                        detail="#203 · Improve contributor analytics"
                                        time="3 hrs ago"
                                    />

                                    <Activity
                                        repository="openone"
                                        event="Commit activity increased"
                                        detail="32 commits this week"
                                        time="5 hrs ago"
                                    />
                                </div>
                            </section>

                            {/* Health breakdown */}
                            <section className="rounded-xl border border-zinc-800/80 bg-[#0c0c0f]">
                                <div className="border-b border-zinc-800/80 px-6 py-5">
                                    <h2 className="text-sm font-semibold">
                                        Health breakdown
                                    </h2>

                                    <p className="mt-1 text-xs text-zinc-600">
                                        Workspace-wide engineering health.
                                    </p>
                                </div>

                                <div className="space-y-5 p-6">
                                    <HealthBar
                                        label="Repository activity"
                                        score={92}
                                    />

                                    <HealthBar
                                        label="Contributor distribution"
                                        score={86}
                                    />

                                    <HealthBar
                                        label="Issue management"
                                        score={79}
                                    />

                                    <HealthBar
                                        label="Pull request activity"
                                        score={88}
                                    />

                                    <HealthBar label="Maintenance" score={90} />
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

/* ===============================================================
   COMPONENTS
=============================================================== */

function NavSection({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-700">
                {title}
            </p>

            <div className="space-y-0.5">{children}</div>
        </div>
    );
}

function NavItem({
    label,
    icon,
    active = false,
}: {
    label: string;
    icon: string;
    active?: boolean;
}) {
    return (
        <button
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                active
                    ? 'bg-zinc-900 text-white'
                    : 'text-zinc-500 hover:bg-zinc-900/70 hover:text-zinc-200'
            }`}
        >
            <span className="w-4 text-center text-xs text-zinc-600">
                {icon}
            </span>

            <span>{label}</span>
        </button>
    );
}

function KpiCard({
    label,
    value,
    suffix,
    change,
    description,
}: {
    label: string;
    value: string;
    suffix?: string;
    change: string;
    description: string;
}) {
    return (
        <div className="rounded-xl border border-zinc-800/80 bg-[#0c0c0f] p-5 transition hover:border-zinc-700">
            <div className="flex items-center justify-between">
                <p className="text-xs text-zinc-500">{label}</p>

                <span className="text-zinc-700">•••</span>
            </div>

            <div className="mt-5 flex items-baseline gap-1">
                <span className="text-3xl font-semibold tracking-tight">
                    {value}
                </span>

                {suffix && (
                    <span className="text-sm text-zinc-600">{suffix}</span>
                )}
            </div>

            <div className="mt-3 flex items-center gap-2">
                <span className="text-xs text-zinc-400">{change}</span>

                <span className="text-xs text-zinc-700">{description}</span>
            </div>
        </div>
    );
}

function Signal({
    type,
    title,
    value,
    description,
}: {
    type: 'good' | 'warning';
    title: string;
    value: string;
    description: string;
}) {
    return (
        <div className="flex items-start gap-3 px-6 py-5">
            <div
                className={`mt-1 h-2 w-2 rounded-full ${
                    type === 'good' ? 'bg-zinc-400' : 'bg-zinc-600'
                }`}
            />

            <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium">{title}</p>

                    <span className="text-xs text-zinc-500">{value}</span>
                </div>

                <p className="mt-1 text-xs leading-5 text-zinc-600">
                    {description}
                </p>
            </div>
        </div>
    );
}

function Activity({
    repository,
    event,
    detail,
    time,
}: {
    repository: string;
    event: string;
    detail: string;
    time: string;
}) {
    return (
        <div className="flex items-start gap-4 px-6 py-4">
            <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-950 font-mono text-[10px] text-zinc-500">
                {repository.charAt(0).toUpperCase()}
            </div>

            <div className="min-w-0 flex-1">
                <div className="flex flex-col justify-between gap-1 sm:flex-row">
                    <p className="text-xs font-medium">{event}</p>

                    <span className="text-[10px] text-zinc-700">{time}</span>
                </div>

                <p className="mt-1 truncate text-xs text-zinc-600">{detail}</p>
            </div>
        </div>
    );
}

function HealthBar({ label, score }: { label: string; score: number }) {
    return (
        <div>
            <div className="mb-2 flex items-center justify-between">
                <span className="text-xs text-zinc-500">{label}</span>

                <span className="text-xs font-medium text-zinc-400">
                    {score}
                </span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-zinc-800">
                <div
                    className="h-full rounded-full bg-zinc-500"
                    style={{ width: `${score}%` }}
                />
            </div>
        </div>
    );
}
