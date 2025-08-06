import React from 'react'


export default function PrivacyPolicy(): React.ReactElement {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <div className="space-y-6 text-gray-700">
        <section>
          <p className="text-sm text-gray-500 mb-4">
            Last updated:
            {' '}
            August 5, 2025
          </p>
          <p className="mb-4">
            Void Works ('we', 'our', or 'us') operates the GBx mobile application (the 'Service').
            This page informs you of our policies regarding the collection, use, and disclosure of
            personal data when you use our Service and the choices you have associated with that data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>

          <h3 className="text-xl font-medium mb-2">Personal Information</h3>
          <p className="mb-4">
            While using our Service, we may ask you to provide us with certain personally
            identifiable information that can be used to contact or identify you. This may include:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Email address</li>
            <li>Name</li>
            <li>Usage data</li>
          </ul>

          <h3 className="text-xl font-medium mb-2">Usage Data</h3>
          <p className="mb-4">
            We may collect information about how the Service is accessed and used. This usage data
            may include information such as your device's Internet Protocol address, device type,
            operating system version, the pages of our Service that you visit, the time and date
            of your visit, the time spent on those pages, and other diagnostic data.
          </p>

          <h3 className="text-xl font-medium mb-2">Device Information</h3>
          <p className="mb-4">
            We may collect certain information automatically, including, but not limited to,
            the type of device you use, your device's unique device ID, the IP address of
            your device, your operating system, and information about your use of the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="mb-2">Void Works uses the collected data for various purposes:</p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features when you choose to do so</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information to improve our Service</li>
            <li>To monitor the usage of our Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Information Sharing and Disclosure</h2>
          <p className="mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties
            without your consent, except as described in this Privacy Policy.
          </p>

          <h3 className="text-xl font-medium mb-2">Service Providers</h3>
          <p className="mb-4">
            We may employ third-party companies and individuals to facilitate our Service,
            provide the Service on our behalf, perform Service-related services, or assist
            us in analyzing how our Service is used. These third parties have access to your
            personal data only to perform these tasks on our behalf and are obligated not to
            disclose or use it for any other purpose.
          </p>

          <h3 className="text-xl font-medium mb-2">Legal Requirements</h3>
          <p className="mb-4">
            Void Works may disclose your personal data if required to do so by law or in
            response to valid requests by public authorities.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="mb-4">
            The security of your data is important to us, but remember that no method of
            transmission over the Internet or method of electronic storage is 100% secure.
            While we strive to use commercially acceptable means to protect your personal data,
            we cannot guarantee its absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Your Privacy Rights</h2>
          <p className="mb-2">You have the right to:</p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Access and receive a copy of your personal data</li>
            <li>Rectify any personal data that is inaccurate or incomplete</li>
            <li>Delete your personal data</li>
            <li>Object to or restrict the processing of your personal data</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
          <p className="mb-4">
            Our Service does not address anyone under the age of 13. We do not knowingly
            collect personally identifiable information from children under 13. If you are
            a parent or guardian and you are aware that your child has provided us with
            personal data, please contact us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any
            changes by posting the new Privacy Policy on this page and updating the 'Last updated'
            date at the top of this Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>By visiting our website</li>
            <li>By email (if available)</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
