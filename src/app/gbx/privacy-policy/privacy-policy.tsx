import React from 'react'


function PrivacyPolicy(): React.ReactNode {
  return (
    <section id="privacy-policy" className="container sm:py-16">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Privacy Policy
      </h2>
      <p className="text-xl text-muted-foreground text-center mb-8">
        Last updated: October 29, 2025
      </p>
      <div className="shadow-md rounded-lg px-4 sm:px-8 md:px-16 lg:px-32">
        <div>
          <div className="sqs-html-content">

            <p className="mb-4">
              At GBx, a product of Void Works, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our dose tracking application ("Service"). By accessing or using the Service, you agree to the terms of this Privacy Policy.
            </p>

            <h3 className="font-bold text-lg mb-2">
              <strong>1. Information We Collect</strong>
            </h3>
            <p className="font-bold mb-2">Non-Personal Information</p>
            <ul className="list-disc list-inside mb-4">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Usage statistics</li>
            </ul>
            <p className="italic mb-4">
              <em>
                Non-personal information is collected through Sentry for error monitoring and crash detection. Sentry does not record usage trends or health data, only technical errors and related context. Additionally, aggregate, de-identified statistics may be collected for basic analytics.
              </em>
            </p>

            <h3 className="font-bold text-lg mb-2">
              <strong>2. How We Use Your Information</strong>
            </h3>
            <p className="mb-4">
              We use the information we collect in the following ways:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Providing and Maintaining the Service:</strong>
                {' '}
To authenticate users and facilitate dose tracking, reminders, and trend display.
              </li>
              <li>
                <strong>Improving the Service:</strong>
                {' '}
Usage and error information collected via Sentry and analytics help us monitor app reliability and enhance features.
              </li>
              <li>
                <strong>Security and Error Detection:</strong>
                {' '}
To analyze crashes and prevent technical issues, ensuring safe operation and harm reduction outcomes.
              </li>
            </ul>

            <h3 className="font-bold text-lg mb-2">
              <strong>3. Data Sharing and Disclosure</strong>
            </h3>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Service Providers:</strong>
                {' '}
We use third-party services like Sentry solely for app monitoring and technical error reporting.
              </li>
              <li>
                <strong>Legal Obligations:</strong>
                {' '}
We may disclose information if required by law or in response to valid governmental requests.
              </li>
              <li>
                <strong>No Sale of Personal Information:</strong>
                {' '}
We do not sell or rent your personal information to third parties.
              </li>
            </ul>

            <h3 className="font-bold text-lg mb-2">
              <strong>4. International Users</strong>
            </h3>
            <p className="mb-4">
              Our Service is available worldwide. By using GBx, you consent to data transfer and processing to locations where our servers or third-party providers operate. We currently do not claim compliance with GDPR or CCPA.
            </p>
            <p className="italic mb-4">
              <em>
                If you are located in jurisdictions with data protection laws, please review this policy carefully.
              </em>
            </p>

            <h3 className="font-bold text-lg mb-2">
              <strong>5. Children's Privacy</strong>
            </h3>
            <p className="mb-4">
              Our Service is not intended for children under 18. We do not knowingly collect data from children under 18. If you believe your child has provided us information, contact us for removal.
            </p>

            <h3 className="font-bold text-lg mb-2">
              <strong>6. Changes to This Privacy Policy</strong>
            </h3>
            <p className="mb-4">
              We may update this Privacy Policy occasionally. Any changes will be posted in-app, and we encourage periodic review.
            </p>

            <h3 className="font-bold text-lg mb-2">
              <strong>7. Contact Us</strong>
            </h3>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Email</strong>
:
                <a href="mailto:privacy@voidworks.io" className="text-blue-500 hover:underline">privacy@voidworks.io</a>
              </li>
            </ul>
            <p className="mb-4">
              By using GBx, you agree to the collection and use of information as described in this Privacy Policy.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy
