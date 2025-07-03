import React from "react";

const Programmes = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#FFF3EC] to-[#FDFDFD] text-[#2E2C2F] py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 mt-12">
          Our Programmes
        </h2>

        <p className="text-lg md:text-xl text-center mb-10 max-w-3xl mx-auto">
          At SHINE, our work spans the full learning journey from foundational
          literacy to career readiness. Explore our six pillars of impact
          designed to uplift, empower, and transform learners at every stage.
        </p>

        <div className="space-y-12">
          {programmes.map((program, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border-l-8 border-[#FF9F59] hover:border-[#EC6B46] transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#3C2A21]">
                {program.title}
              </h3>
              <p className="text-[#4E4B50] text-base md:text-lg leading-relaxed">
                {program.description}
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-sm md:text-base text-[#6B676E]">
                {program.initiatives.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const programmes = [
  {
    title: "1. Learning for All",
    description:
      "Foundational literacy and multilingual learning are essential for long-term success. These programmes address early learning gaps and promote inclusive classrooms.",
    initiatives: [
      "Language Bridge: Support for pupils struggling with English as a language of instruction.",
      "Mother Tongue Advocacy: Promoting indigenous language inclusion in schools.",
      "Mobile Libraries: Community hubs to foster reading culture.",
    ],
  },
  {
    title: "2. Educational Equity",
    description:
      "We break down financial, technological, and systemic barriers to ensure students from all backgrounds can thrive.",
    initiatives: [
      "SHINE Scholars: Financial aid and mentorship.",
      "Tech for All: Device access and digital literacy.",
      "School Supply Drives: Uniforms, bags, and more for public school pupils.",
    ],
  },
  {
    title: "3. Whole Learner Wellbeing",
    description:
      "True learning is social, emotional, and personal. These initiatives support mental health, nutrition, and creativity.",
    initiatives: [
      "Breakfast Buddies: Nutritious meals to fight hunger.",
      "Mental Health Matters: Peer wellness circles and referrals.",
      "SHINE Arts Collective: Creative programs to build expression and confidence.",
    ],
  },
  {
    title: "4. Empowering Families and Communities",
    description:
      "Parents and communities are key to lasting change. We equip them with tools to become allies in learning.",
    initiatives: [
      "Parent Empowerment: Training in advocacy and home support.",
      "Community Learning Hubs: Local centres for tutoring, tech access, and workshops.",
    ],
  },
  {
    title: "5. Educator Support and Innovation",
    description:
      "We empower teachers with skills and tools for inclusive, culturally responsive teaching.",
    initiatives: [
      "Teacher Mentorship: Peer networks for early-career educators.",
      "Inclusive Pedagogy CPD: Professional development in trauma-informed teaching and differentiated instruction.",
    ],
  },
  {
    title: "6. Advocacy and Research",
    description:
      "Through storytelling, data, and partnerships, we elevate student voices and inform education policy.",
    initiatives: [
      "SHINE Media Lab: Youth storytelling platform.",
      "Impact Stories: Videos and case studies.",
      "Policy Briefs & Research: Reports rooted in lived experience.",
    ],
  },
];

export default Programmes;
