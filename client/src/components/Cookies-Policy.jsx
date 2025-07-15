import React from 'react';

const CookiesPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Cookies Policy</h1>

      <div className="space-y-6 text-base sm:text-lg leading-relaxed">
        <p>
          This Cookie Policy explains how <strong>[Your Company Name]</strong> ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website or use our services at <strong>[www.yourdomain.com]</strong> (the "Site"). It explains what these technologies are, why we use them, and your rights to control our use of them.
        </p>
        <p>By continuing to use our Services, you agree to the use of cookies as outlined in this policy.</p>

        <div>
          <h2 className="font-semibold text-xl mb-2">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners. Cookies allow us to recognize your device and store certain information about your preferences or past actions.
          </p>
          <p>We also use similar tracking technologies such as pixels, beacons, and local storage. In this policy, we refer to all of these technologies as "cookies."</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">2. Why We Use Cookies</h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> Necessary for the operation of our website, including login authentication and session management.
            </li>
            <li>
              <strong>Performance and Analytics Cookies:</strong> Help us understand how users interact with our site using tools like Google Analytics to improve functionality and experience.
            </li>
            <li>
              <strong>Functionality Cookies:</strong> Remember choices like language preferences to personalize your experience.
            </li>
            <li>
              <strong>Advertising and Targeting Cookies:</strong> Deliver relevant ads based on your browsing behavior, often placed by advertising partners.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">3. Cookies We Use</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm sm:text-base">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 text-left">Cookie Name</th>
                  <th className="border px-4 py-2 text-left">Type</th>
                  <th className="border px-4 py-2 text-left">Purpose</th>
                  <th className="border px-4 py-2 text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">session_id</td>
                  <td className="border px-4 py-2">Essential</td>
                  <td className="border px-4 py-2">Maintains your login session</td>
                  <td className="border px-4 py-2">Session-only</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">_ga</td>
                  <td className="border px-4 py-2">Analytics (Google)</td>
                  <td className="border px-4 py-2">Tracks user behavior on the site</td>
                  <td className="border px-4 py-2">2 years</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">_gid</td>
                  <td className="border px-4 py-2">Analytics (Google)</td>
                  <td className="border px-4 py-2">Differentiates users</td>
                  <td className="border px-4 py-2">24 hours</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">cookie_consent</td>
                  <td className="border px-4 py-2">Functional</td>
                  <td className="border px-4 py-2">Saves your cookie preferences</td>
                  <td className="border px-4 py-2">1 year</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2">We may update this list from time to time as our platform evolves.</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">4. How to Control Cookies</h2>
          <p>You have the right to decide whether to accept or reject cookies.</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>Browser Settings:</strong> You can disable cookies via your browser settings. Refer to your browser’s help section for instructions (e.g., Google Chrome, Mozilla Firefox, Safari, Microsoft Edge).
            </li>
            <li>
              <strong>Cookie Consent Banner:</strong> When you first visit our site, a banner will ask for consent. You can update preferences anytime via the footer link.
            </li>
            <li>
              <strong>Opt-Out of Analytics:</strong> Disable Google Analytics tracking via the browser add-on:{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Opt-out
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">5. Third-Party Cookies</h2>
          <p>
            Some cookies are placed by third-party services like video platforms, chat tools, or payment gateways. We don’t control these cookies directly. Please review their respective cookie and privacy policies.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">6. Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy occasionally due to legal, technical, or business changes. We'll revise the “Effective Date” at the top of this page. For material changes, we may notify you by email or in-app messages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
