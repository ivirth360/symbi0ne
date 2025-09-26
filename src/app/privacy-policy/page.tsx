
import { LegalPageLayout } from '@/components/legal-page-layout';

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <p>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <h2>Introduction</h2>
      <p>
        Welcome to SYMBI0N (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We are committed to protecting your privacy and handling your data in an open and transparent manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services, including HELIX, SYMBI, and the broader SYMBI0N ecosystem.
      </p>
      <p>
        By using our services, you agree to the collection and use of information in accordance with this policy.
      </p>

      <h2>Information We Collect</h2>
      <p>We may collect information about you in a variety of ways. The information we may collect on the Service includes:</p>
      
      <h3>Personal Data</h3>
      <p>
        Personally identifiable information, such as your name, email address, and demographic information, that you voluntarily give to us when you register for a membership or when you choose to participate in various activities related to the Service.
      </p>

      <h3>Derivative Data</h3>
      <p>
        Information our servers automatically collect when you access the Service, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Service.
      </p>

      <h3>HELIX and SYMBI Data</h3>
      <p>
        To provide personalized experiences, we collect and process data you provide for your HELIX identity and your interactions with your SYMBI companion. This may include personal routines, brand information, and other data points you choose to share for symbolic analysis and digital twin creation. This data is handled with the utmost security and is core to providing our services.
      </p>

      <h2>How We Use Your Information</h2>
      <p>
        Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Service to:
      </p>
      <ul>
        <li>Create and manage your account and HELIX identity.</li>
        <li>Provide personalized insights and guidance through your SYMBI companion.</li>
        <li>Perform symbolic analysis and generate digital assets.</li>
        <li>Email you regarding your account or order.</li>
        <li>Monitor and analyze usage and trends to improve your experience with the Service.</li>
        <li>Notify you of updates to the Service.</li>
      </ul>

      <h2>Disclosure of Your Information</h2>
      <p>We do not share your personal information with third parties except as described in this Privacy Policy. We may share information we have collected about you in certain situations:</p>
      <ul>
        <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
        - <strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors or agents who perform services for us or on our behalf.
        - <strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
      </ul>

      <h2>Security of Your Information</h2>
      <p>
        We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:support@ivirth.com">support@ivirth.com</a> or <a href="mailto:hello@ivirth.com">hello@ivirth.com</a>.
      </p>
    </LegalPageLayout>
  );
}
