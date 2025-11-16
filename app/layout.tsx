import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Link from "next/link";
import NavBar from "@/components/NavBar";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Vidura Bhakti | कथा",
  description:
    "कृष्ण ने हस्तिनापुर में केवल विदुर के घर ही भोजन क्यों किया? इतिहास और भक्तिभाव के साथ जुड़ी कथा।"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className={`${display.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <header className="border-b border-slate-800/60 bg-slate-900/40 backdrop-blur">
          <nav className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4">
            <Link href="/" className="flex flex-col">
              <span className="font-display text-xl uppercase tracking-[0.4em] text-amber-300">
                भक्ति कथा
              </span>
              <span className="text-xs text-slate-400">
                श्रीकृष्ण · विदुर · हस्तिनापुर
              </span>
            </Link>
            <NavBar />
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t border-slate-800/60 bg-slate-900/30 py-8">
          <div className="mx-auto max-w-5xl px-6 text-sm text-slate-400">
            © {new Date().getFullYear()} भक्तिसूत्र · प्रेरित कथाएँ
          </div>
        </footer>
      </body>
    </html>
  );
}
