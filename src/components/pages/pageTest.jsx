import React from "react";
import Title from "../micro/Title";
import Bouton from "../micro/Bouton.jsx";
import But from "../micro/But"
import Formulaire from "../layout/Formulaire";

const pageTest = () => {
  return (
    <>
      <Title />
      <But />
      <Bouton texte="cliquez moi" />
      <Bouton texte="reset" />
      <Bouton texte="ecrire dans le DOM" />
      <Formulaire />
    </>
  );
};

export default pageTest;
