import React from "react";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800 py-20 mt-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Intro */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 ">About Us</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
            The SHINE Foundation (Supporting Holistic, Inclusive, and Nurturing
            Education) transforms lives through equitable, inclusive, and
            empowering education from early learners to university students.
          </p>
        </div>

        {/* Mission + Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To support learners across all educational levels by providing
              adaptive, holistic educational support that nurtures their
              potential, responds to real world needs, and promotes equity in
              access and attainment.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700">
              A world where education is a transformative right not a privilege.
              We envision vibrant African learning communities where every
              learner thrives, regardless of background or circumstance.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-6 text-center">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Inclusivity",
                desc: "We embrace diversity cultural, linguistic, economic, and more. Every learner belongs.",
              },
              {
                title: "Accessibility",
                desc: "We break barriers to education through tech, advocacy, and language support.",
              },
              {
                title: "Nurture",
                desc: "We cultivate safe, supportive, and emotionally healthy environments.",
              },
              {
                title: "Integrity",
                desc: "Our work is accountable, transparent, and honors every learner’s dignity.",
              },
              {
                title: "Equity",
                desc: "We focus where the need is greatest uplifting the underserved and marginalized.",
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-gray-100 p-6 rounded shadow">
                <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Serve */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-6 text-center">Who We Serve</h3>
          <p className="text-center max-w-3xl mx-auto text-gray-700 mb-8">
            SHINE designs targeted support for learners of all ages and stages
            especially those facing systemic disadvantages, language barriers,
            or under resourced schooling.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border rounded p-6">
              <h4 className="font-semibold text-lg mb-2">
                Primary School Pupils
              </h4>
              <p className="text-gray-600">
                Supporting foundational literacy, numeracy, and multilingual
                challenges in early education.
              </p>
            </div>
            <div className="bg-white border rounded p-6">
              <h4 className="font-semibold text-lg mb-2">
                Secondary School Students
              </h4>
              <p className="text-gray-600">
                Preparing learners for exams, adulthood, and leadership through
                mentoring and skill-building.
              </p>
            </div>
            <div className="bg-white border rounded p-6">
              <h4 className="font-semibold text-lg mb-2">
                University Students
              </h4>
              <p className="text-gray-600">
                Offering support for financial stress, career guidance, and
                mental wellness.
              </p>
            </div>
          </div>
        </div>

        {/* Programmes Preview */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Our Programme Pillars</h3>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            From mobile libraries to mentorships, SHINE's six programme pillars
            support students throughout their learning journey ensuring no one
            is left behind.
          </p>
          <Link
            to="/programs"
            className="inline-block bg-blue-900 text-white px-6 py-3 rounded font-semibold hover:bg-blue-800 transition">
            Explore Our Initiatives
          </Link>
        </div>

        <section className="pt-10">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Meet the SHINE Team
          </h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="text-center space-y-3">
              <img
                src="/images/team/yemi.jpg"
                alt="Abby Mackenzie"
                className="w-40 h-40 mx-auto rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold"> Adeyemi P. Awomodu</h3>
                <p className="text-sm text-gray-600">
                  Founder & Executive Director
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="text-center space-y-3">
              <img
                src="/images/team/Nonso.jpg"
                alt="Nonso"
                className="w-40 h-40 mx-auto rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">Nwafor Chinonso</h3>
                <p className="text-sm text-gray-600">Lead Developer</p>
              </div>
            </div>

            <div className="text-center space-y-3">
              <img
                src="/images/team/Kofo.jpg"
                alt="Daniel Okeke"
                className="w-40 h-40 mx-auto rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">Adesina-Alashe Kofoworola</h3>
                <p className="text-sm text-gray-600">
                  Project and Operations Lead
                </p>
              </div>
            </div>

            <div className="text-center space-y-3">
              <img
                src="/images/team/Esther.jpg"
                alt="Daniel Okeke"
                className="w-40 h-40 mx-auto rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">Olawale Esther</h3>
                <p className="text-sm text-gray-600">Finance Lead</p>
              </div>
            </div>

            {/* Team Member 3 */}

            {/* Team Member 4 */}
            <div className="text-center space-y-3">
              <img
                src="/images/team/chuks.jpg"
                alt="Chinonso Nwafor"
                className="w-40 h-40 mx-auto rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">Okeke Chukwudi</h3>
                <p className="text-sm text-gray-600">Graphics Designer</p>
              </div>
            </div>

            <div className="text-center space-y-3">
              <img
                src="/images/team/emily.jpg"
                alt="Emily Obasi"
                className="w-40 h-40 mx-auto rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">Anyahara Emily </h3>
                <p className="text-sm text-gray-600"></p>Program Coordinator,
                Mentoring and Tutoring.
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="text-center space-y-3">
              <img
                src="/images/team/vic.jpg"
                alt="Amina Yusuf"
                className="w-40 h-40 mx-auto rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold"> Ugo Victor</h3>
                <p className="text-sm text-gray-600">Community Volunteer</p>
              </div>
            </div>

            {/* Team Member 6 */}
            <div className="text-center space-y-3">
              <img
                src="/images/team/vol.jpg"
                alt="Daniel Okeke"
                className="w-40 h-40 mx-auto rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">Ugo Dupe</h3>
                <p className="text-sm text-gray-600">
                  Parent Community Advisor
                </p>
              </div>
            </div>
            <div className="text-center space-y-3">
              <img
                src="/images/team/Ire.jpg"
                alt="Daniel Okeke"
                className="w-40 h-40 mx-auto rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">Adeireoluwa Awomodu</h3>
                <p className="text-sm text-gray-600">
                  Youth Ambassador for Fundraising
                </p>
              </div>
            </div>

            <div className="text-center space-y-3">
              <img
                src="/images/team/Ife.jpg"
                alt="Daniel Okeke"
                className="w-40 h-40 mx-auto rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">Adeifeoluwa Awomodu</h3>
                <p className="text-sm text-gray-600">
                  Youth Ambassador for Fundraising
                </p>
              </div>
            </div>

            <div className="text-center space-y-3">
              <img
                src="/images/team/mide.jpg"
                alt="Daniel Okeke"
                className="w-40 h-40 mx-auto rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">Ademide Awomodu</h3>
                <p className="text-sm text-gray-600">
                  Youth Ambassador for Fundraising
                </p>
              </div>
            </div>

            <div className="text-center space-y-3">
              <img
                src="/images/team/Treasure.jpg"
                alt="Daniel Okeke"
                className="w-40 h-40 mx-auto rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">Okpala Treasure</h3>
                <p className="text-sm text-gray-600">Community Volunteer</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutUs;
