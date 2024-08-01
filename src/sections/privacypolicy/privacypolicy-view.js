import React from 'react';

import { Container, Typography } from '@mui/material';

const PrivacyPolicyView = () => (
  <Container>
    <Typography variant="h2" gutterBottom>
      Privacy Policy
    </Typography>
    <Typography variant="body1">
      <p>
        <strong>Privacy Policy</strong> <em>Last updated: 01/08/2024</em>
      </p>

      <p>
        <strong>Introduction</strong>
        Welcome to Stoky-GPT. We are committed to protecting your privacy. This Privacy Policy outlines how we handle information when you interact with our application, which is published in OpenAI GPTs. Please note that our application only provides an API and system prompts, and does not collect any personal information.
      </p>

      <p>
        <strong>1. Information We Collect</strong>
        We do not collect personal information. The only information we handle consists of the requests made to our API, which include:
        <ol>
          <li><strong>API Requests</strong>: Information included in the API requests, such as query content and parameters.</li>
        </ol>
      </p>

      <p>
        <strong>2. How We Use Your Information</strong>
        The information we handle is used solely for the following purposes:
        <ol>
          <li><strong>To Provide and Improve Our Service</strong>: To process and respond to API requests and enhance the performance and capabilities of our application.</li>
          <li><strong>For Security and Compliance</strong>: To ensure the security of our application and comply with legal obligations.</li>
        </ol>
      </p>

      <p>
        <strong>3. Sharing Your Information</strong>
        We do not sell, trade, or otherwise transfer your information to outside parties. However, we may share your information in the following circumstances:
        <ol>
          <li><strong>With Service Providers</strong>: We may share your information with trusted service providers who assist us in operating our application and providing our services.</li>
          <li><strong>For Legal Reasons</strong>: We may disclose your information if required by law or to protect the rights, property, or safety of our users and the public.</li>
        </ol>
      </p>

      <p>
        <strong>4. Data Security</strong>
        We implement a variety of security measures to maintain the safety of the information we handle. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
      </p>

      <p>
        <strong>5. Children's Privacy</strong>
        Our application is not intended for use by children under the age of 13. We do not knowingly handle information from children under 13. If we become aware that we have inadvertently received information from a child under 13, we will take steps to delete such information from our records.
      </p>

      <p>
        <strong>6. Changes to This Privacy Policy</strong>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our application after the effective date of the changes constitutes your acceptance of the revised Privacy Policy.
      </p>

      <p>
        <strong>7. Contact Us</strong>
        If you have any questions or concerns about this Privacy Policy, please contact us at <a href="https://www.linkedin.com/company/stokyai">LinkedIn</a>.
      </p>
    </Typography>
  </Container>
);

export default PrivacyPolicyView;
