const WhoWeServe = () => {
  return (
    <section className="bg-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-oxford">Who We Serve</h2>
        <p className="text-gray-700 mb-10 leading-relaxed">
          At <span className="font-semibold">SHINE Foundation</span>, we believe
          that every student deserves a nurturing and inclusive educational
          journey— regardless of their age, background, or academic stage. Our
          programs are intentionally designed to support learners across the
          full educational spectrum.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Primary School */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Primary School Pupils
            </h3>
            <p className="text-gray-600">
              We assist young learners navigating foundational literacy,
              numeracy, and multilingual challenges especially those who
              struggle in English-only instruction settings.
            </p>
          </div>

          {/* Secondary School */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Secondary School Students
            </h3>
            <p className="text-gray-600">
              We prepare students for national examinations and support them as
              they transition into adulthood, leadership, and critical thinking
              roles.
            </p>
          </div>

          {/* University Students */}
          <div>
            <h3 className="text-xl font-semibold mb-2">University Students</h3>
            <p className="text-gray-600">
              We walk with undergraduates as they juggle academic demands,
              financial pressures, and future uncertainties offering them
              mentorship, safe spaces, and community.
            </p>
          </div>

          {/* Inclusive Support */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Marginalized Learners
            </h3>
            <p className="text-gray-600">
              We are especially committed to students from under-resourced
              schools, multilingual environments, and communities often left
              behind. SHINE stands with them—because education is not a
              privilege for a few, but a right for all.
            </p>
          </div>
        </div>

        <p className="text-gray-700 mt-12 text-lg text-center max-w-4xl mx-auto leading-relaxed">
          Whether a child in Primary Four struggling to understand English-only
          lessons or a university undergraduate seeking access to learning
          tools, SHINE Foundation provides support, tools, and mentorship every
          step of the way.
        </p>
      </div>
    </section>
  );
};

export default WhoWeServe;
