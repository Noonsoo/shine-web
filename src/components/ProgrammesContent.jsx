import React from "react";

function ProgrammesContent() {
  return (
    <section class="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Programmes</h2>
        <p class="text-lg text-gray-700 mb-12">
          At SHINE, we support learners across every stage of their education
          through innovative, inclusive, and impactful programmes. From
          foundational literacy to university mentorship, each initiative is
          designed to uplift and empower.
        </p>

        <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div class="bg-gray-50 p-6 rounded-2xl shadow">
            <h3 class="text-xl font-semibold text-indigo-600 mb-2">
              Learning for All
            </h3>
            <p class="text-gray-700 mb-4">
              Building strong foundations through multilingual and
              literacy-focused education.
            </p>
            <ul class="list-disc list-inside text-sm text-gray-600">
              <li>Language Bridge</li>
              <li>Mother Tongue Advocacy</li>
              <li>Mobile Libraries</li>
            </ul>
          </div>

          <div class="bg-gray-50 p-6 rounded-2xl shadow">
            <h3 class="text-xl font-semibold text-indigo-600 mb-2">
              Educational Equity
            </h3>
            <p class="text-gray-700 mb-4">
              Removing financial and systemic barriers to learning success.
            </p>
            <ul class="list-disc list-inside text-sm text-gray-600">
              <li>SHINE Scholars</li>
              <li>Tech for All</li>
              <li>School Supply Drives</li>
            </ul>
          </div>

          <div class="bg-gray-50 p-6 rounded-2xl shadow">
            <h3 class="text-xl font-semibold text-indigo-600 mb-2">
              Whole Learner Wellbeing
            </h3>
            <p class="text-gray-700 mb-4">
              Supporting student wellness through meals, mental health, and
              creativity.
            </p>
            <ul class="list-disc list-inside text-sm text-gray-600">
              <li>Breakfast Buddies</li>
              <li>Mental Health Matters</li>
              <li>SHINE Arts Collective</li>
            </ul>
          </div>

          <div class="bg-gray-50 p-6 rounded-2xl shadow">
            <h3 class="text-xl font-semibold text-indigo-600 mb-2">
              Empowering Families & Communities
            </h3>
            <p class="text-gray-700 mb-4">
              Engaging caregivers and communities as partners in learning.
            </p>
            <ul class="list-disc list-inside text-sm text-gray-600">
              <li>Parent Empowerment Sessions</li>
              <li>Community Learning Hubs</li>
            </ul>
          </div>

          <div class="bg-gray-50 p-6 rounded-2xl shadow">
            <h3 class="text-xl font-semibold text-indigo-600 mb-2">
              Educator Support & Innovation
            </h3>
            <p class="text-gray-700 mb-4">
              Training teachers to lead inclusive and transformative classrooms.
            </p>
            <ul class="list-disc list-inside text-sm text-gray-600">
              <li>Teacher Mentorship Programme</li>
              <li>Inclusive Pedagogy CPD</li>
            </ul>
          </div>

          <div class="bg-gray-50 p-6 rounded-2xl shadow">
            <h3 class="text-xl font-semibold text-indigo-600 mb-2">
              Advocacy & Research
            </h3>
            <p class="text-gray-700 mb-4">
              Amplifying student voices and influencing education policy.
            </p>
            <ul class="list-disc list-inside text-sm text-gray-600">
              <li>SHINE Media Lab</li>
              <li>Impact Stories</li>
              <li>Policy Briefs & Reports</li>
            </ul>
          </div>
        </div>

        <div class="mt-16">
          <h4 class="text-2xl font-semibold text-gray-800 mb-2">
            Join Our Mission
          </h4>
          <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
            Each of our programmes is made possible through the dedication of
            our volunteers, partners, and supporters. Whether you're a parent,
            educator, donor, or student—there's a place for you at SHINE.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/volunteer"
              class="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition">
              Volunteer
            </a>
            <a
              href="/donate"
              class="bg-yellow-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-yellow-600 transition">
              Donate
            </a>
            <a
              href="/contact"
              class="bg-gray-800 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-900 transition">
              Partner with Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgrammesContent;
