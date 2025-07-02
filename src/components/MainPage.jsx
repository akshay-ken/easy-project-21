import logoImg from "../assets/images/logo.svg";
import heroImg from "../assets/images/illustration-mockups.svg";
import { IntroSection } from "./IntroSection";
import { FooterSection } from "./FooterSection";
export function MainPage() {
  return (
    <>
      <main className="w-full my-12 p-8">
        <header className="mb-24">
          <img src={logoImg} alt="" />
        </header>
        <div className="md:grid md:grid-cols-2">
          <section className="mb-12">
            <img src={heroImg} alt="" />
          </section>
          <IntroSection />
        </div>
        <FooterSection />
      </main>
    </>
  );
}
