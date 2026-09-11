import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-black">
                    R
                </div>

                <span className="text-lg font-semibold tracking-tight">
                    RepoPulse
                </span>
            </Link>

            {/* Navigation */}
            <div className="hidden items-center gap-8 text-sm md:flex">
                <Link
                    href="/"
                    className="text-zinc-400 transition hover:text-white"
                >
                    Home
                </Link>

                <Link
                    href="/docs"
                    className="text-zinc-400 transition hover:text-white"
                >
                    Docs
                </Link>

                <Link
                    href="/how-it-works"
                    className="text-zinc-400 transition hover:text-white"
                >
                    How it works
                </Link>

                <Link
                    href="/about"
                    className="text-zinc-400 transition hover:text-white"
                >
                    About
                </Link>
            </div>

            {/* Dashboard */}
            <Link
                href="/dashboard"
                className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium transition hover:border-zinc-500 hover:bg-zinc-900"
            >
                Open Dashboard
            </Link>
        </nav>
    );
}
