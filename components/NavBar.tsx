"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center py-4 px-4 md:px-8 md:justify-evenly">
      <Link href="/">
        <Image
          src={"/shared/desktop/logo.svg"}
          width={150}
          height={150}
          alt="logo"
        />
      </Link>

      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <Image
            src={"/shared/mobile/close.svg"}
            width={24}
            height={24}
            alt="close"
          />
        ) : (
          <Image
            src={"/shared/mobile/menu.svg"}
            width={24}
            height={24}
            alt="menu"
          />
        )}
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-y-4 absolute top-12 left-0 right-0 bg-white shadow-lg py-6 px-8 md:p-0 md:flex-row md:static md:bg-transparent md:shadow-none md:gap-x-8 items-center md:hidden"
          >
            <li>
              <Link
                href="/stories"
                className="text-lg text-gray-700 hover:text-black transition-colors"
              >
                Stories
              </Link>
            </li>
            <li>
              <Link
                href="/features"
                className="text-lg text-gray-700 hover:text-black transition-colors"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-lg text-gray-700 hover:text-black transition-colors"
              >
                Pricing
              </Link>
            </li>
            <button className="bg-black text-white rounded-lg py-4 px-8">
              GET AN INVITE
            </button>
          </motion.ul>
        )}
      </AnimatePresence>

      <div className="hidden md:flex">
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-y-4 absolute top-16 left-0 right-0 bg-white shadow-lg py-6 px-8 md:p-0 md:flex-row md:static md:bg-transparent md:shadow-none md:gap-x-8 items-center"
        >
          <li>
            <Link
              href="/stories"
              className="text-lg text-gray-700 hover:text-black transition-colors"
            >
              Stories
            </Link>
          </li>
          <li>
            <Link
              href="/features"
              className="text-lg text-gray-700 hover:text-black transition-colors"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className="text-lg text-gray-700 hover:text-black transition-colors"
            >
              Pricing
            </Link>
          </li>
        </motion.ul>
      </div>

      <button className="hidden md:block bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full py-2 px-8 shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all">
        GET AN INVITE
      </button>
    </div>
  );
};

export default Navbar;
