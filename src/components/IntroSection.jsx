import { FooterSection } from "./FooterSection";

export function IntroSection() {
  return (
    <>
      <section className="md:text-left text-center md:p-12">
        <h1 className="text-3xl font-semibold text-white font-one mb-6">
          Build The Community Your Fans Will Love
        </h1>
        <p className="text-lg/8 font-two font-normal text-white mb-4">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button className="font-one block shadow-black shadow-lg bg-white text-xl text-Violet w-2/3 mx-auto p-4 rounded-full mb-16 md:w-1/3 md:ml-0 hover:bg-Soft-Magenta">
          Register
        </button>
      </section>
    </>
  );
}
