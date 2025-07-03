import React from "react";

const testimonials = [
  {
    name: "Nwankwo Chineedu Jeremiah",
    message: `I want to take a moment to express my sincere gratitude for the incredible work you do in empowering students and the positive impact you've made. Your dedication to creating meaningful change is truly inspiring.`,
  },
  {
    name: "Popoola Mary",
    message: `I am a beneficiary of SHINE Foundation Exam Relief Fund. This support means so much to me, and it will go a long way in easing my financial burden during my exams. Your generosity is truly a blessing.`,
  },
  {
    name: "Ojeowele Jelili Oluwaseun",
    message: `I received a sum of Fifty Thousand Naira from SHINE FOUNDATION. This support will ease our examination and allow us to focus. Thank you so much.`,
  },
  {
    name: "Rafiu Aishat",
    message: `With the matric no 190101003, I received the sum of 50,000 from SHINE FOUNDATION. May Almighty God continue to bless the foundation.`,
  },
  {
    name: "Adeseyoiu Praise Toyosi",
    message: `I appreciate your generous relief fund for students. Your support has eased financial burdens and encouraged us in our academic journey.`,
  },
  {
    name: "Sukurat Adejumo",
    message: `I received the sum of 50,000 Naira. May Almighty Allah continue to bless and uplift the Foundation.`,
  },
  {
    name: "Sobowale Janet Omolara",
    message: `I’m honoured to be one of the beneficiaries. Your support is a huge relief and a significant boost to my morale. Thank you for investing in my future.`,
  },
];

const ImpactPage = () => {
  return (
    <section className="pt-28 pb-16 px-6 md:px-16 lg:px-24 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold">Our Impact</h1>
          <p className="text-base md:text-lg text-gray-600 mt-4">
            Measurable change. Tangible results. Here's how your support has
            helped students and families across Africa.
          </p>
        </header>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-2">
            <h3 className="text-xl font-medium">📚 School Empowerment</h3>
            <p>
              We equipped <strong>5 public schools in Lagos</strong> with
              essential books and stationery.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-medium">🎒 Student Support</h3>
            <p>
              Over <strong>50 students</strong> received school uniforms, bags,
              and shoes.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-medium">🏠 Family Stability</h3>
            <p>
              We assisted <strong>10 vulnerable families</strong> with housing
              support.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-medium">🎓 Access to Education</h3>
            <p>
              University fees paid for <strong>8 students</strong>, exam support
              for <strong>15</strong> more.
            </p>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="mt-20">
          <h2 className="text-3xl font-semibold text-center mb-4">
            🌟 Stories that Shine
          </h2>
          <p className="text-center ml-6 italic text-gray-600 mb-8">
            Real words. Real people. Real change.
          </p>

          <div className="overflow-hidden relative w-full">
            <div
              className="flex space-x-6 animate-scroll-x"
              style={{
                width: `${testimonials.length * 340 * 2}px`,
              }}>
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="min-w-[300px] max-w-sm bg-gray-100 border border-gray-300 p-6 rounded-md shadow hover:shadow-lg transition">
                  <p className="text-gray-700 italic text-sm">"{t.message}"</p>
                  <p className="mt-4 text-sm font-semibold text-right text-gray-800">
                    — {t.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16 border-t pt-10">
          <p className="text-base md:text-lg text-gray-700">
            These numbers are just the beginning. With your continued support,
            we can expand our reach and deepen our impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactPage;
