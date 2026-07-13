"use client";

import PageHeader from "@/components/ui/PageHeader";
import ProseLayout from "@/components/ui/ProseLayout";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-void pt-20">
      <PageHeader 
        eyebrow="Legal"
        title="Terms of Service" 
        subtitle="Last updated: July 7, 2026. Please read these terms and conditions carefully before using Our Service."
      />

      <ProseLayout>
        <h2>1. Acknowledgment</h2>
        <p>
          These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
        </p>
        <p>
          Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
        </p>

        <h2>2. Intellectual Property</h2>
        <p>
          The Service and its original content (excluding Content provided by You or other users), features and functionality are and will remain the exclusive property of the Company and its licensors.
        </p>
        <p>
          The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the Company.
        </p>

        <h2>3. Links to Other Websites</h2>
        <p>
          Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
        </p>
        <p>
          The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
        </p>
        <p>
          We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
        </p>

        <h2>4. Termination</h2>
        <p>
          We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
        </p>
        <p>
          Upon termination, Your right to use the Service will cease immediately.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven&apos;t purchased anything through the Service.
        </p>
        <p>
          To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
        </p>

        <hr />
        
        <p>
          If you have any questions about these Terms and Conditions, You can contact us:
        </p>
        <ul>
          <li>By email: <strong>legal@mechlink.africa</strong></li>
          <li>By visiting this page on our website: <a href="https://mechlink.africa/#contact">mechlink.africa/#contact</a></li>
        </ul>
      </ProseLayout>
    </main>
  );
}
