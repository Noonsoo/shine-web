import React from "react";
import { Heart, Users, HelpingHand, Calendar, Globe, Mic } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const GetInvolved = () => {
  return (
    <section
      style={{ backgroundColor: "#fefdfb", color: "#2c2c2c" }}
      className="px-4 md:px-12 py-16 font-sans">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* Page Intro */}
        <div className="text-center space-y-4 mt-8">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#3d302b]">
            Get Involved
          </h1>
          <p className="text-[#5c4b45] text-base md:text-lg max-w-2xl mx-auto">
            Join SHINE’s mission to build nurturing, inclusive learning
            environments. Whether you donate, partner, or volunteer your impact
            matters.
          </p>
        </div>

        {/* 3 Ways to Help */}
        <div className="grid md:grid-cols-3 gap-8">
          <InvolveCard
            icon={<HelpingHand className="text-[#6c4c3f] w-6 h-6" />}
            title="Volunteer"
            desc="Share your skills or time with students and projects."
            link="#volunteer"
            target="_blank"
            linkText="Ways to Help"
          />
          <InvolveCard
            icon={<Heart className="text-[#8b3a2c] w-6 h-6" />}
            title="Donate"
            desc="Support learners with school kits, mentorship, or meals."
            link="/donate"
            linkText="Donate Now"
          />
          <InvolveCard
            icon={<Users className="text-[#3e6259] w-6 h-6" />}
            title="Partner"
            desc="Collaborate on community or national education projects."
            link="https://forms.gle/6uormhYEGUUdsADW9"
            linkText="Partner with Us"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>

        {/* Volunteer Section */}
        <div id="volunteer" className="space-y-10">
          <h2 className="text-2xl font-semibold text-[#3d302b] text-center">
            Volunteer With SHINE
          </h2>
          <p className="text-center text-[#5c4b45] max-w-2xl mx-auto">
            From tutoring kids in Lagos to designing media remotely, there’s a
            place for everyone. SHINE volunteers bring knowledge, creativity,
            and community spirit.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <MiniCard
              icon={<Calendar className="w-5 h-5 text-[#6c4c3f]" />}
              title="Mentor or Tutor"
              desc="Support students with academics or life guidance."
            />
            <MiniCard
              icon={<Globe className="w-5 h-5 text-[#3e6259]" />}
              title="Remote Support"
              desc="Join us from anywhere help with tech, writing, or research."
            />
            <MiniCard
              icon={<Mic className="w-5 h-5 text-[#8b3a2c]" />}
              title="Media & Storytelling"
              desc="Capture learner stories through writing, film, or design."
            />
          </div>

          <div className="text-center">
            <a
              href="https://forms.gle/LvBZjpQdfWkPgwGu8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 rounded-full bg-[#3e6259] text-white text-sm font-medium hover:bg-[#2e5049] transition">
              Join Our Volunteer Network
            </a>
          </div>
        </div>

        {/* Final Note */}
        <div className="text-center space-y-2">
          <p className="text-[#5c4b45] text-sm">
            Your time, voice, and skills can change a student’s story.
          </p>
          <p className="text-xs text-[#a59e99] italic">
            Together, we shine brighter.
          </p>
        </div>
      </div>
    </section>
  );
};

// Reusable Card Components
const InvolveCard = ({ icon, title, desc, link, linkText, target, rel }) => {
  const isAnchor = link.startsWith("#");

  return (
    <div className="bg-white border border-[#eee] rounded-xl p-6 space-y-4 hover:shadow-sm transition">
      {icon}
      <h3 className="text-lg font-medium text-[#3d302b]">{title}</h3>
      <p className="text-sm text-[#5c4b45]">{desc}</p>
      {isAnchor ? (
        <ScrollLink
          to={link.replace("#", "")}
          smooth={true}
          duration={600}
          offset={-70}
          className="text-[#6c4c3f] text-sm font-medium underline cursor-pointer">
          {linkText}
        </ScrollLink>
      ) : (
        <a
          href={link}
          target={target}
          rel={rel}
          className="text-[#6c4c3f] text-sm font-medium underline">
          {linkText}
        </a>
      )}
    </div>
  );
};

const MiniCard = ({ icon, title, desc }) => (
  <div className="bg-white rounded-xl border border-[#eee] p-5 space-y-3 hover:shadow-sm transition">
    {icon}
    <h4 className="text-sm font-semibold text-[#3d302b]">{title}</h4>
    <p className="text-sm text-[#5c4b45]">{desc}</p>
  </div>
);

export default GetInvolved;
