import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export function FooterSection() {
  return (
    <>
      <footer className="flex flex-row justify-center items-center gap-x-6 md:-mt-24 md:justify-end *:hover:fill-Soft-Magenta *:hover:ring-Soft-Magenta">
        <FaFacebookF className="size-10 fill-white rounded-full p-2 ring-2 ring-white" />
        <FaTwitter className="size-10 fill-white rounded-full p-2 ring-2 ring-white" />
        <FaInstagram className="size-10 fill-white rounded-full p-2 ring-2 ring-white" />
      </footer>
    </>
  );
}
