import Counter from "./Counter";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 font-sans text-center dark:bg-black">
      <main className="space-y-8">
        <h1 className="text-5xl font-bold tracking-tight text-black dark:text-zinc-50">
          Mathboard
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300">
          The new age of mathematics input
        </p>
        <Counter />
      </main>
    </div>
  );
}
