import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Stoky",
  description: "Privacy Policy for Stoky AI",
};


const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="italic mb-6">Last updated: 01/08/2024</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p>
          Welcome to Stoky-GPT. We are committed to protecting your privacy. This Privacy Policy outlines how we handle information when you interact with our application, which is published in OpenAI GPTs. Please note that our application only provides an API and system prompts, and does not collect any personal information.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
        <p>
          We do not collect personal information. The only information we handle consists of the requests made to our API, which include:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li><strong>API Requests</strong>: Information included in the API requests, such as query content and parameters.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
        <p>The information we handle is used solely for the following purposes:</p>
        <ol className="list-decimal pl-6 mt-2">
          <li><strong>To Provide and Improve Our Service</strong>: To process and respond to API requests and enhance the performance and capabilities of our application.</li>
          <li><strong>For Security and Compliance</strong>: To ensure the security of our application and comply with legal obligations.</li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Sharing Your Information</h2>
        <p>
          We do not sell, trade, or otherwise transfer your information to outside parties. However, we may share your information in the following circumstances:
        </p>
        <ol className="list-decimal pl-6 mt-2">
          <li><strong>With Service Providers</strong>: We may share your information with trusted service providers who assist us in operating our application and providing our services.</li>
          <li><strong>For Legal Reasons</strong>: We may disclose your information if required by law or to protect the rights, property, or safety of our users and the public.</li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
        <p>
          We implement a variety of security measures to maintain the safety of the information we handle. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Children's Privacy</h2>
        <p>
          Our application is not intended for use by children under the age of 13. We do not knowingly handle information from children under 13. If we become aware that we have inadvertently received information from a child under 13, we will take steps to delete such information from our records.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our application after the effective date of the changes constitutes your acceptance of the revised Privacy Policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at <a href="https://www.linkedin.com/company/stokyai" className="text-blue-600 hover:underline">LinkedIn</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
