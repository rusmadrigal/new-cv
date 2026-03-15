export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm" suppressHydrationWarning>
            © {new Date().getFullYear()} Rusben Madrigal. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a
              href="#about"
              className="text-gray-500 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-xs">San Jose, Costa Rica</p>
        </div>
      </div>
    </footer>
  );
}
