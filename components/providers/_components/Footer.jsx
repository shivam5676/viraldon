import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-surface-darker to-surface-dark text-primary pt-16 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-from rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent mb-6">
              ViralDon
            </h3>
            <p className="text-light mb-8 max-w-md text-lg">
              Empowering businesses with innovative digital solutions for
              sustainable growth in the modern marketplace.
            </p>
            <div className="flex space-x-6">
              {["twitter", "facebook", "linkedin", "instagram"].map(
                (social, index) => (
                  <a
                    key={social}
                    href="#"
                    className="text-surface-dark p-4 rounded-full hover:bg-gradient-from transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                    aria-label={social}
                  >
                    <div className="w-6 h-6 bg-light rounded-full"></div>
                  </a>
                )
              )}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#services"
                  className="text-light hover:text-primary transition-colors duration-300 hover:underline"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-light hover:text-primary transition-colors duration-300 hover:underline"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-light hover:text-primary transition-colors duration-300 hover:underline"
                >
                  Software Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-light hover:text-primary transition-colors duration-300 hover:underline"
                >
                  Brand Strategy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-light">
              <li className="flex items-start">
                <span className="mr-3 mt-1">📧</span>
                <span>contact@viraldon.com</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">📞</span>
                <span>+91 9793903250</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">📍</span>
                <span>New Delhi,India</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} ViralDon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
