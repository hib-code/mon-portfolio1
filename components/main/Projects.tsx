import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mes Projets
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/ai.jpg"
          title="l'intelligence artificiel"
          description="Jarvis est un assistant virtuel intelligent conçu pour automatiser et simplifier diverses tâches quotidiennes grâce à des capacités avancées d'intelligence artificielle. Ce projet utilise le traitement du langage naturel (NLP) et des algorithmes d'apprentissage automatique pour offrir une interaction fluide et intuitive avec les utilisateurs."
        />
        <ProjectCard
          src="/backmarket.webp"
          title="site web de e-commerce"
          description="un site de e-commerce moderne et interactif conçu pour offrir une expérience utilisateur fluide et engageante. Il permet aux utilisateurs de parcourir, sélectionner et acheter une vaste gamme de produits avec facilité, tout en intégrant des fonctionnalités avancées pour optimiser l'expérience d'achat en ligne."
        />
        <ProjectCard
          src="/Capture.png"
          title="Space Themed Website"
          description=" vous découvrirez une sélection de mes projets les plus significatifs et de mon travail en tant que développeur Fullstack. Mon portfolio est conçu pour offrir un aperçu complet de mes compétences techniques et créatives, avec des exemples concrets de mon expertise dans divers domaines, allant du développement web et mobile à la création de solutions logicielles innovantes."
        />
      </div>
    </div>
  );
};

export default Projects;
