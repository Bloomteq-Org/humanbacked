import SimpleHeader from "../components/SimpleHeader";
import Footer from "../components/Footer";
import Link from "next/link";
import FormSection from "../components/FormSection";

export default function WhitePaperPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(118.69%_85.24%_at_50%_25.2%,_#FFF_0%,_#F4F4FF_58.08%,_#FFF_84.05%)]">
      <SimpleHeader />
      <article className="mx-auto pt-10 lg:pt-10 mx-auto max-w-[1512px] px-[16px] md:px-[24px] lg:px-[86px] xl:px-[126px]">
        <div className="">
          {/* Title Section */}
          <div className="mb-[60px] md:mb-[80px]">
            <h1 className="font-bold text-[36px] text-center md:text-[48px] lg:text-[56px] lg:leading-[69px] leading-[42px] md:leading-[56px] tracking-[-0.72px] md:tracking-[-1.44px] text-[#1d1d1b] mb-[16px]">
              HumanBacked White Paper
            </h1>
            <p className="font-medium text-center text-[18px] md:text-[22px] leading-[26px] md:leading-[34px] md:-tracking-[0.64px] text-[#1d1d1b] mb-[8px]">
              Proof of Personhood + Verified Support for the AI Era
            </p>
            <p className="font-normal text-center text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#1d1d1b]/70 mb-[24px]">
              Version 1.1 | December 21, 2025 |{" "}
              <Link
                href="/HumanBacked-WhitePaper-V1.1.docx"
                download
                className="text-[#0c3ddf] hover:opacity-80 transition-opacity duration-200 underline"
              >
                Download
              </Link>
            </p>
          </div>

          {/* Disclaimer */}
          <section className="mb-[60px] md:mb-[80px]">
            <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[42px] lg:leading-[48px] text-[#1d1d1b] mb-[24px]">
              Disclaimer
            </h2>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
              This white paper describes the HumanBacked product vision and a conceptual system
              design. Features, specifications, and timelines may evolve during testing with
              creators and partners. This document is not legal, financial, or security advice.
            </p>
          </section>

          {/* Executive Summary */}
          <section className="mb-[60px] md:mb-[80px]">
            <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[42px] lg:leading-[48px] text-[#1d1d1b] mb-[24px]">
              Executive Summary
            </h2>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[20px]">
              The creator economy is entering a trust crisis. AI-generated content, deepfakes, and
              impersonation accounts are growing faster than platforms can respond. The result is
              predictable: creators get copied, audiences get scammed, brands hesitate to partner,
              and authentic work gets drowned out by fake engagement.
            </p>
            <p className="font-medium text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#1d1d1b] mb-[20px]">
              HumanBacked solves a simple, high-value problem:
            </p>
            <p className="font-semibold text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#1d1d1b] mb-[20px] pl-[20px] border-l-4 border-[#0c3ddf]">
              Prove a real human is behind a creator account, then make that trust usable.
            </p>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[20px]">
              HumanBacked delivers two connected layers that reinforce each other:
            </p>
            <ol className="list-decimal list-inside space-y-[16px] mb-[20px] ml-[16px]">
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                <strong className="font-semibold">Verification Layer (Proof of Personhood):</strong>{" "}
                A privacy-first verification process that produces a clear, checkable trust signal.
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                <strong className="font-semibold">Support Layer (Verified Support):</strong> A safe
                way for audiences to support verified creators, anchored to identity and community
                trust, not hype.
              </li>
            </ol>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[20px]">
              The Support Layer is not "tips for tips' sake." It is the action layer that turns
              trust into real outcomes: safer fan support, stronger community connection, better
              conversion for creator monetization, and reduced fraud for partners.
            </p>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
              HumanBacked is built for creators, and designed to integrate with platforms, brands,
              and marketplaces as a trust and risk-reduction layer.
            </p>
          </section>

          {/* Section 1 */}
          <section className="mb-[60px] md:mb-[80px]">
            <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[42px] lg:leading-[48px] text-[#1d1d1b] mb-[24px]">
              1. The Problem: Trust Is Breaking Online
            </h2>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[24px]">
              Digital identity used to be based on consistency. If a creator posted for years, had
              followers, and seemed real, people trusted them. That assumption is no longer
              reliable.
            </p>

            <h3 className="font-semibold text-[22px] md:text-[24px] lg:text-[26px] leading-[30px] md:leading-[34px] text-[#1d1d1b] mb-[16px] mt-[32px]">
              What changed
            </h3>
            <ul className="list-disc list-inside space-y-[12px] mb-[24px] ml-[16px]">
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                AI makes it cheap and fast to generate convincing faces, voices, and content.
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                Impersonation scales across platforms in hours, not weeks.
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                Bot engagement creates fake credibility and false social proof.
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                Audiences cannot quickly confirm who is real.
              </li>
            </ul>

            <h3 className="font-semibold text-[22px] md:text-[24px] lg:text-[26px] leading-[30px] md:leading-[34px] text-[#1d1d1b] mb-[16px] mt-[32px]">
              Why this matters
            </h3>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[20px]">
              The damage is not only reputational. It becomes financial the moment support is
              involved. Impersonators do not stop at fake posts. They move toward high-trust
              actions: DMs, fake links, "exclusive access," fake giveaways, fake memberships, and
              "support me here" pages. Support is where scams hit hardest because audiences are
              trying to back a person.
            </p>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[20px]">
              Creators pay twice: lost trust from scams, and lost opportunities when brands and
              platforms hesitate due to identity uncertainty. Even loyal supporters start to second
              guess.
            </p>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
              The internet needs a trust layer that is easy to verify and safe to act on.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-[60px] md:mb-[80px]">
            <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[42px] lg:leading-[48px] text-[#1d1d1b] mb-[24px]">
              2. HumanBacked: The Trust and Support Layer
            </h2>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[20px]">
              HumanBacked is designed to answer one question clearly:
            </p>
            <p className="font-semibold text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#1d1d1b] mb-[20px] pl-[20px] border-l-4 border-[#0c3ddf]">
              Is this the real creator, backed by a verified human identity?
            </p>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[20px]">
              Then it enables the next step:
            </p>
            <p className="font-semibold text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#1d1d1b] mb-[24px] pl-[20px] border-l-4 border-[#b748be]">
              If I want to support them, can I do it safely and meaningfully?
            </p>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
              HumanBacked is not trying to rank creators or judge content quality. It is not a
              popularity score. It is a credibility layer that is grounded in one thing: real human
              identity, verified and checkable.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-[60px] md:mb-[80px]">
            <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[42px] lg:leading-[48px] text-[#1d1d1b] mb-[24px]">
              3. Who HumanBacked Is For
            </h2>

            <h3 className="font-semibold text-[22px] md:text-[24px] lg:text-[26px] leading-[30px] md:leading-[34px] text-[#1d1d1b] mb-[16px] mt-[32px]">
              Creators
            </h3>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[16px]">
              Artists, comedians, musicians, educators, streamers, niche experts, and any creator
              who wants a simple way to prove authenticity and protect their name.
            </p>
            <p className="font-medium text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[12px]">
              Creators want:
            </p>
            <ul className="list-disc list-inside space-y-[12px] mb-[32px] ml-[16px]">
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                A clear "this is me" trust signal
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                Protection against impersonation and AI copycats
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                A trusted link they can share anywhere
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                A support experience that strengthens community, not just revenue
              </li>
            </ul>

            <h3 className="font-semibold text-[22px] md:text-[24px] lg:text-[26px] leading-[30px] md:leading-[34px] text-[#1d1d1b] mb-[16px] mt-[32px]">
              Audiences
            </h3>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[16px]">
              Fans who want to engage and support without being fooled.
            </p>
            <p className="font-medium text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[12px]">
              Audiences want:
            </p>
            <ul className="list-disc list-inside space-y-[12px] mb-[32px] ml-[16px]">
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                One-click confidence that they found the real creator
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                A safe way to support real human work
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                Less confusion during viral growth and copycat waves
              </li>
            </ul>

            <h3 className="font-semibold text-[22px] md:text-[24px] lg:text-[26px] leading-[30px] md:leading-[34px] text-[#1d1d1b] mb-[16px] mt-[32px]">
              Partners
            </h3>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[16px]">
              Platforms, brands, and marketplaces that need better identity assurance and lower
              fraud.
            </p>
            <p className="font-medium text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[12px]">
              Partners want:
            </p>
            <ul className="list-disc list-inside space-y-[12px] mb-[32px] ml-[16px]">
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                Reduced impersonation and payout fraud
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                Faster, safer creator onboarding
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                A privacy-first verification layer that is easy to integrate
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-[60px] md:mb-[80px]">
            <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[42px] lg:leading-[48px] text-[#1d1d1b] mb-[24px]">
              4. Product Overview
            </h2>

            <h3 className="font-semibold text-[22px] md:text-[24px] lg:text-[26px] leading-[30px] md:leading-[34px] text-[#1d1d1b] mb-[16px] mt-[32px]">
              4.1 Verification Layer: Proof of Personhood
            </h3>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[16px]">
              HumanBacked verifies that a real human is behind a creator identity. The output is a
              verification credential with:
            </p>
            <ul className="list-disc list-inside space-y-[12px] mb-[16px] ml-[16px]">
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                an issuance date
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                an expiration policy
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                a revocation mechanism
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                a public verification view that does not expose sensitive data
              </li>
            </ul>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] italic">
              Key idea: Trust should be portable and checkable, not a vague claim.
            </p>

            <h3 className="font-semibold text-[22px] md:text-[24px] lg:text-[26px] leading-[30px] md:leading-[34px] text-[#1d1d1b] mb-[16px] mt-[32px]">
              4.2 Verification Page: A Trusted Home Base
            </h3>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[16px]">
              Creators receive a shareable verification page that is designed to:
            </p>
            <ul className="list-disc list-inside space-y-[12px] mb-[16px] ml-[16px]">
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                confirm authenticity quickly
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                reduce impersonation effectiveness
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                give audiences one official place to verify and support
              </li>
            </ul>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
              This becomes the creator's "trust link," especially useful when impersonators spin up
              clones and fake pages.
            </p>

            <h3 className="font-semibold text-[22px] md:text-[24px] lg:text-[26px] leading-[30px] md:leading-[34px] text-[#1d1d1b] mb-[16px] mt-[32px]">
              4.3 Support Layer: Verified Support, Not Just Payments
            </h3>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[16px]">
              HumanBacked connects support to verified identity so audiences can back the real
              person with confidence.
            </p>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[16px]">
              Support is not only money. It is a trust action that reinforces community. HumanBacked
              is designed so support can include:
            </p>
            <ul className="list-disc list-inside space-y-[12px] mb-[24px] ml-[16px]">
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                tips or direct contributions (where enabled)
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                recognition and community signals
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                perks or access tied to verification (optional)
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                partner-backed benefits (optional)
              </li>
            </ul>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[24px]">
              The point: Verified support makes authentic content more sustainable and makes scams
              less effective.
            </p>

            <h4 className="font-semibold text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[12px] mt-[24px]">
              What audiences get
            </h4>
            <ul className="list-disc list-inside space-y-[12px] mb-[24px] ml-[16px]">
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                Confidence they are supporting the real creator
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                A simple, low-friction support flow
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                A clearer "human-made" signal during moments of uncertainty
              </li>
            </ul>

            <h4 className="font-semibold text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[12px] mt-[24px]">
              What creators get
            </h4>
            <ul className="list-disc list-inside space-y-[12px] mb-[16px] ml-[16px]">
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                A safer path to support that they can share everywhere
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                Higher trust that improves conversion across memberships, merch, tickets, and
                partnerships
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                Reduced scam risk tied to their name
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                A stronger community loop that rewards consistency and authenticity
              </li>
            </ul>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[24px]">
              Even when a supporter never pays, the trust signal improves outcomes. Verified
              identity increases confidence, and confidence increases engagement.
            </p>

            <h3 className="font-semibold text-[22px] md:text-[24px] lg:text-[26px] leading-[30px] md:leading-[34px] text-[#1d1d1b] mb-[16px] mt-[32px]">
              4.4 Partner Integrations
            </h3>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[16px]">
              HumanBacked can integrate into partner workflows through a verification API and event
              updates.
            </p>
            <p className="font-medium text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[12px]">
              Common partner uses:
            </p>
            <ul className="list-disc list-inside space-y-[12px] mb-[32px] ml-[16px]">
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                verify creators before onboarding and payouts
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                reduce impersonation and brand risk
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                confirm identity before sponsorships and collaborations
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                provide safer user experiences on marketplaces and platforms
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-[60px] md:mb-[80px]">
            <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[42px] lg:leading-[48px] text-[#1d1d1b] mb-[24px]">
              5. How It Works (Conceptual)
            </h2>
            <ol className="list-decimal list-inside space-y-[24px] ml-[16px]">
              <li className="font-semibold text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#1d1d1b]">
                Creator Onboarding
                <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mt-[8px] ml-[24px]">
                  A creator creates a HumanBacked profile and links their public creator presence.
                </p>
              </li>
              <li className="font-semibold text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#1d1d1b]">
                Proof of Personhood Verification
                <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mt-[8px] ml-[24px]">
                  HumanBacked verifies the creator using a privacy-first process. The goal is to
                  confirm a real person and prevent automation, replay, and mass farming.
                </p>
              </li>
              <li className="font-semibold text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#1d1d1b]">
                Credential Issuance
                <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mt-[8px] ml-[24px]">
                  A verification credential is issued with clear status handling: valid, expired,
                  revoked.
                </p>
              </li>
              <li className="font-semibold text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#1d1d1b]">
                Public Verification Page
                <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mt-[8px] ml-[24px]">
                  The creator shares one trusted link that audiences and partners can check.
                </p>
              </li>
              <li className="font-semibold text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#1d1d1b]">
                Verified Support
                <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mt-[8px] ml-[24px]">
                  Audiences can support the verified creator through a flow tied to the verification
                  page, reducing the chance of impersonation interception.
                </p>
              </li>
            </ol>
          </section>

          {/* Section 6 */}
          <section className="mb-[60px] md:mb-[80px]">
            <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[42px] lg:leading-[48px] text-[#1d1d1b] mb-[24px]">
              6. Design Principles: Privacy, Safety, and Trust
            </h2>

            <h3 className="font-semibold text-[22px] md:text-[24px] lg:text-[26px] leading-[30px] md:leading-[34px] text-[#1d1d1b] mb-[16px] mt-[32px]">
              Privacy-first by design
            </h3>
            <ul className="list-disc list-inside space-y-[12px] mb-[24px] ml-[16px]">
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                Data minimization: collect only what is needed
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                Derived signals over raw sensitive data where possible
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                Strong access controls and audit logging
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                Clear user consent and transparency
              </li>
            </ul>

            <h3 className="font-semibold text-[22px] md:text-[24px] lg:text-[26px] leading-[30px] md:leading-[34px] text-[#1d1d1b] mb-[16px] mt-[32px]">
              Purpose limitation
            </h3>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[24px]">
              Verification data should not be repurposed for ads, profiling, or unrelated targeting.
            </p>

            <h3 className="font-semibold text-[22px] md:text-[24px] lg:text-[26px] leading-[30px] md:leading-[34px] text-[#1d1d1b] mb-[16px] mt-[32px]">
              Fairness and accessibility
            </h3>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
              Verification should be usable across diverse creator contexts, with clear support
              paths when verification fails.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-[60px] md:mb-[80px]">
            <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[42px] lg:leading-[48px] text-[#1d1d1b] mb-[24px]">
              7. Threat Model and Fraud Defense
            </h2>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[24px]">
              HumanBacked is built assuming adversaries will attempt to scale fraud.
            </p>

            <h3 className="font-semibold text-[22px] md:text-[24px] lg:text-[26px] leading-[30px] md:leading-[34px] text-[#1d1d1b] mb-[16px] mt-[32px]">
              Key threats:
            </h3>
            <ul className="list-disc list-inside space-y-[12px] mb-[24px] ml-[16px]">
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                impersonation using stolen content and deepfakes
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                bot farms attempting mass onboarding
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                replay and scripted attacks
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                credential theft and account takeover
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                social engineering of creators and support staff
              </li>
            </ul>

            <h3 className="font-semibold text-[22px] md:text-[24px] lg:text-[26px] leading-[30px] md:leading-[34px] text-[#1d1d1b] mb-[16px] mt-[32px]">
              Defense approach (conceptual):
            </h3>
            <ul className="list-disc list-inside space-y-[12px] mb-[16px] ml-[16px]">
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                anti-automation controls and rate limiting
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                anomaly detection and risk scoring
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                step-up checks when suspicious activity is detected
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                credential expiry and revocation
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                audit logs for sensitive actions
              </li>
            </ul>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
              The goal is not perfection. The goal is to make fraud expensive, slow, and detectable.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-[60px] md:mb-[80px]">
            <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[42px] lg:leading-[48px] text-[#1d1d1b] mb-[24px]">
              8. The Business Value
            </h2>

            <h3 className="font-semibold text-[22px] md:text-[24px] lg:text-[26px] leading-[30px] md:leading-[34px] text-[#1d1d1b] mb-[16px] mt-[32px]">
              For creators
            </h3>
            <ul className="list-disc list-inside space-y-[12px] mb-[32px] ml-[16px]">
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                authenticity protection that is easy to share
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                stronger trust that improves monetization conversion everywhere
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                safer support that reduces impersonation losses
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                better credibility with brands and platforms
              </li>
            </ul>

            <h3 className="font-semibold text-[22px] md:text-[24px] lg:text-[26px] leading-[30px] md:leading-[34px] text-[#1d1d1b] mb-[16px] mt-[32px]">
              For audiences
            </h3>
            <ul className="list-disc list-inside space-y-[12px] mb-[32px] ml-[16px]">
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                less uncertainty, fewer scams
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                easier and safer support of real human work
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                clearer signals in a noisy, AI-heavy environment
              </li>
            </ul>

            <h3 className="font-semibold text-[22px] md:text-[24px] lg:text-[26px] leading-[30px] md:leading-[34px] text-[#1d1d1b] mb-[16px] mt-[32px]">
              For partners
            </h3>
            <ul className="list-disc list-inside space-y-[12px] mb-[32px] ml-[16px]">
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                reduced fraud and support burden
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                safer onboarding and payout processes
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                improved platform trust and brand safety
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                a practical trust signal that can be verified programmatically
              </li>
            </ul>

            <h3 className="font-semibold text-[22px] md:text-[24px] lg:text-[26px] leading-[30px] md:leading-[34px] text-[#1d1d1b] mb-[16px] mt-[32px]">
              Business model (high level)
            </h3>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[16px]">
              HumanBacked is designed to support multiple revenue paths without compromising trust:
            </p>
            <ul className="list-disc list-inside space-y-[12px] mb-[16px] ml-[16px]">
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                creator subscription tiers for enhanced features
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                partner integrations and verification services
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                optional take-rate on verified support flows (where applicable)
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                enterprise risk and fraud tooling for platforms and marketplaces
              </li>
            </ul>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
              HumanBacked prioritizes trust first. Monetization should reinforce trust, not weaken
              it.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-[60px] md:mb-[80px]">
            <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[42px] lg:leading-[48px] text-[#1d1d1b] mb-[24px]">
              9. Roadmap (High Level)
            </h2>

            <h3 className="font-semibold text-[22px] md:text-[24px] lg:text-[26px] leading-[30px] md:leading-[34px] text-[#1d1d1b] mb-[16px] mt-[32px]">
              Phase 1: Verification Foundation
            </h3>
            <ul className="list-disc list-inside space-y-[12px] mb-[32px] ml-[16px]">
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                creator onboarding
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                Proof of Personhood verification
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                verification credential lifecycle (valid, expired, revoked)
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                public verification page
              </li>
            </ul>

            <h3 className="font-semibold text-[22px] md:text-[24px] lg:text-[26px] leading-[30px] md:leading-[34px] text-[#1d1d1b] mb-[16px] mt-[32px]">
              Phase 2: Support Layer MVP
            </h3>
            <ul className="list-disc list-inside space-y-[12px] mb-[32px] ml-[16px]">
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                verified support link flow
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                creator support dashboard (basic insights and signals)
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                anti-fraud controls specific to support interception and impersonation
              </li>
            </ul>

            <h3 className="font-semibold text-[22px] md:text-[24px] lg:text-[26px] leading-[30px] md:leading-[34px] text-[#1d1d1b] mb-[16px] mt-[32px]">
              Phase 3: Partner Pilots
            </h3>
            <ul className="list-disc list-inside space-y-[12px] mb-[32px] ml-[16px]">
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                partner API gateway and status webhooks
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                onboarding verification integrations
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                brand and marketplace pilots with real creators
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                optional perks and trust-based benefits tied to verification
              </li>
            </ul>

            <h3 className="font-semibold text-[22px] md:text-[24px] lg:text-[26px] leading-[30px] md:leading-[34px] text-[#1d1d1b] mb-[16px] mt-[32px]">
              Phase 4: Scale and Interoperability
            </h3>
            <ul className="list-disc list-inside space-y-[12px] mb-[32px] ml-[16px]">
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                broader integrations across creator tools and platforms
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                portable verification credentials where feasible
              </li>
              <li className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
                expanded support experiences beyond payments (recognition, perks, access)
              </li>
            </ul>
          </section>

          {/* Conclusion */}
          <section className="mb-[60px] md:mb-[80px]">
            <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[42px] lg:leading-[48px] text-[#1d1d1b] mb-[24px]">
              Conclusion
            </h2>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[20px]">
              The future of the internet is not only synthetic. It is human.
            </p>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[20px]">
              HumanBacked exists to protect real creators and make authenticity easy to verify.
              Verification without action is not enough. That is why HumanBacked combines Proof of
              Personhood with Verified Support, so audiences can back real human work confidently,
              creators can grow sustainably, and partners can reduce fraud and risk.
            </p>
            <p className="font-semibold text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#1d1d1b]">
              HumanBacked is the trust and support layer for the AI era.
            </p>
          </section>

          {/* References */}
          <section className="mb-[60px] md:mb-[80px]">
            <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[42px] lg:leading-[48px] text-[#1d1d1b] mb-[24px]">
              References
            </h2>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b]">
              HumanBacked. (2025). HumanBacked product overview and platform concept (internal
              materials and product drafts).
            </p>
          </section>

          {/* Appendix A */}
          <section className="mb-[60px] md:mb-[80px]">
            <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[42px] lg:leading-[48px] text-[#1d1d1b] mb-[24px]">
              Appendix A: Glossary
            </h2>
            <dl className="space-y-[20px]">
              <div>
                <dt className="font-semibold text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#1d1d1b] mb-[8px]">
                  Proof of Personhood:
                </dt>
                <dd className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] ml-[20px]">
                  A method to show an account is controlled by a real human, not a bot or automated
                  farm.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#1d1d1b] mb-[8px]">
                  Credential:
                </dt>
                <dd className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] ml-[20px]">
                  A signed verification artifact that can be checked for validity and status.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#1d1d1b] mb-[8px]">
                  Revocation:
                </dt>
                <dd className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] ml-[20px]">
                  A mechanism to invalidate a credential before expiration.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#1d1d1b] mb-[8px]">
                  Liveness:
                </dt>
                <dd className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] ml-[20px]">
                  A check intended to confirm a real person is present during verification.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#1d1d1b] mb-[8px]">
                  Tamper-evident record:
                </dt>
                <dd className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] ml-[20px]">
                  A record designed so unauthorized changes become detectable.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#1d1d1b] mb-[8px]">
                  Support Layer:
                </dt>
                <dd className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] ml-[20px]">
                  A trust-based system that lets audiences support verified creators safely and
                  meaningfully, including financial support, recognition, perks, or access, anchored
                  to verified identity.
                </dd>
              </div>
            </dl>
          </section>

          {/* Appendix B */}
          <section className="mb-[60px] md:mb-[80px]">
            <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[42px] lg:leading-[48px] text-[#1d1d1b] mb-[24px]">
              Appendix B: Example Partner API (Concept)
            </h2>
            <p className="font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#1d1d1b] mb-[24px]">
              This example shows the shape of a partner credential check. It is not a final
              specification.
            </p>
            <div className="bg-[#f4f4ff] border border-[#e0e0e0] rounded-lg p-[24px] font-mono text-[14px] md:text-[16px] leading-[24px] md:leading-[28px]">
              <p className="font-semibold text-[#1d1d1b] mb-[16px]">
                Endpoint: GET /v1/credentials/{"{credential_id}"}
              </p>
              <p className="font-semibold text-[#1d1d1b] mb-[12px]">Response fields:</p>
              <ul className="list-disc list-inside space-y-[8px] ml-[16px]">
                <li className="text-[#1d1d1b]">status: valid | expired | revoked</li>
                <li className="text-[#1d1d1b]">verified_at: timestamp</li>
                <li className="text-[#1d1d1b]">expires_at: timestamp</li>
                <li className="text-[#1d1d1b]">subject: creator public handle or ID</li>
                <li className="text-[#1d1d1b]">assurance_level: low | medium | high</li>
                <li className="text-[#1d1d1b]">
                  issuer_signature: detached signature for verification
                </li>
              </ul>
            </div>
          </section>

          <FormSection />
        </div>
      </article>
      <Footer />
    </main>
  );
}
