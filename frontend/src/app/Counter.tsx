"use client";

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center gap-3">
            <p className="text-2xl font-semibold tabular-nums text-black dark:text-zinc-50">
                {count}
            </p>
            <button
                onClick={() => setCount((c) => c + 1)}
                className="rounded-full bg-black px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-300"
            >
                Increment
            </button>
        </div>
    );
}
