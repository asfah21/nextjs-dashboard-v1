import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="container-max">
        <section className="px-6 md:px-20 my-8 md:my-20">
          <section className=" mb-8">
            <h1 className="text-3xl font-bold mb-2">About Us</h1>
            <p className="text-gray-600 max-w-prose">
              Welcome to AZRA. We're building an AI-powered dashboard with
              Next.js, Supabase, and modern UI components to streamline your
              workflow.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
              <p className="text-gray-600">
                To empower developers with fast, accessible, and elegant tools
                that make building modern apps effortless.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Our Stack</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Next.js App Router</li>
                <li>Tailwind CSS</li>
                <li>Supabase</li>
                <li>HeroUI + Headless UI</li>
              </ul>
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
}
