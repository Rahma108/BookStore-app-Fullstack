
// components/HeroSection.jsx
export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1974')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Subtle Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(245,158,11,0.12),transparent_45%)] pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center lg:py-32">
        <h1 className="text-5xl sm:text-3xl md:text-xl lg:text-5xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
            The Book Lover's Dreamland
          </span>
          <br />
          <span className="text-white/90 mt-2 block">Awaits You</span>
        </h1>

        <p className="mt-6 sm:text-xl  text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
          Welcome to the ultimate sanctuary for book enthusiasts. Join a living,
          breathing community where stories evolve, connect, and inspire because
          every book deserves a chance to change someone's world.
        </p>

        <div className="mt-10 max-w-2xl mx-auto">
          <form className="relative group">
            <div className="flex overflow-hidden rounded-full bg-gray-900/60 backdrop-blur-md border border-amber-500/30 shadow-2xl shadow-amber-900/20 transition-all duration-500 group-focus-within:border-amber-400/60 group-focus-within:shadow-amber-500/30">
              <input
                type="text"
                placeholder="Search a Book..."
                className="flex-1 bg-transparent px-6 py-5 text-white placeholder-gray-400 outline-none text-lg"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-amber-600 to-amber-500 px-8 py-5 text-white font-medium hover:from-amber-500 hover:to-amber-400 transition-all duration-300 flex items-center gap-2"
              >
                Search
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}





