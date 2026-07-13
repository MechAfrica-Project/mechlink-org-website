"use client";

import PageHeader from "@/components/ui/PageHeader";
import ProseLayout from "@/components/ui/ProseLayout";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-void pt-20">
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated: July 7, 2026. This Privacy Policy describes how your personal information is collected, used, and shared when you visit mechlink.africa."
      />

      <ProseLayout>
        <h2>1. Information We Collect</h2>
        <p>
          When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
        </p>
        <p>
          Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site.
        </p>
        
        <h3>Personal Information</h3>
        <p>
          When you attempt to contact us through the Site via our inquiry forms, we collect certain information from you, including your name, email address, phone number, and project details. We refer to this information as &quot;Contact Information&quot;.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use the Contact Information that we collect generally to fulfill any inquiries placed through the Site. Additionally, we use this Contact Information to:
        </p>
        <ul>
          <li>Communicate with you regarding your project requirements;</li>
          <li>Screen our interactions for potential risk or fraud; and</li>
          <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
        </ul>

        <h2>3. Sharing Your Personal Information</h2>
        <p>
          We share your Personal Information with third-party service providers only as needed to operate the Site and respond to your inquiries — for example, our email delivery provider.
        </p>
        <p>
          We may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
        </p>

        <h2>4. Data Retention</h2>
        <p>
          When you submit inquiries through the Site, we will maintain your Contact Information for our records unless and until you ask us to delete this information.
        </p>

        <h2>5. Changes</h2>
        <p>
          We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
        </p>

        <hr />
        
        <p>
          If you have questions and/or require more information, do not hesitate to contact us at <strong>privacy@mechlink.africa</strong>.
        </p>
      </ProseLayout>
    </main>
  );
}
