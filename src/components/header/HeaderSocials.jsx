import React from "react";
import { ImLinkedin } from "react-icons/im";
import { GoMarkGithub } from "react-icons/go";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/federico-abelda%C3%B1o-0b0429250/"
        target="_blank"
      >
        <ImLinkedin />
      </a>
      <a href="https://github.com/GasFeDev" target="_blank">
        <GoMarkGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
