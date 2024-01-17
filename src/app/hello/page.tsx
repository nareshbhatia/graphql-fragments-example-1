import Link from 'next/link';

export default function AlertsPage() {
  return (
    <div className="flex flex-col mx-auto max-w-3xl p-6 gap-6">
      <p className="text-2xl font-semibold leading-none tracking-tight">
        Hello World
      </p>
      <Link href="/">
        <span className="text-sm font-semibold leading-6">&lt; Back</span>
      </Link>
    </div>
  );
}
