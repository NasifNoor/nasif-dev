export function Footer() {
  return (
    <footer className="flex flex-col items-start justify-between gap-3 border-t border-white/[0.04] px-5 py-[18px] sm:flex-row sm:items-center sm:px-10">
      <div className="text-[11px] text-slate-700">
        &copy; 2026 <span className="text-slate-600">M. Nasif Hasan Noor</span>.{" "}
        Built with Next.js &amp; TypeScript.
      </div>
      <div className="flex gap-4">
        <a
          href="https://github.com/NasifNoor"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-slate-700"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/nasifh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-slate-700"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
