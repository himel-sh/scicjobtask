import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Section 1: Hero */}
      <section className="rounded-3xl border bg-gradient-to-br from-neutral-50 to-white p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <p className="text-sm font-medium text-neutral-700">
              Next.js 16 with App Router
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
              Modern e-commerce platform with authentication and real-time
              updates.
            </h1>
            <p className="text-neutral-700">
              Browse our curated collection, view detailed product information,
              and manage your items with ease.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/items"
                className="rounded-xl bg-black px-4 py-2.5 text-center text-sm font-medium text-white hover:opacity-90"
              >
                Explore Items
              </Link>
              <Link
                href="/login"
                className="rounded-xl border px-4 py-2.5 text-center text-sm font-medium hover:bg-neutral-50"
              >
                Login
              </Link>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-2xl border bg-white p-5">
              <p className="text-sm font-medium text-neutral-900">
                Lightning Fast
              </p>
              <p className="text-sm text-neutral-700">
                Built with Next.js 16 for optimal performance and SEO.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-5">
              <p className="text-sm font-medium text-neutral-900">
                Secure Auth
              </p>
              <p className="text-sm text-neutral-700">
                Cookie-based authentication with protected routes.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-5">
              <p className="text-sm font-medium text-neutral-900">Full-Stack</p>
              <p className="text-sm text-neutral-700">
                Integrated API routes for seamless data management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How it works */}
      <section className="rounded-3xl border bg-white p-8 md:p-10">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
          How it works
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-neutral-50 p-5">
            <p className="text-sm font-medium text-neutral-900">1) Browse</p>
            <p className="text-sm text-neutral-700">
              Visit the items page and see cards with key properties.
            </p>
          </div>
          <div className="rounded-2xl bg-neutral-50 p-5">
            <p className="text-sm font-medium text-neutral-900">
              2) View details
            </p>
            <p className="text-sm text-neutral-700">
              Click an item to view its full details page.
            </p>
          </div>
          <div className="rounded-2xl bg-neutral-50 p-5">
            <p className="text-sm font-medium text-neutral-900">3) Add item</p>
            <p className="text-sm text-neutral-700">
              Login, then add a new item via a protected form.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Categories */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Popular categories
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {["Audio", "Home", "Wellness", "Travel"].map((c) => (
            <div key={c} className="rounded-2xl border p-5">
              <p className="font-medium">{c}</p>
              <p className="text-sm text-neutral-600">
                Curated items for your needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: FAQ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border p-5">
            <p className="font-medium">Is browsing public?</p>
            <p className="text-sm text-neutral-600">
              Yes — list and details pages require no auth.
            </p>
          </div>
          <div className="rounded-2xl border p-5">
            <p className="font-medium">What’s protected?</p>
            <p className="text-sm text-neutral-600">
              Only the “Add Item” page and the create endpoint.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="rounded-3xl border bg-black p-8 text-white md:p-10">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Start exploring now
            </h2>
            <p className="mt-1 text-sm text-neutral-200">
              Go to the items list and open any product details.
            </p>
          </div>
          <Link
            href="/items"
            className="rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black hover:opacity-90"
          >
            Go to Items
          </Link>
        </div>
      </section>
    </div>
  );
}
