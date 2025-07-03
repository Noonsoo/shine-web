import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/ShineLogo.jpg";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navLinkStyles =
    "block px-4 py-2 hover:bg-slate-800 transition rounded text-white";

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // reset on unmount
    };
  }, [isOpen]);

  return (
    <header className="bg-oxford text-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl font-bold text-white">
            <img
              src={logo}
              className="h-10 w-auto sm:h-12 object-contain"
              alt=""
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center text-sm">
          <Link to="/about" className={navLinkStyles}>
            About Us
          </Link>
          <Link to="/impact" className={navLinkStyles}>
            Impact
          </Link>
          <Link to="/programs" className={navLinkStyles}>
            Programs
          </Link>
          <Link to="/get-involved" className={navLinkStyles}>
            Get Involved
          </Link>
          <Link
            to="/donate"
            className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition">
            Donate
          </Link>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-oxford px-4 py-6 space-y-3 text-sm">
            <Link
              to="/about"
              className={navLinkStyles}
              onClick={() => setIsOpen(false)}>
              About Us
            </Link>

            {/* ✅ ADDED IMPACT LINK HERE */}
            <Link
              to="/impact"
              className={navLinkStyles}
              onClick={() => setIsOpen(false)}>
              Impact
            </Link>

            <Link
              to="/programs"
              className={navLinkStyles}
              onClick={() => setIsOpen(false)}>
              Programs
            </Link>
            <Link
              to="/get-involved"
              className={navLinkStyles}
              onClick={() => setIsOpen(false)}>
              Get Involved
            </Link>
            <Link
              to="/donate"
              className="block text-center bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition w-full"
              onClick={() => setIsOpen(false)}>
              Donate
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
