import Logo from "../../assets/github.svg";

const Footer = () => {
  return (
    <footer className="flex items-center gap-1 w-full justify-center mt-6 pb-6 text-white">
      <span>Developed by Miller Arias -</span>
      <a
        href="https://github.com/Miller1999"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1"
      >
        <img src={Logo} alt="Github" className="w-4 h-4 text-white" />
        @miller1999
      </a>
    </footer>
  );
};

export default Footer;
