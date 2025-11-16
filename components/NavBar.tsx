"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "कथा" },
  { href: "/background", label: "प्रसंग" },
  { href: "/values", label: "सीख" }
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-6">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm md:text-base transition-colors ${
              isActive ? "text-amber-400" : "text-slate-200 hover:text-amber-300"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
