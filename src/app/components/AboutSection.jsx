"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Bienvenue sur mon portfolio! Je m'appelle Nouffel Fourar, et je suis sur le point de terminer mes études en informatique au collège la cité . Depuis mon entrée dans le monde de l'informatique, j'ai nourri une passion inébranlable pour les technologies innovantes et les solutions créatives aux problèmes complexes.

Durant mon parcours , j'ai acquis des compétences variées et approfondies dans des domaines tels que la programmation, le développement web, l'intelligence artificielle et la cybersécurité. Parmi mes projets notables, vous découvrirez un système de gestion de bases de données optimisé que j'ai développé lors de mon stage chez telus, ainsi qu'une application web interactive conçue pour faciliter l'apprentissage en ligne, créée en collaboration avec une équipe de quatre étudiants.

En plus de mes compétences techniques, j'ai eu l'opportunité de travailler sur des projets de groupe qui ont renforcé mes aptitudes en communication et en gestion de projet. Mon stage chez telus m'a également permis de comprendre les exigences du monde professionnel et d'appliquer mes connaissances théoriques dans un environnement réel.

Ce portfolio est une vitrine de mes réalisations et de ma progression en tant qu'étudiant en informatique. Je suis impatient de continuer à explorer ce domaine fascinant et de contribuer à des projets innovants. Je vous remercie de votre intérêt et vous souhaite une agréable visite de mon portfolio.

          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
