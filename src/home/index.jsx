import Header from '@/components/custom/Header'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Header */}
      <div>
        <Header />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-100 via-purple-50 to-purple-200 min-h-screen px-32 flex items-center justify-between">
        {/* Text Content */}
        <div className="max-w-lg">
          <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
            If You Want To Get <br />
            <span className="text-purple-600">Gaining, Get A Resume</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Resumegen is a tool that often constitutes an automated process in
            which you follow a template and input your information. Ability to
            build, print, and download your resume for free in minutes.
          </p>

          <Link to={"/dashboard"}>
            <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700">
              Build Resume
            </button>
          </Link>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://resumegenx.netlify.app/static/media/hero.4246c7b31fe09afda1e2624a9fbc59f8.svg"
            alt="Resume Illustration"
            className="w-[400px]"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-200 text-white py-4">
        <div className="text-center flex gap-3 items-center justify-center text-black">
          <p>&copy; 2025 Resumegen.       All rights reserved.</p>
          <p >Created with passion to help you build the best resume.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
