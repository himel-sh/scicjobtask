export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} NextStore</p>
        <p className="text-neutral-500">
          Built with Next.js 16 and modern web technologies
        </p>
      </div>
    </footer>
  );
}
