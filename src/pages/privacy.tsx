import { useAnalytics, useCookies } from "~/utils/cookies";
import Background from "~/components/landing/Background";
import Section from "~/components/content/Section";
import Footer from "~/components/Footer";
import Spacer from "~/components/Spacer";
import styled from "styled-components";
import Head from "~/components/Head";
import Nav from "~/components/Nav";
import {
  Description,
  Paragraph,
  ParagraphTitle,
  Subtitle,
  Title
} from "~/components/content/Text";

export default function Privacy() {
  // google analytics
  const [optedIn, toggleAnalytics] = useAnalytics();

  // cookies
  const [cookieConsent, toggleCookies] = useCookies();

  return (
    <>
      <Head title="Privacy Policy - ArConnect Arweave Wallet" />
      <Nav />
      <Main>
        <Section>
          <Title>Privacy Policy</Title>
          <Spacer y={1} />
          <Description>Last updated: September 6, 2024</Description>
          <Spacer y={1.35} />
          <Paragraph>
            ArConnect, a product and company of Th8ta LLC, (hereinafter
            “ArConnect”, “Company”, “we”, “us” and “our”) values your privacy.
            This Privacy Policy (“Privacy Policy”) applies to our website
            located at <a href="https://www.arconnect.io">www.arconnect.io</a>{" "}
            (the “Site”) and to the services and products we provide
            (collectively, the “Services”). The purpose of this Privacy Policy
            is to provide you with information concerning how we collect, use,
            maintain, and share your deidentified information in accordance with
            applicable data protection laws and best practices.
          </Paragraph>
          <Spacer y={1} />
          <Paragraph>
            We are headquartered in the United States and our Site is intended
            for use by citizens of the United States only. By continuing to use
            this Site, you consent to the collection and processing of your
            deidentified information in the United States and you acknowledge
            that the data protection laws of the United States may be different
            that those where you reside.
          </Paragraph>
          <Spacer y={1} />
          <Paragraph>
            All information is processed by or on behalf of the controller
            located at:
          </Paragraph>
          <Spacer y={1} />
          <Paragraph>
            C/O Not Community Labs
            <br />
            344 Grove St #4038, Jersey City, NJ 07302
          </Paragraph>
        </Section>
        <Section>
          <Subtitle>Information We Collect and Process</Subtitle>
          <Spacer y={2} />
          <Paragraph>
            We may automatically collect certain information due to your use of
            the Services. We use this information to enable the basic
            functionality of the Services. We strive where possible to ensure
            that the collected information is de-identified, aggregated and/or
            anonymized.
          </Paragraph>
          <Spacer y={2} />
          <Paragraph>
            <strong>Device and Usage Information</strong>. When you access and
            use the Services, including in limited circumstances when you engage
            with our relevant support platforms to make a request or where you
            require support from us, we may receive and store information about
            your interactions. This may include information such as date/time
            stamps, usage information and statistics, your internet protocol
            (IP) address, location (eg, city or state), hardware and software
            information (including operating system version and type), browser
            type, device identifiers, device event information, crash data,
            cookie data, and your interactions with the Services.
          </Paragraph>
          <Spacer y={2} />
          <Paragraph>
            <strong>Cookies and Similar Technologies</strong>. We use cookies on
            our Site. Cookies are files or pieces of information that can be
            stored on your computer (or on other devices with internet access,
            such as a smartphone or tablet) when you visit a website. When you
            visit our Site, the cookies will collect limited deidentified
            information about you. This deidentified information may include the
            type of browser software you use, the operating system you are
            running, the IP address assigned to your computer or Internet
            connection, and the IP address of the website, if any, that referred
            you to our Site. We use this deidentified information to understand
            how visitors navigate through our Sites, to enhance your experience
            while using our Site, and to make the materials we post as valuable
            to visitors as possible.
          </Paragraph>
          <Spacer y={2} />
          <Paragraph>
            <strong>Location Info</strong>. When you use the Services, we may
            collect general location information (such as general location
            inferred from an IP address).
          </Paragraph>
          <Spacer y={2} />
          <Paragraph>
            In connection with the above, we use the following third-party
            services to collect and analyze the data of our users:
          </Paragraph>
          <Spacer y={2} />
          <Paragraph>
            <strong>Google Analytics</strong> - We use Google Analytics, a web
            analytics service provided by Google. Google Analytics uses Cookies
            to collect the information required to evaluate your use of our
            websites to analyze your use of the websites and to provide other
            services that support our analysis and improvement of the use of the
            websites, in which we have a legitimate interest. We use Google
            Analytics only with IP Address anonymization enabled. This means
            that your IP Address will be shortened beforehand. Only in
            exceptional cases will the full IP Address be transmitted to a
            Google server in the USA and shortened there.
          </Paragraph>
          <Spacer y={2} />
          <Paragraph>
            Accordingly, Google only stores the information collected via
            Cookies in anonymous form and processes it in aggregated form. For
            further information on how Google Analytics anonymizes IP Addresses
            click{" "}
            <a href="https://support.google.com/analytics/answer/2763052">
              here
            </a>
            . Additionally, you can prevent Google Analytics from using your
            data by installing a browser add-on to disable Google Analytics{" "}
            <a href="https://tools.google.com/dlpage/gaoptout?hl=en">here</a>.
            Lastly, details on data protection and your options in connection
            with Google Analytics can be found{" "}
            <a href="https://support.google.com/analytics/answer/6004245?hl=en">
              here
            </a>
            .
          </Paragraph>
          <Spacer y={2} />
          <Paragraph>
            <strong>Segment.io</strong> - We use Segment.io, Inc. (“Segment”) to
            track and analyze user data to improve the functionality of our
            Services and the overall user experience. Segment uses Cookies and
            other similar tracking technologies to collect registered users’: IP
            Address, geographic area (i.e., not a targeted geolocation), and
            what language their browser is set to in order to provide these
            services. Further information on data protection and your options in
            connection with Segment’s services can be found{" "}
            <a href="https://segment.com/docs/legal/privacy/">here</a>.
          </Paragraph>
          <Spacer y={2} />
          <ParagraphTitle>Legitimate Interests / Consent</ParagraphTitle>
          <Spacer y={1} />
          <Paragraph>
            To the extent we rely on our legitimate interests as a legal basis
            for processing of information, we have considered the balance
            between our own interests (among other things, the lawful and
            efficient operation and provision of our Services) and the interests
            of our clients, potential clients, and visitors to our Site and
            believe that (a) the kind of processing referenced above would be
            reasonably expected by you and (b) such processing will not cause
            any harm to you and/or will not seriously impact your rights and
            freedoms with respect to the privacy of your deidentified
            information. Where we rely on your consent as a legal basis for
            processing information, you have the right to withdraw such consent
            at any time.
          </Paragraph>
        </Section>
        <Section>
          <Subtitle>Disclosures of Information</Subtitle>
          <Spacer y={2} />
          <Paragraph>
            In order for us to provide our Services, we may share certain
            deidentified information with the following categories of
            recipients:
            <ul>
              <li>
                Service Providers, including those who work to enhance our Site
                or Services and to protect the security of our systems, to
                provide calendaring services, and to provide communications to
                you.
              </li>
              <li>
                Legal/Regulatory Authorities, including to respond to a subpoena
                or court order, judicial process, or regulatory inquiry; to
                defend against fraud, lawsuits, claims or other liabilities; and
                to prevent physical harm or financial loss in connection with
                any suspected or actual illegal activity.
              </li>
            </ul>
            At times, we may also share certain deidentified information we
            obtain in the course of our Services in our marketing or other
            materials. We will never share the identity or any other details
            about a particular individual without consent.
          </Paragraph>
        </Section>
        <Section>
          <Subtitle>Cross-Border Transfers</Subtitle>
          <Spacer y={2} />
          <Paragraph>
            We may transfer your deidentified information to a third party that
            is located in a jurisdiction other than the one from which we
            collected your information, including to countries that have not
            been deemed to have an adequate level of protection for the rights
            and freedoms of data subjects. If we do transfer your deidentified
            information to another jurisdiction, we will do so following due
            diligence and provided that the data recipient is subject to
            contractual agreements imposing obligations on it to ensure
            appropriate technical and organization measures are implemented and
            maintained at all times to prevent the unauthorized and unlawful
            processing of deidentified information, and the accidental loss or
            destruction of, or damage to, deidentified information, consistent
            with our obligations under applicable data protection laws.
          </Paragraph>
        </Section>
        <Section>
          <Subtitle>Retention of deidentified Information</Subtitle>
          <Spacer y={2} />
          <Paragraph>
            We will only retain your deidentified information for as long as
            necessary to fulfill the purposes for which it was collected,
            including for the purposes of satisfying any legal, regulatory,
            accounting, or reporting requirements. If we ever collect any
            biometric information about you, we will not store that information
            for longer than 3 years.
          </Paragraph>
        </Section>
        <Section>
          <Subtitle>Security of deidentified Information</Subtitle>
          <Spacer y={2} />
          <Paragraph>
            The security of all deidentified information provided to us is
            important and we take reasonable steps designed to protect your
            deidentified information. We maintain reasonable administrative,
            technical, and physical safeguards designed to protect deidentified
            information that we receive against accidental, unlawful, or
            unauthorized destruction, loss, alteration, access, disclosure or
            use.
          </Paragraph>
        </Section>
        <Section>
          <Subtitle>Your Choices & Rights</Subtitle>
          <Spacer y={2} />
          <Paragraph>
            Depending upon where you are located, certain choices and rights may
            be available to you under applicable data protection laws, including
            the right to request access to your deidentified information or to
            have your deidentified information deleted. If you have questions
            about what rights may apply to you, please contact us at{" "}
            <a href="mailto:hello@arconnect.io">hello@arconnect.io</a>.
          </Paragraph>
          <Spacer y={2} />
          <ParagraphTitle>Do Not Track</ParagraphTitle>
          <Spacer y={1} />
          <Paragraph>
            Our Site is not designed to respond to "do not track" requests from
            browsers.
          </Paragraph>
          <Spacer y={0.75} />
          <Paragraph>
            You can click{" "}
            <OptOutLink onClick={toggleAnalytics}>here</OptOutLink> to opt{" "}
            {optedIn ? "out from" : "in to"} Google Analytics.
          </Paragraph>
          <Spacer y={0.5} />
          <Paragraph>
            You can click{" "}
            <OptOutLink onClick={() => toggleCookies()}>here</OptOutLink> to{" "}
            {cookieConsent ? "decline" : "accept"} cookies.
          </Paragraph>
          <Spacer y={2} />
          <ParagraphTitle>”Shine the Light” and “Eraser” Laws</ParagraphTitle>
          <Spacer y={1} />
          <Paragraph>
            Residents of the State of California may request a list of all third
            parties to which we have disclosed certain information during the
            preceding year for those third parties’ direct marketing purposes.
          </Paragraph>
          <Spacer y={2} />
          <ParagraphTitle>
            For Individuals located in the European Union, United Kingdom or
            Switzerland
          </ParagraphTitle>
          <Spacer y={1} />
          <Paragraph>
            You have a number of rights under applicable data protection laws in
            relation to the collection and use of your information. Under
            certain circumstances, you have the right to:
            <ul>
              <li>Access your information;</li>
              <li>Request we delete your information;</li>
              <li>Request we correct your information;</li>
              <li>Restrict the processing of your information;</li>
              <li>
                Object to further processing of your information, including to
                object to marketing from us;
              </li>
              <li> Make a data portability request;</li>
              <li>
                Withdraw any consent you have provided to us for the processing
                of your information;
              </li>
              <li>Restrict any automatic processing of your information;</li>
              <li>
                Submit a complaint to the appropriate Supervisory Authority.
              </li>
            </ul>
          </Paragraph>
        </Section>
        <Section>
          <Subtitle>Third-Party Links</Subtitle>
          <Spacer y={2} />
          <Paragraph>
            We may provide links to other sites or resources provided by third
            parties on our Site or as part of our Services. These links are
            provided for your convenience only. We have no control over the
            contents of those sites or resources, and accept no responsibility
            for them or for any loss or damage that may arise from your use of
            them. If you decide to access any of the third-party links on the
            Site, you do so entirely at your own risk and subject to the terms
            and conditions of those sites.
          </Paragraph>
        </Section>
        <Section>
          <Subtitle>Children</Subtitle>
          <Spacer y={2} />
          <Paragraph>
            We do not knowingly collect deidentified information from children
            under the age of 13 through our Site. If you are under 13, please do
            not give us any deidentified information. We encourage parents and
            legal guardians to monitor their children’s internet usage and to
            help enforce our Privacy Policy by instructing their children never
            to provide us deidentified information. If you have reason to
            believe that a child under the age of 13 has provided deidentified
            information to us, please contact us, and we will endeavor to delete
            that deidentified information from our databases.
          </Paragraph>
        </Section>
        <Section>
          <Subtitle>Changes to this Privacy Policy</Subtitle>
          <Spacer y={2} />
          <Paragraph>
            This Privacy Policy is effective as of the date stated at the top of
            this Privacy Policy. We may change this Privacy Policy from time to
            time. By accessing and using the Sites after we notify you of such
            changes to this Privacy Policy, you are deemed to have accepted such
            changes. Please refer back to this Privacy Policy on a regular
            basis.
          </Paragraph>
        </Section>
        <Section>
          <Subtitle>Contact Us</Subtitle>
          <Spacer y={2} />
          <Paragraph>
            If you have any questions regarding this Privacy Policy or our
            privacy practices or if you would like to exercise any of your
            privacy rights, please contact us at{" "}
            <a href="mailto:hello@arconnect.io">hello@arconnect.io</a>.
          </Paragraph>
          <Spacer y={1} />
          <Paragraph>
            You may also write to us at the following address:
          </Paragraph>
          <Spacer y={1} />
          <Paragraph>344 Grove St #4038, Jersey City, NJ 07302</Paragraph>
          <Spacer y={1} />
          <Paragraph>
            If you are located in the European Union, United Kingdom, or
            Switzerland and believe we have not adequately resolved any issues,
            you may contact the Supervisory Authority concerned.
          </Paragraph>
        </Section>
        <Background />
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  position: relative;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  border-radius: 5px;

  td,
  th {
    text-align: left;
    border: 1px solid rgba(${(props) => props.theme.accent}, 0.2);
    padding: 8px;
    vertical-align: top;
    color: rgb(${(props) => props.theme.secondaryText});
    font-weight: 500;
  }

  th {
    color: rgb(${(props) => props.theme.accent});
    font-weight: 650;
  }

  tr:nth-child(even) {
    background-color: rgba(${(props) => props.theme.accent}, 0.2);
  }
`;

const OptOutLink = styled.span`
  color: rgb(${(props) => props.theme.accent});
  text-decoration: none;
  cursor: pointer;
`;
