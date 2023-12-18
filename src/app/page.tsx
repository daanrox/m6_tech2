import React from "react";
import Link from "next/link";

const Home: React.FC = () => {


  return (
    <main className=" justify-center items-start m-auto sm:mt-48 mt-5 flex max-w-7xl">
      <div className="w-full max-w-7xl flex flex-col items gap-10 ml-4 mr-4">
        <h2 className="lg:text-5xl text-4xl">
          Especialista em ajudar empresas a construir{" "}
          <span className="color-primary font-semibold ">soluções digitais</span>{" "}
          de alta qualidade.
        </h2>
        <p className="font-light text-lg">
          Desenvolvimento Fullstack utilizando as melhores práticas e tecnologias para criar produtos funcionais, intuitivos e visualmente atraentes.
        </p>
        <Link className="px-12 bg-primary py-2 rounded-md w-full max-w-xs text-center" href='/projects'>
          Projetos
        </Link>
      </div>
    </main>
  );
};

export default Home;
