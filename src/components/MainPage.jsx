import logoImg from "../assets/images/logo.svg";
import heroImg from "../assets/images/illustration-mockups.svg";
import { IntroSection } from "./IntroSection";
import { FooterSection } from "./FooterSection";
import { useRef, useState } from "react";
import { Modal } from "./Modal";
import { CustomInput } from "./CustomInput";
export function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const emailInputRef = useRef();
  const attemptCounter = useRef(0);

  const handleShowValue = () => {
    attemptCounter.current++;
    console.log(`Read attempts ${attemptCounter.current}`);

    alert(`The entered email is: ${emailInputRef.current.value}`);
  };

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

        {/* useRef and Portal practice */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-Soft-Magenta text-white"
        >
          Contact Us
        </button>
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <h2 className="text-2xl font-bold mb-4">Contact Our Team</h2>
            <p className="mb-4">Please Enter Your Email Below</p>
            <CustomInput ref={emailInputRef} placeholder={"your@mail.id"} />

            <div className="mt-6 flex gap-4">
              <button onClick={() => emailInputRef.current.focus()}>
                Focus Input
              </button>
              <button onClick={handleShowValue}>Show Value</button>
            </div>
          </Modal>
        )}
      </main>
    </>
  );
}
