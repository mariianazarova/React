import { useEffect, useState } from "react";
import styled from "styled-components";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("ukraine");

  const handleChangeLanguage = () => {
    setLanguage(
      localStorage.getItem("burger_lang") === "ukraine"
        ? "english"
        : "ukraine"
    );
  };

  useEffect(() => {
    localStorage.setItem("burger_lang", language);
  });

  return (
    <SwitcherStyled>
      <img
        onClick={handleChangeLanguage}
        src={require(`../../../assets/${language}.png`)}
        width={24}
        alt="Language switceher"
      />
    </SwitcherStyled>
  );
};

const SwitcherStyled = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export default LanguageSwitcher;
