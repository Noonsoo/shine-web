import { useNavigate } from "react-router";
import HeroImg from "../assets/hero.jpg";

export default function HeroSection() {
  let navigate = useNavigate();
  return (
    <section className="relative bg-gradient-to-r from-oxford to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Transforming
            <br />
            Lives Through
            <br />
            Accessible
            <br />
            Education
          </h1>
          <p className="text-lg text-slate-200 mb-8">
            SHINE Foundation works to ensure that every learner from - primary
            school to university - has the opportunity, tools, and support to
            thrive.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/donate")}
              className="bg-yellow-400 text-black font-semibold px-5 py-2 rounded hover:bg-yellow-300 transition">
              Donate
            </button>

            <button
              onClick={() => navigate("/get-involved")}
              className="hidden md:flex border border-white px-5 py-2 rounded hover:bg-white hover:text-black transition">
              Volunteer
            </button>

            <button
              onClick={() => navigate("/about")}
              className="border border-slate-400 px-5 py-2 rounded hover:bg-slate-200 hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={HeroImg}
            alt="Smiling student in classroom"
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
