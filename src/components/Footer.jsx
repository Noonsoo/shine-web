import React, { useRef, useState } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Send,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import logo from "../assets/ShineLogo.jpg";

const Footer = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false); // 👈 New state for error message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xtbt7mc",
        "template_wh2zud7",
        form.current,
        "1Flr6NUtR2XkAGQGi"
      )
      .then(() => {
        console.log("SUCCESS!");
        setSent(true); // ✅ Show success message
        setError(false); // hide error if it was showing
        form.current.reset();

        setTimeout(() => setSent(false), 4000); // hide success after 4 sec
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setError(true); // ❌ Show error message
        setSent(false); // hide success just in case

        setTimeout(() => setError(false), 4000); // hide error after 4 sec
      });
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-oxford text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4 grid-cols-1">
        {/* LOGO SECTION */}
        <div>
          <img src={logo} className="h-24 w-24 sm:h-12 object-contain" alt="" />
          <p className="text-gray-400 text-sm mt-2">
            Transforming Lives Through Accessible Education
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Explore</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="/about" className="hover:text-yellow-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/programs" className="hover:text-yellow-300">
                Our Programs
              </a>
            </li>
            <li>
              <a href="/get-involved" className="hover:text-yellow-300">
                Get Involved
              </a>
            </li>
            <li>
              <a href="/donate" className="hover:text-yellow-300">
                Donate
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:info@weareshine.org"
                className="hover:text-yellow-300">
                info@weareshine.org
              </a>
            </li>
            <li>
              <div className="flex gap-1">
                <p>Phone:</p>
                <div>
                  <p className="text-gray-400">+234 704 164 0768</p>
                  <p className="text-gray-400">+234 904 595 2751</p>
                </div>
              </div>
            </li>
            <li>
              Location: <span className="text-gray-400">Lagos, Nigeria</span>
            </li>
          </ul>
        </div>

        {/* SOCIAL + NEWSLETTER */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Stay Connected</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-3 mb-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                required
                className="px-3 py-2 rounded text-sm text-black focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                required
                className="px-3 py-2 rounded text-sm text-black focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-300 transition text-black font-medium">
              <Send size={16} /> Send
            </button>

            {/* ✅ Success message */}
            {sent && (
              <p className="text-green-400 text-sm font-medium">
                ✔ Message sent successfully!
              </p>
            )}

            {/* ❌ Error message */}
            {error && (
              <p className="text-red-400 text-sm font-medium">
                ❌ Failed to send message. Please try again.
              </p>
            )}
          </form>

          <div className="flex gap-4 mt-2">
            {/* <Facebook
              className="hover:text-yellow-400 cursor-pointer"
              onClick={() => openInNewTab("https://facebook.com")}
            /> */}
            <Twitter
              className="hover:text-yellow-400 cursor-pointer"
              onClick={() => openInNewTab("https://x.com/ShineF91076")}
            />
            <Instagram
              className="hover:text-yellow-400 cursor-pointer"
              onClick={() =>
                openInNewTab(
                  "https://www.instagram.com/shineforafrica?igsh=MmdveGFtOTB5N2lv"
                )
              }
            />
            <Linkedin
              className="hover:text-yellow-400 cursor-pointer"
              onClick={() =>
                openInNewTab(
                  "https://www.linkedin.com/company/supporting-holistic-inclusive-and-nurturing-education-foundation/posts/"
                )
              }
            />
            <Mail
              className="hover:text-yellow-400 cursor-pointer"
              onClick={() => openInNewTab("mailto:info@shine.org")}
            />
          </div>
        </div>
      </div>

      <hr className="border-slate-700 my-8" />

      <div className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SHINE Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
