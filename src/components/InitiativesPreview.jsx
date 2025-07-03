import React from "react";
import { GraduationCap, Users, BookOpen } from "lucide-react";

const ImpactCards = () => {
  return (
    <section className="bg-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col items-center text-center">
            <GraduationCap className="text-yellow-500 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Scholarships</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Extending financial support to students across Africa - because
              talent should never be limited by income.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col items-center text-center">
            <Users className="text-yellow-500 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mentorship</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Guiding senior students and nurturing younger learners through
              academic and personal growth.
            </p>
          </div>

          {/* Card 3 (Centered on md) */}
          <div
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col items-center text-center
            sm:col-span-2 sm:mx-auto lg:col-span-1 lg:mx-0">
            <BookOpen className="text-yellow-500 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Educational Wellbeing
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Championing mental health, academic readiness, and holistic
              support so every learner can thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactCards;
