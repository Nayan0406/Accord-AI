import React from 'react';

const TermsAndCondition = () => {
  return (
    <div className='bg-gradient-to-br from-blue-300 to-blue-50'>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>

      <div className="space-y-6 text-base sm:text-lg leading-relaxed">
        <div>
          <h2 className="font-semibold text-xl mb-2">1. Who Can Use the Services</h2>
          <p>You may use Accord AI if you are at least 13 years old (or older, depending on your country). If you are under 18, you must have permission from a parent or legal guardian. If you use the Services on behalf of an organization, you confirm that you have authority to bind that organization to these Terms.</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">2. Your Account</h2>
          <p>You may need to register and create an account to use certain features. You agree to provide accurate and complete information and to keep your login credentials secure. You are responsible for all activities that occur under your account. You must not share your account with others or impersonate another person or entity.</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">3. Your Content</h2>
          <p>You may submit input (“Input”) and receive generated content (“Output”) from Accord AI. Together, Input and Output are referred to as “Content.”</p>
          <p>You retain ownership of your Input and, to the extent permitted by law, also own the Output we generate for you. We assign to you any rights we may have in that Output. However, due to the nature of AI, the same or similar Output may be provided to other users.</p>
          <p className="mt-2 font-medium">Use of Content for AI Training:</p>
          <p>We may use your Input and Output to improve, train, and fine-tune our AI models unless you opt out. Please see our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> for full details.</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">4. Acceptable Use</h2>
          <p>You agree not to misuse the Services. You may not:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Use the Services for illegal, harmful, or deceptive purposes</li>
            <li>Reverse-engineer, scrape, or exploit the platform or its models</li>
            <li>Generate or distribute false, misleading, offensive, or harmful content</li>
            <li>Use Output to develop competing AI products or services</li>
            <li>Violate the rights of others, including privacy, intellectual property, or data protection rights</li>
          </ul>
          <p>We reserve the right to suspend or terminate your access if we believe you have violated these Terms.</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">5. AI Disclaimer</h2>
          <p>Accord AI is a generative AI system that produces content based on your Input. The Output may contain errors, omissions, or biases.</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Output is not guaranteed to be accurate or complete</li>
            <li>Do not rely on AI-generated content as a sole source for decisions in legal, medical, financial, or safety-critical matters</li>
            <li>We are not liable for damages caused by reliance on Output</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">6. Subscriptions & Payments</h2>
          <p>Certain features of Accord AI require a paid subscription or usage-based credits. By subscribing, you agree to pay all applicable fees and taxes. Payments are processed securely via third-party providers such as Cashfree or Stripe.</p>
          <p>Subscriptions may renew automatically at the end of each billing cycle unless you cancel in advance.</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">7. Refund Policy</h2>
          <p>Payments are generally non-refundable. However, we may issue refunds in certain cases, including:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>You were charged in error</li>
            <li>You did not receive access to the service you paid for</li>
            <li>Duplicate or unauthorized charges occurred</li>
          </ul>
          <p>To request a refund, contact us at <a href="mailto:support@[yourdomain.com]" className="text-blue-600 hover:underline">support@[yourdomain.com]</a> within 7 days of the charge. Refund decisions are at our sole discretion. For full details, see our <a href="/refund-policy" className="text-blue-600 hover:underline">Refund Policy</a>.</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">8. Cancellation & Termination</h2>
          <p>You may cancel your subscription at any time via your account dashboard. Your access will continue until the end of the current billing cycle. No partial refunds are issued for unused time.</p>
          <p>We may suspend or terminate your access if you violate these Terms, if required by law, or if your account remains inactive for over 12 months (for free accounts).</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">9. Intellectual Property</h2>
          <p>All rights, title, and interest in the platform, including models, APIs, code, interfaces, branding, and other proprietary content, belong to [Your Company Name] or its licensors. You may not copy, modify, distribute, or exploit any part of the Service without permission.</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">10. Third-Party Services</h2>
          <p>Our platform may integrate with third-party services or tools. We are not responsible for their content, functionality, or privacy practices. You use them at your own risk and subject to their terms.</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">11. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, we will not be liable for any indirect, incidental, or consequential damages, including loss of profits, data, or business. Our total liability for any claim will not exceed the amount you paid us in the 12 months before the claim arose, or USD $100, whichever is greater.</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">12. Disclaimer of Warranties</h2>
          <p>The Services are provided “as is” without warranties of any kind. We disclaim all implied warranties including merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that the Services will be error-free or uninterrupted.</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">13. Indemnification</h2>
          <p>If you are using the Services as a business, you agree to indemnify and hold harmless [Your Company Name] and its affiliates against any claims, losses, or damages arising from your use of the Services or violation of these Terms.</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">14. Governing Law</h2>
          <p>These Terms are governed by the laws of [Insert Country/State]. Any disputes shall be resolved in the courts of [Insert Jurisdiction], unless otherwise required by law.</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">15. Changes to These Terms</h2>
          <p>We may modify these Terms from time to time to reflect updates to our Services, legal changes, or technical adjustments. If we make material changes, we will notify you in advance by email or in-app notification. Continued use of the Services after changes means you accept the updated Terms.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TermsAndCondition;
