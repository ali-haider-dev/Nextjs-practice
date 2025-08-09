'use client';
import React, { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Using pathname to conditionally show navigation items

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              Unknown Developers
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </Link>
              </li>
              {pathname === 'services' && (
                <>
                  <li>
                    <Link
                      href="/services/web"
                      className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/mobile"
                      className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Mobile Apps
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/cloud"
                      className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Cloud Solutions
                    </Link>
                  </li>
                </>
              )}
              {pathname === '/about' && (
                <>
                  <li>
                    <Link
                      href="/about/team"
                      className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/mission"
                      className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Our Mission
                    </Link>
                  </li>
                </>
              )}
              {pathname !== '/about' && pathname !== '/services' && (
                <>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Services
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none" 
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
        <ul className="px-2 pt-2 pb-3 space-y-1">
          <li>
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          {pathname === '/services' && (
            <>
              <li>
                <Link
                  href="/services/web"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cloud Solutions
                </Link>
              </li>
            </>
          )}
          {pathname === '/about' && (
            <>
              <li>
                <Link
                  href="/about/team"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/about/mission"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Mission
                </Link>
              </li>
            </>
          )}
          {pathname !== '/about' && pathname !== '/services' && (
            <>
              <li>
                <Link
                  href="/about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
            </>
          )}
          <li>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navigation;
