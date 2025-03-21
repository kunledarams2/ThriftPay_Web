import { FunctionComponent } from "react";

import "./Contact.css";

const Section: FunctionComponent<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div className="section">
    <div className="subtitle">{title}</div>
    <div className="text">{children}</div>
  </div>
);

const List: FunctionComponent<{ items: string[] }> = ({ items }) => (
  <ul className="list">
    {items.map((item, index) => (
      <li key={index} className="list-item">
        {item}
      </li>
    ))}
  </ul>
);

const Privacy: FunctionComponent = () => {
  return (
    <>
      <div className="background">
        <div className="backgroundt">
          <div className="containere">
            <div className="title">Privacy Policy for ThriftPay</div>
            <div className="text">Last Updated: 26 March, 2024</div>

            <Section title="1. Introduction">
              Welcome to ThriftPay. This privacy policy outlines how we collect,
              use, and protect your personal information when you use our
              financial app.
            </Section>

            <Section title="2. Information We Collect">
              <List
                items={[
                  "Personal Information: When you sign up for ThriftPay, we collect your name, email address, and contact details.",
                  "Financial Information: We may collect financial information such as bank account details or credit card information to facilitate transactions.",
                  "Device Information: We automatically collect device information such as IP address, device type, and operating system for analytics and security purposes.",
                ]}
              />
            </Section>

            <Section title="3. How We Use Information">
              <List
                items={[
                  "We use your personal information to create and manage your account, process transactions, and communicate with you about our services.",
                  "Financial information is securely stored and used only for authorized transactions.",
                  "Device information helps us improve our app's performance and security.",
                ]}
              />
            </Section>

            <Section title="4. Data Security">
              <List
                items={[
                  "We employ industry-standard security measures to protect your personal and financial information from unauthorized access, alteration, or disclosure.",
                  "Our servers are hosted in secure data centers with restricted access controls.",
                ]}
              />
            </Section>

            <Section title="5. User Controls">
              <List
                items={[
                  "ThriftPay provides you with options to access, update, or delete your personal information through your account settings.",
                  "You can opt out of certain data processing activities, such as marketing communications, by contacting our support team.",
                ]}
              />
            </Section>

            <Section title="6. Legal Basis">
              We process your personal information based on your consent and as
              necessary to fulfill our contractual obligations to you.
            </Section>

            <Section title="7. Children's Privacy">
              ThriftPay is not intended for use by children under the age of 18.
              We do not knowingly collect personal information from minors.
            </Section>

            <Section title="8. Changes to This Policy">
              We may update this privacy policy from time to time. Any changes
              will be notified to you through the app or via email.
            </Section>

            <Section title="9. Contact Information">
              If you have any questions or concerns about our privacy practices,
              please contact us at{" "}
              <a href="mailto:thriftpay.co@gmail.com" className="link">
                thriftpay.co@gmail.com
              </a>
            </Section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
