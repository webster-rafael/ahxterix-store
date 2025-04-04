import Image from "next/image";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-zinc-800 text-white h-20 flex items-center justify-between px-2 lg:px-4">
        <div className="flex lg:hidden items-center">
          <Image src={"/logo.svg"} width={150} height={45} alt="Logo da Loja" />
        </div>
        <div className="hidden lg:flex items-center">
          <Image src={"/logo.svg"} width={200} height={45} alt="Logo da Loja" />
        </div>
        <span className="hidden lg:block">
          Desenvolvido por{" "}
          <a
            className="ahxterix-text uppercase font-extrabold"
            href="https://ahxterix.com.br"
            target="_blank"
          >
            Ahxterix
          </a>
        </span>
        <div className="flex items-center lg:gap-3">
          <a
            href="https://www.instagram.com/osgemeos20?igsh=MWFheTRvbmZ2cDhmNg%3D%3D"
            target="_blank"
          >
            <FaInstagram className="size-6 hover:text-greenPrimary mx-2" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5567996721069&text&type=phone_number&app_absent=0&wame_ctl=1"
            target="_blank"
          >
            <FaWhatsapp className="size-6 hover:text-greenPrimary mx-2" />
          </a>
        </div>
      </footer>
      <span className="block lg:hidden text-center bg-zinc-800 -m-1 pb-2 text-small-bold">
        Desenvolvido por{" "}
        <a
          className="ahxterix-text uppercase font-extrabold"
          href="https://ahxterix.com.br"
          target="_blank"
        >
          Ahxterix
        </a>
      </span>
    </>
  );
};

export default Footer;
