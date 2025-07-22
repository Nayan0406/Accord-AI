import React from 'react';

const TermsAndUse = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-300 to-blue-50 py-12 px-4 sm:px-6 md:px-8 flex items-start justify-center">
      <div className="w-full max-w-4xl text-gray-800 space-y-6">
        <h1 className="text-3xl font-bold text-center mb-8">Terms and Use</h1>

        <p>
          We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect,
          use, disclose, and protect your information when you use Accord AI (the “Platform” or “Services”).
        </p>
        <p>
          By accessing or using our Services, you agree to the practices described in this Privacy Policy. If you do not agree with
          our practices, please do not use the Services.
        </p>

        <h2 className="text-xl font-semibold">1. Welcome</h2>
        <p>
          Thank you for using Accord AI! These Terms of Use (“Terms”) apply to your use of Accord AI and all related applications,
          features, APIs, and services offered by Accord (“we,” “us,” “our”), including all associated websites and mobile apps
          (collectively, the “Services”).
        </p>
        <p>
          By accessing or using the Services, you agree to be bound by these Terms and our Privacy Policy, Refund Policy, and any
          other applicable documentation. If you do not agree with these Terms, you may not use our Services.
        </p>

        <h2 className="text-xl font-semibold">2. Who Can Use Our Services</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>You must be at least 13 years old (or the minimum age required by your country).</li>
          <li>If you are under 18, you must have permission from a parent or legal guardian.</li>
          <li>If using on behalf of an organization, you must have authority to accept these Terms.</li>
        </ul>

        <h2 className="text-xl font-semibold">3. Registration and Accounts</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>You must provide accurate information when creating an account.</li>
          <li>You are responsible for keeping your credentials secure.</li>
          <li>You may not share your account or use another person’s account without permission.</li>
          <li>Company domain registration may be subject to organization control.</li>
        </ul>

        <h2 className="text-xl font-semibold">4. Acceptable Use Policy</h2>
        <p>You agree not to use our Services to:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Break the law or violate the rights of others.</li>
          <li>Distribute spam or malicious content.</li>
          <li>Reverse engineer, scrape, or reproduce our models, code, or architecture.</li>
          <li>Use output to impersonate others or spread misinformation.</li>
          <li>Create or train competing AI systems using our content or platform.</li>
        </ul>
        <p>We reserve the right to suspend or terminate your access if you violate these rules.</p>

        <h2 className="text-xl font-semibold">5. AI Content Disclaimer</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Output may be inaccurate, incomplete, or misleading.</li>
          <li>Output is non-unique (other users may get similar results).</li>
          <li>You must verify all Output before use.</li>
          <li>Do not rely on Output for legal, health, or financial decisions.</li>
        </ul>

        <h2 className="text-xl font-semibold">6. Intellectual Property</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>You own your Input and Output (as permitted by law).</li>
          <li>We may use your Input/Output to improve our Services (unless you opt out).</li>
          <li>All technology, software, and design are owned by Accord AI and protected by law.</li>
        </ul>

        <h2 className="text-xl font-semibold">7. Subscriptions, Billing & Payments</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Certain features may require a paid subscription.</li>
          <li>Recurring billing will apply to subscriptions.</li>
          <li>You’re responsible for taxes and payment method validity.</li>
          <li>Failed payments may lead to suspended access.</li>
        </ul>

        <h2 className="text-xl font-semibold">8. Refund Policy</h2>
        <h3 className="font-medium">8.1 When Refunds Are Offered</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Unauthorized or incorrect charges.</li>
          <li>Double charges or system failure to deliver access.</li>
        </ul>
        <h3 className="font-medium">8.2 How to Request a Refund</h3>
        <p>Email <strong>[support@yourdomain.com]</strong> within 7 days with:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Full name, email, date, amount, payment ID</li>
          <li>A brief explanation</li>
        </ul>
        <p>We’ll respond within 5 business days.</p>

        <h3 className="font-medium">8.3 No Refunds For</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Change of mind or voluntary cancellation.</li>
          <li>Partial use or unused credits.</li>
        </ul>
        <p>Consumer rights still apply under your jurisdiction.</p>

        <h2 className="text-xl font-semibold">9. Cancellation & Termination</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Cancel anytime via dashboard.</li>
          <li>Access remains until billing cycle ends.</li>
          <li>We may suspend accounts for violations or non-payment.</li>
          <li>Inactive accounts may be closed after 12 months (with notice).</li>
        </ul>

        <h2 className="text-xl font-semibold">10. Third-Party Services</h2>
        <p>We may use third-party APIs or tools. Their use is subject to their own terms.</p>

        <h2 className="text-xl font-semibold">11. Disclaimer of Warranties</h2>
        <p>Services are provided “as is.” We don’t guarantee accuracy, uptime, or security.</p>

        <h2 className="text-xl font-semibold">12. Limitation of Liability</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>No liability for indirect damages or data loss.</li>
          <li>Use AI Output at your own risk.</li>
        </ul>

        <h2 className="text-xl font-semibold">13. Indemnification</h2>
        <p>
          Businesses or organizations agree to defend and indemnify us against claims arising from misuse of the Services.
        </p>

        <h2 className="text-xl font-semibold">14. Governing Law & Jurisdiction</h2>
        <p>
          These Terms are governed by the laws of [Insert Country/State]. Any disputes will be resolved in [Insert Legal
          Jurisdiction].
        </p>

        <h2 className="text-xl font-semibold">15. Changes to These Terms</h2>
        <p>
          We may update these Terms occasionally. Material changes will be notified at least 30 days in advance. Continued use means
          acceptance.
        </p>
      </div>
    </section>
  );
};

export default TermsAndUse;
