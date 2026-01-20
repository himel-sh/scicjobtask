import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function NavBar() {
  const cookieStore = await cookies();
  const isAuthed = cookieStore.get("auth")?.value === "1";

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="font-semibold tracking-tight text-neutral-900"
        >
          NextStore
        </Link>

        <nav className="flex items-center gap-4 text-sm text-neutral-700">
          <Link href="/" className="hover:text-neutral-900 hover:underline">
            Home
          </Link>
          <Link
            href="/items"
            className="hover:text-neutral-900 hover:underline"
          >
            Items
          </Link>
          {isAuthed && (
            <Link
              href="/add-item"
              className="hover:text-neutral-900 hover:underline"
            >
              Add Item
            </Link>
          )}
          {!isAuthed ? (
            <Link
              href="/login"
              className="rounded-md bg-black px-3 py-1.5 text-white hover:opacity-90"
            >
              Login
            </Link>
          ) : (
            <form
              action={async () => {
                "use server";
                const store = await cookies();
                store.set("auth", "", { path: "/", maxAge: 0 });
                store.set("email", "", { path: "/", maxAge: 0 });
                redirect("/");
              }}
            >
              <button
                type="submit"
                className="rounded-md border border-neutral-300 px-3 py-1.5 text-neutral-700 hover:bg-neutral-100"
              >
                Logout
              </button>
            </form>
          )}
        </nav>
      </div>
    </header>
  );
}
