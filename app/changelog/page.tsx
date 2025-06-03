import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ChangelogPage() {
  const changelogs = [
    {
      version: "v0.1.5",
      date: "2025-06-01",
      changes: [
        "Redesigned login page with modern HeroUI components.",
        "Improved form validation and error feedback.",
        "Added password visibility toggle.",
        "Enhanced dark mode styling for the login screen.",
        "Fixed alignment issues on small devices.",
      ],
    },
    {
      version: "v0.1.4",
      date: "2025-05-28",
      changes: [
        "Complete front page redesign using HeroUI landing layout.",
        "Added testimonials and feature highlight sections.",
        "Implemented responsive navigation menu.",
        "Improved SEO meta tags and open graph data.",
        "Set up lazy loading for hero images.",
      ],
    },
    {
      version: "v0.1.3",
      date: "2025-05-20",
      changes: [
        "Integrated HeroUI base components across the app (Card, Button, Tabs).",
        "Refactored global styles with Tailwind plugin cleanup.",
        "Added utility-first spacing and layout consistency.",
        "Set up `@/components` folder structure for reusability.",
        "Introduced `clsx` for conditional className handling.",
      ],
    },
    {
      version: "v0.1.2",
      date: "2025-05-15",
      changes: [
        "Built functional login page with Supabase email/password auth.",
        "Handled auth state using `@supabase/auth-helpers`.",
        "Redirects now work properly after login/logout.",
        "Created basic loading and error UI states.",
        "Added user session persistence across page refreshes.",
      ],
    },
    {
      version: "v0.1.1",
      date: "2025-05-10",
      changes: [
        "Developed dashboard layout with sidebar and top navigation.",
        "Created dummy pages: Assets, Users, Reports, Settings.",
        "Added route protection for auth-only pages.",
        "Implemented Tailwind UI sidebar navigation.",
        "Fixed layout breaking on smaller breakpoints.",
      ],
    },
    {
      version: "v0.1.0",
      date: "2025-05-07",
      changes: [
        "Initialized project using Next.js 14 App Router.",
        "Set up Tailwind CSS with custom config.",
        "Connected Supabase project for auth and data.",
        "Configured environment variables securely.",
        "Created basic folder structure: app, components, lib.",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container-max">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold mb-6">🛠️ Changelog</h1>
          <p className="mb-8 text-gray-500">Track updates and changes to AZRA.</p>

          <div className="space-y-8">
            {changelogs.map((log) => (
              <div key={log.version} className="border-l-4 border-blue-500 pl-4">
                <h2 className="text-xl font-semibold text-blue-600">
                  {log.version}{" "}
                  <span className="text-sm text-gray-400">– {log.date}</span>
                </h2>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {log.changes.map((change, idx) => (
                    <li key={idx}>{change}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
