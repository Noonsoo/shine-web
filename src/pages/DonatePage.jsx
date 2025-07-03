import React from "react";

const DonatePage = () => {
  return (
    <section className="pt-28 px-6 md:px-16 lg:px-24 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto space-y-20">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Donate to SHINE Foundation
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Help us make education accessible, inclusive, and nurturing. Every
            donation fuels programmes that empower learners and transform
            lives across Africa
          </p>
        </header>

        {/* Bank Details */}
        <section className="space-y-3 border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-medium">Bank Transfer</h2>
          <div className="text-base space-y-1">
            <p>
              <strong>Account Name:</strong> Supporting Holistic Inclusive and
              Nurturing Education Foundation
            </p>
            <p>
              <strong>Account Number:</strong> 1028319477
            </p>
            <p>
              <strong>Bank:</strong> UBA PLC
            </p>
          </div>
        </section>

        {/* Address */}
        <section className="space-y-3 border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-medium">Visit Us</h2>
          <p className="text-base">
            Olatunji House, 4th Floor
            <br />
            299 Ikorodu Road, Maryland,
            <br />
            Lagos, Nigeria.
          </p>
        </section>

        {/* What Donation Supports */}
        <section className="space-y-3 border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-medium">Your Donation Supports</h2>
          <ul className="list-disc list-inside text-base space-y-1">
            <li>Books, uniforms, and school essentials</li>
            <li>Mental health and peer mentorship</li>
            <li>Access to digital learning tools</li>
            <li>Inclusive arts and literacy programs</li>
            <li>Teacher training for supportive classrooms</li>
          </ul>
        </section>

        {/* Contact Info */}
        <section className="space-y-3 border-t border-gray-200 pt-10 text-center">
          <h2 className="text-2xl font-medium">Want to Do More?</h2>
          <p className="text-base">
            Become a monthly donor, sponsor a SHINE Scholar, or support a
            learning community.
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@shineforafrica.org" className="underline">
              info@weareshine.org
            </a>
          </p>
          {/* <p>
            <strong>Follow us:</strong> @ShineFoundationNG
          </p> */}
        </section>

        {/* Thank You */}
        <footer className="text-center text-sm text-gray-500 pt-10 border-t py-9 border-gray-100">
          <p>Thank you for helping every student shine.</p>
        </footer>
      </div>
    </section>
  );
};

export default DonatePage;
