import logoImg from "../assets/images/logo.svg";
import heroImg from "../assets/images/illustration-mockups.svg";
import { IntroSection } from "./IntroSection";
import { FooterSection } from "./FooterSection";
import { useRef, useState } from "react";
import { Modal } from "./Modal";

export function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const emailInputRef = useRef(null);

  const handleShowValue = () => {
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
          <IntroSection onClick={setIsModalOpen} />
        </div>
        <FooterSection />

        {/* useRef and Portal practice */}

        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <h2 className="text-2xl font-bold mb-4">Register Now</h2>
            <p className="mb-4">Please Enter Your Email Below</p>

            <input
              type="email"
              ref={emailInputRef}
              placeholder="email ID"
              className="w-full border border-gray-400 p-3 rounded-md"
            />

            <button
              onClick={handleShowValue}
              className="bg-Soft-Magenta text-white w-full mt-4 p-3 rounded-md"
            >
              Show Value
            </button>
          </Modal>
        )}
      </main>
    </>
  );
}
