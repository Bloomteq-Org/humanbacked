import type { Metadata } from "next";
import SimpleHeader from "../components/SimpleHeader";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for HumanBacked. Read our terms of service, intellectual property rights, and user agreements. Effective date: December 1, 2025.",
  keywords: [
    "HumanBacked terms",
    "terms and conditions",
    "terms of service",
    "user agreement",
    "legal terms",
  ],
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms and Conditions | HumanBacked",
    description:
      "Terms and Conditions for HumanBacked. Read our terms of service, intellectual property rights, and user agreements.",
    url: "https://humanbacked.vercel.app/terms",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(118.69%_85.24%_at_50%_25.2%,_#FFF_0%,_#F4F4FF_58.08%,_#FFF_84.05%)]">
      <SimpleHeader />
      <article className="mx-auto pt-10 lg:pt-10 mx-auto max-w-[1512px] px-[16px] md:px-[24px] lg:px-[86px] xl:px-[126px]">
        <div className="">
          {/* Title Section */}
          <div className="mb-[60px] md:mb-[80px]">
            <h1 className="font-bold text-[36px] text-center md:text-[48px] lg:text-[56px] lg:leading-[69px] leading-[42px] md:leading-[56px] tracking-[-0.72px] md:tracking-[-1.44px] text-[#1d1d1b] mb-[16px]">
              Terms and Conditions
            </h1>
            <p className="font-normal text-center text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#1d1d1b]/70">
              Effective Date: 1st day of December, 2025
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-[60px] md:mb-[80px]">
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
              These terms and conditions (the "Terms and Conditions") govern the use of www.humanbacked.com
              (the "Site"). This Site is owned and operated by HumanBacked Inc.. This Site is a saas technology.
              By using this Site, you indicate that you have read and understand these Terms and Conditions and
              agree to abide by them at all times.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="mb-[60px] md:mb-[80px]">
            <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[42px] lg:leading-[48px] text-[#1d1d1b] mb-[24px]">
              Intellectual Property
            </h2>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
              All content published and made available on our Site is the property of HumanBacked Inc. and the
              Site's creators. This includes, but is not limited to images, text, logos, documents, downloadable files
              and anything that contributes to the composition of our Site.
            </p>
          </section>

          {/* Links to Other Websites */}
          <section className="mb-[60px] md:mb-[80px]">
            <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[42px] lg:leading-[48px] text-[#1d1d1b] mb-[24px]">
              Links to Other Websites
            </h2>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
              Our Site contains links to third party websites or services that we do not own or control. We are not
              responsible for the content, policies, or practices of any third party website or service linked to on our
              Site. It is your responsibility to read the terms and conditions and privacy policies of these third party
              websites before using these sites.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-[60px] md:mb-[80px]">
            <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[42px] lg:leading-[48px] text-[#1d1d1b] mb-[24px]">
              Limitation of Liability
            </h2>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
              HumanBacked Inc. and our directors, officers, agents, employees, subsidiaries, and affiliates will not be
              liable for any actions, claims, losses, damages, liabilities and expenses including legal fees from your
              use of the Site.
            </p>
          </section>

          {/* Indemnity */}
          <section className="mb-[60px] md:mb-[80px]">
            <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[42px] lg:leading-[48px] text-[#1d1d1b] mb-[24px]">
              Indemnity
            </h2>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
              Except where prohibited by law, by using this Site you indemnify and hold harmless HumanBacked
              Inc. and our directors, officers, agents, employees, subsidiaries, and affiliates from any actions, claims,
              losses, damages, liabilities and expenses including legal fees arising out of your use of our Site or your
              violation of these Terms and Conditions.
            </p>
          </section>

          {/* Applicable Law */}
          <section className="mb-[60px] md:mb-[80px]">
            <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[42px] lg:leading-[48px] text-[#1d1d1b] mb-[24px]">
              Applicable Law
            </h2>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
              These Terms and Conditions are governed by the laws of the Province of Ontario.
            </p>
          </section>

          {/* Severability */}
          <section className="mb-[60px] md:mb-[80px]">
            <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[42px] lg:leading-[48px] text-[#1d1d1b] mb-[24px]">
              Severability
            </h2>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[20px]">
              If at any time any of the provisions set forth in these Terms and Conditions are found to be inconsistent
              or invalid under applicable laws, those provisions will be deemed void and will be removed from these
              Terms and Conditions. All other provisions will not be affected by the removal and the rest of these
              Terms and Conditions will still be considered valid.
            </p>
          </section>

          {/* Changes */}
          <section className="mb-[60px] md:mb-[80px]">
            <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[42px] lg:leading-[48px] text-[#1d1d1b] mb-[24px]">
              Changes
            </h2>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
              These Terms and Conditions may be amended from time to time in order to maintain compliance with
              the law and to reflect any changes to the way we operate our Site and the way we expect users to
              behave on our Site. We will notify users by email of changes to these Terms and Conditions or post a
              notice on our Site.
            </p>
          </section>

          {/* Contact Details */}
          <section className="mb-[60px] md:mb-[80px]">
            <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[42px] lg:leading-[48px] text-[#1d1d1b] mb-[24px]">
              Contact Details
            </h2>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[20px]">
              Please contact us if you have any questions or concerns. Our contact details are as follows:
            </p>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[20px]">
              info@humanbacked.com
            </p>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
              You can also contact us through the feedback form available on our Site.
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
}

