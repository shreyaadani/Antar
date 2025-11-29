import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Antar",
  description: "A soft, quiet space for grounding and grief support.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-[#FAF9F6] via-[#F4EEFF] to-[#E8F3FF] text-[#2B2B2F] antialiased">
        {/* Floating soft spheres background */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-20 w-64 h-64 rounded-full bg-[#D7CCFF] opacity-40 blur-3xl" />
          <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-[#CDE7FF] opacity-40 blur-3xl" />
          <div className="absolute bottom-40 left-1/3 w-40 h-40 rounded-full bg-[#F3D3E6] opacity-40 blur-2xl" />
        </div>

        <div className="min-h-screen flex flex-col">
          {/* Navigation */}
          <header className="sticky top-0 z-50 bg-white/60 border-b border-white/30 backdrop-blur-xl">
            <div className="max-w-4xl mx-auto px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#C8B8FF] to-[#A8C2F5] shadow-md" />
                <span className="font-semibold tracking-tight text-lg">Antar</span>
              </div>

              <nav className="hidden sm:flex gap-7 text-sm text-[#696972]">
                <a href="/" className="hover:text-[#2B2B2F] transition">
                  Home
                </a>
                <a href="/grounding" className="hover:text-[#2B2B2F] transition">
                  Grounding
                </a>
                <a href="/actions" className="hover:text-[#2B2B2F] transition">
                  Actions
                </a>
                <a href="/memories" className="hover:text-[#2B2B2F] transition">
                  Memories
                </a>
                <a href="/identity" className="hover:text-[#2B2B2F] transition">
                  Identity
                </a>
                <a href="/learn" className="hover:text-[#2B2B2F] transition">
                  Learn
                </a>
              </nav>
            </div>
          </header>

          {/* Main */}
                  <main className="flex-1 max-w-2xl mx-auto px-6 py-12">
                      
                      {children}
                   <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/20 backdrop-blur-sm"></div>
   
          </main>

          {/* Footer */}
          <footer className="bg-white/60 text-xs text-[#7A7A85] border-t border-white/30 backdrop-blur-lg">
            <div className="max-w-4xl mx-auto px-5 py-4 flex justify-between">
              <span>Antar · gentle grounding for heavy moments</span>
              <span>Not a substitute for professional care</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
