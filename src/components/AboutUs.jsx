const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-center md:text-left">
      {/* Introduction */}
      <section className="">
        <h1 className="text-4xl font-bold text-oxford mb-4 ">About Us</h1>
        <p className="text-lg text-gray-700">
          The SHINE Foundation (Supporting Holistic, Inclusive, and Nurturing
          Education) is dedicated to transforming lives through equitable,
          empowering education. We serve learners of all backgrounds, ensuring
          that no student—whether in primary school or university—is left
          behind.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-oxford mb-2">
              Our Mission
            </h2>
            <p className="text-gray-700">
              To support learners by providing inclusive, holistic, and adaptive
              educational programs that nurture their potential and promote
              equity in access.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-oxford mb-2">
              Our Vision
            </h2>
            <p className="text-gray-700">
              A world where every learner thrives, and education is a
              transformative right, not a privilege.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-oxford mb-4">
          Our Core Values
        </h2>
        <ul className="text-gray-700 list-disc list-inside space-y-2">
          <li>
            <strong>Inclusivity:</strong> Every learner has a place, regardless
            of background.
          </li>
          <li>
            <strong>Accessibility:</strong> Removing barriers through tech,
            language, and advocacy.
          </li>
          <li>
            <strong>Nurture:</strong> Creating environments where learners feel
            safe and supported.
          </li>
          <li>
            <strong>Integrity:</strong> Grounded in ethics, transparency, and
            accountability.
          </li>
          <li>
            <strong>Equity:</strong> Focused on the underserved and
            marginalised.
          </li>
        </ul>
      </section>

      {/* Who We Serve */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-oxford mb-4">
          Who We Serve
        </h2>
        <p className="text-gray-700 mb-4">
          SHINE supports students across the full educational journey:
        </p>
        <ul className="text-gray-700 list-disc list-inside space-y-1">
          <li>Primary pupils developing foundational literacy and numeracy.</li>
          <li>Secondary students preparing for exams and leadership.</li>
          <li>
            University learners navigating careers and financial pressure.
          </li>
        </ul>
        <p className="mt-3 text-gray-700">
          We prioritise those from marginalised, under-resourced backgrounds and
          multilingual contexts.
        </p>
      </section>

      {/* Programme Highlights */}
      <section>
        <h2 className="text-2xl font-semibold text-oxford mb-4">
          Our Programmes
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-700">
          <div>
            <h3 className="text-xl font-medium text-oxford">
              Learning for All
            </h3>
            <ul className="list-disc list-inside">
              <li>Language Bridge</li>
              <li>Mother Tongue Advocacy</li>
              <li>Mobile Libraries</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-oxford">
              Educational Equity
            </h3>
            <ul className="list-disc list-inside">
              <li>SHINE Scholars</li>
              <li>Tech for All</li>
              <li>School Supply Drives</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-oxford">
              Whole Learner Wellbeing
            </h3>
            <ul className="list-disc list-inside">
              <li>Breakfast Buddies</li>
              <li>Mental Health Matters</li>
              <li>SHINE Arts Collective</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-oxford">
              Community Empowerment
            </h3>
            <ul className="list-disc list-inside">
              <li>Parent Empowerment Sessions</li>
              <li>Community Learning Hubs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-oxford">
              Educator Support
            </h3>
            <ul className="list-disc list-inside">
              <li>Teacher Mentorship Programme</li>
              <li>Inclusive Pedagogy CPD</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-oxford">
              Advocacy & Research
            </h3>
            <ul className="list-disc list-inside">
              <li>SHINE Media Lab</li>
              <li>Impact Stories</li>
              <li>Policy Briefs & Reports</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
