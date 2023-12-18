import React from "react";
import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <div className=" flex border border-gray-800 rounded-lg p-14 w-full max-w-7xl item-center m-auto  ">

      <div className="shadow-lg max-w-md">
        <h1 className="text-3xl font-semibold mb-4">Entre em Contato</h1>
        <ul className="space-y-4">
          <li>
            <span className="font-semibold">Whatsapp:</span>{" "}
            <a href="https://wa.me/5531992812273" className="text-blue-600">+5531992812273</a>
          </li>
          <li>
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:contato@daanrox.com" className="text-blue-600">contato@daanrox.com</a>
          </li>
          <li>
            <span className="font-semibold">LinkedIn:</span>{" "}
            <a href="https://www.linkedin.com/in/daanrox" className="text-blue-600">@daanrox</a>
          </li>

          <li>
            <span className="font-semibold">Github:</span>{" "}
            <a href="github.com/daanrox" className="text-blue-600">@daanrox</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
