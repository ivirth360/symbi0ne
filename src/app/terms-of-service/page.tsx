
import { LegalPageLayout } from '@/components/legal-page-layout';

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout title="Terms of Service">
      <p>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <h2>1. Agreement to Terms</h2>
      <p>
        By accessing or using our services, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not access or use our services.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        SYMBI0N provides a symbolic intelligence ecosystem, including but not limited to the creation and management of HELIX digital identities, interaction with the SYMBI AI companion, and participation in the Symbolic Asset Marketplace.
      </p>

      <h2>3. User Accounts</h2>
      <p>
        To access certain features, you must create an account. You are responsible for safeguarding your account and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
      </p>

      <h2>4. User Content</h2>
      <p>
        You retain ownership of all content and data you submit to the service, including information used to create your HELIX identity (&quot;User Content&quot;). By providing User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content solely for the purpose of operating and providing the service to you.
      </p>

      <h2>5. Prohibited Activities</h2>
      <p>You agree not to engage in any of the following prohibited activities:</p>
      <ul>
        <li>Using the service for any illegal purpose or in violation of any local, state, national, or international law.</li>
        <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the service.</li>
        <li>Submitting false or misleading information.</li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <p>
        Other than your User Content, the service and its original content, features, and functionality are and will remain the exclusive property of SYMBI0N (iViRTH) and its licensors.
      </p>

      <h2>7. Termination</h2>
      <p>
        We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        In no event shall SYMBI0N, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
      </p>
      
      <h2>9. Governing Law</h2>
      <p>
        These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at <a href="mailto:hello@ivirth.com">hello@ivirth.com</a>.
      </p>
    </LegalPageLayout>
  );
}
