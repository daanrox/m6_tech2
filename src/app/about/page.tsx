/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import daanroxPhoto from "../../assets/foto-Daanrox.jpg";

const About: React.FC = () => {
  return (
    <>
      <main className=" h-full m-auto flex justify-center items-center max-w-7xl">
        <div className="flex flex-col w-full max-w-7xl lg:flex-row m-auto border border-gray-800 rounded-lg">
          <Image
            className=" p-6 w-full max-w-lg "
            src={daanroxPhoto}
            alt="Daanrox Foto"
          />
          <div className="flex flex-col gap-4 p-6 justify-around">
            <span className=" text-3xl  text-primary-100">Quem sou</span>
            <h2 className=" text-2xl">Daniel Nicolau</h2>
            <h3>Desenvolvedor Fullstack</h3>

            <p>
              Com formação em Desenvolvimento Fullstack e expertise na criação
              de interfaces modernas e funcionais, meu foco é unir performance,
              animações suaves, responsividade e otimização SEO.
            </p>
            <p>
              Além do desenvolvimento web, minhas habilidades incluem a criação
              de filtros para o Instagram, modelagem 3D, ilustrações e a
              produção de figurinhas GIFs. Essa gama diversificada de
              habilidades me permite oferecer soluções criativas e
              personalizadas para projetos digitais.
            </p>

            <ul className="flex flex-row w-full justify-between flex-wrap mt-4">
              <a
                href="https://www.instagram.com/Daanrox/"
                rel="noopener"
                target="_blank"
              >
                <li className="border border-gray-800 rounded-lg p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    data-inject-url="https://daanrox.com/assets/icons/instagram.svg"
                  >
                    <path
                      d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21Z"
                      stroke="#d53dff"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    ></path>
                    <path
                      d="M21.5 4.5H10.5C7.18629 4.5 4.5 7.18629 4.5 10.5V21.5C4.5 24.8137 7.18629 27.5 10.5 27.5H21.5C24.8137 27.5 27.5 24.8137 27.5 21.5V10.5C27.5 7.18629 24.8137 4.5 21.5 4.5Z"
                      stroke="#d53dff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M22.5 11C23.3284 11 24 10.3284 24 9.5C24 8.67157 23.3284 8 22.5 8C21.6716 8 21 8.67157 21 9.5C21 10.3284 21.6716 11 22.5 11Z"
                      fill="#d53dff"
                    ></path>
                  </svg>
                </li>
              </a>

              <a
                href="https://www.linkedin.com/in/Daanrox/"
                rel="noopener"
                target="_blank"
              >
                <li className="border border-gray-800 rounded-lg p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    data-inject-url="https://daanrox.com/assets/icons/linkedin.svg"
                  >
                    <path
                      d="M26.5 4.5H5.5C4.94772 4.5 4.5 4.94772 4.5 5.5V26.5C4.5 27.0523 4.94772 27.5 5.5 27.5H26.5C27.0523 27.5 27.5 27.0523 27.5 26.5V5.5C27.5 4.94772 27.0523 4.5 26.5 4.5Z"
                      stroke="#d53dff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M15 14V22"
                      stroke="#d53dff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M11 14V22"
                      stroke="#d53dff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M15 17.5C15 16.5717 15.3687 15.6815 16.0251 15.0251C16.6815 14.3687 17.5717 14 18.5 14C19.4283 14 20.3185 14.3687 20.9749 15.0251C21.6313 15.6815 22 16.5717 22 17.5V22"
                      stroke="#d53dff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M11 11.5C11.8284 11.5 12.5 10.8284 12.5 10C12.5 9.17157 11.8284 8.5 11 8.5C10.1716 8.5 9.5 9.17157 9.5 10C9.5 10.8284 10.1716 11.5 11 11.5Z"
                      fill="#d53dff"
                    ></path>
                  </svg>
                </li>
              </a>

              <a
                href="https://Daanrox-blog.vercel.app/"
                rel="noopener"
                target="_blank"
              >
                <li className="border border-gray-800 rounded-lg p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    data-inject-url="https://daanrox.com/assets/icons/laptop.svg"
                  >
                    <path
                      d="M5 22V9C5 8.46957 5.21071 7.96086 5.58579 7.58579C5.96086 7.21071 6.46957 7 7 7H25C25.5304 7 26.0391 7.21071 26.4142 7.58579C26.7893 7.96086 27 8.46957 27 9V22"
                      stroke="#d53dff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M3 22H29V24C29 24.5304 28.7893 25.0391 28.4142 25.4142C28.0391 25.7893 27.5304 26 27 26H5C4.46957 26 3.96086 25.7893 3.58579 25.4142C3.21071 25.0391 3 24.5304 3 24V22Z"
                      stroke="#d53dff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M18 11H14"
                      stroke="#d53dff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </li>
              </a>

              <a
                href="https://discord.gg/KfmTyMdPqg"
                rel="noopener"
                target="_blank"
              >
                <li className="border border-gray-800 rounded-lg p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    data-inject-url="https://daanrox.com/assets/icons/discord.svg"
                  >
                    <path
                      d="M12 19.5C12.8284 19.5 13.5 18.8284 13.5 18C13.5 17.1716 12.8284 16.5 12 16.5C11.1716 16.5 10.5 17.1716 10.5 18C10.5 18.8284 11.1716 19.5 12 19.5Z"
                      fill="#d53dff"
                    ></path>
                    <path
                      d="M20 19.5C20.8284 19.5 21.5 18.8284 21.5 18C21.5 17.1716 20.8284 16.5 20 16.5C19.1716 16.5 18.5 17.1716 18.5 18C18.5 18.8284 19.1716 19.5 20 19.5Z"
                      fill="#d53dff"
                    ></path>
                    <path
                      d="M9.2998 10.0001C11.4676 9.32069 13.7281 8.98331 15.9998 9.00011C18.2715 8.98331 20.532 9.32069 22.6998 10.0001"
                      stroke="#d53dff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M22.6998 22C20.532 22.6794 18.2715 23.0168 15.9998 23C13.7281 23.0168 11.4676 22.6794 9.2998 22"
                      stroke="#d53dff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M19.3752 22.7627L20.8877 25.7627C20.985 25.9673 21.1505 26.1316 21.3558 26.2274C21.5611 26.3232 21.7934 26.3445 22.0127 26.2877C25.0752 25.5377 27.7252 24.2377 29.6502 22.5627C29.7953 22.4347 29.9007 22.2677 29.9539 22.0816C30.0071 21.8955 30.0058 21.6981 29.9502 21.5127L25.7127 7.3627C25.6715 7.21789 25.5968 7.08478 25.4948 6.97406C25.3927 6.86334 25.2662 6.77811 25.1252 6.7252C23.928 6.23404 22.6899 5.84922 21.4252 5.5752C21.1822 5.52197 20.928 5.5601 20.7113 5.68229C20.4946 5.80449 20.3304 6.0022 20.2502 6.2377L19.2627 9.2252"
                      stroke="#d53dff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M12.6255 22.7627L11.113 25.7627C11.0156 25.9673 10.8501 26.1316 10.6448 26.2274C10.4395 26.3232 10.2073 26.3445 9.98796 26.2877C6.92546 25.5377 4.27546 24.2377 2.35046 22.5627C2.20533 22.4347 2.09994 22.2677 2.04677 22.0816C1.9936 21.8955 1.99488 21.6981 2.05046 21.5127L6.28796 7.3627C6.3292 7.21789 6.40384 7.08478 6.50587 6.97406C6.60791 6.86334 6.73449 6.77811 6.87546 6.7252C8.07266 6.23404 9.31077 5.84922 10.5755 5.5752C10.8185 5.52197 11.0726 5.5601 11.2893 5.68229C11.5061 5.80449 11.6702 6.0022 11.7505 6.2377L12.738 9.2252"
                      stroke="#d53dff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M12 19.5C12.8284 19.5 13.5 18.8284 13.5 18C13.5 17.1716 12.8284 16.5 12 16.5C11.1716 16.5 10.5 17.1716 10.5 18C10.5 18.8284 11.1716 19.5 12 19.5Z"
                      fill="#d53dff"
                    ></path>
                    <path
                      d="M20 19.5C20.8284 19.5 21.5 18.8284 21.5 18C21.5 17.1716 20.8284 16.5 20 16.5C19.1716 16.5 18.5 17.1716 18.5 18C18.5 18.8284 19.1716 19.5 20 19.5Z"
                      fill="#d53dff"
                    ></path>
                    <path
                      d="M9.2998 10.0001C11.4676 9.32069 13.7281 8.98331 15.9998 9.00011C18.2715 8.98331 20.532 9.32069 22.6998 10.0001"
                      stroke="#d53dff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M22.6998 22C20.532 22.6794 18.2715 23.0168 15.9998 23C13.7281 23.0168 11.4676 22.6794 9.2998 22"
                      stroke="#d53dff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M19.3752 22.7627L20.8877 25.7627C20.985 25.9673 21.1505 26.1316 21.3558 26.2274C21.5611 26.3232 21.7934 26.3445 22.0127 26.2877C25.0752 25.5377 27.7252 24.2377 29.6502 22.5627C29.7953 22.4347 29.9007 22.2677 29.9539 22.0816C30.0071 21.8955 30.0058 21.6981 29.9502 21.5127L25.7127 7.3627C25.6715 7.21789 25.5968 7.08478 25.4948 6.97406C25.3927 6.86334 25.2662 6.77811 25.1252 6.7252C23.928 6.23404 22.6899 5.84922 21.4252 5.5752C21.1822 5.52197 20.928 5.5601 20.7113 5.68229C20.4946 5.80449 20.3304 6.0022 20.2502 6.2377L19.2627 9.2252"
                      stroke="#d53dff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M12.6255 22.7627L11.113 25.7627C11.0156 25.9673 10.8501 26.1316 10.6448 26.2274C10.4395 26.3232 10.2073 26.3445 9.98796 26.2877C6.92546 25.5377 4.27546 24.2377 2.35046 22.5627C2.20533 22.4347 2.09994 22.2677 2.04677 22.0816C1.9936 21.8955 1.99488 21.6981 2.05046 21.5127L6.28796 7.3627C6.3292 7.21789 6.40384 7.08478 6.50587 6.97406C6.60791 6.86334 6.73449 6.77811 6.87546 6.7252C8.07266 6.23404 9.31077 5.84922 10.5755 5.5752C10.8185 5.52197 11.0726 5.5601 11.2893 5.68229C11.5061 5.80449 11.6702 6.0022 11.7505 6.2377L12.738 9.2252"
                      stroke="#d53dff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </li>
              </a>

              <a
                href="https://github.com/Daanrox"
                rel="noopener"
                target="_blank"
              >
                <li className="border border-gray-800 rounded-lg p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    data-inject-url="https://daanrox.com/assets/icons/github.svg"
                  >
                    <path
                      d="M10.5 30C10.8944 30.0017 11.2853 29.9252 11.65 29.775C12.0147 29.6248 12.3461 29.4039 12.625 29.125C12.9039 28.8461 13.1248 28.5147 13.275 28.15C13.4252 27.7853 13.5017 27.3944 13.5 27V21"
                      stroke="#d53dff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M21.5 30C21.1056 30.0017 20.7147 29.9252 20.35 29.775C19.9853 29.6248 19.6539 29.4039 19.375 29.125C19.0961 28.8461 18.8752 28.5147 18.725 28.15C18.5748 27.7853 18.4984 27.3944 18.5 27V21"
                      stroke="#d53dff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M19 21H21C21.3944 20.9984 21.7853 21.0748 22.15 21.225C22.5147 21.3752 22.8461 21.5961 23.125 21.875C23.4039 22.1539 23.6248 22.4853 23.775 22.85C23.9252 23.2147 24.0017 23.6056 24 24V25C23.9983 25.3945 24.0748 25.7853 24.225 26.15C24.3752 26.5148 24.5961 26.8461 24.875 27.125C25.1539 27.4039 25.4853 27.6249 25.85 27.775C26.2147 27.9252 26.6056 28.0017 27 28"
                      stroke="#d53dff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M13 21H11C10.6056 20.9984 10.2147 21.0748 9.85 21.225C9.48527 21.3752 9.1539 21.5961 8.87499 21.875C8.59609 22.1539 8.37517 22.4853 8.22499 22.85C8.07481 23.2147 7.99835 23.6056 8 24V25C8.00165 25.3945 7.92519 25.7853 7.77501 26.15C7.62483 26.5148 7.40391 26.8461 7.12501 27.125C6.8461 27.4039 6.51473 27.6249 6.15 27.775C5.78528 27.9252 5.39443 28.0017 5 28"
                      stroke="#d53dff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M13.975 8C13.3875 7.08063 12.5781 6.32394 11.6212 5.79966C10.6644 5.27537 9.59104 5.00037 8.5 5C8.01488 5.83972 7.72379 6.77735 7.64809 7.74417C7.57239 8.711 7.71399 9.68251 8.0625 10.5875C7.37901 11.5951 7.00929 12.7825 7 14V15C7 16.5913 7.63214 18.1174 8.75736 19.2426C9.88258 20.3679 11.4087 21 13 21H19C20.5913 21 22.1174 20.3679 23.2426 19.2426C24.3679 18.1174 25 16.5913 25 15V14C24.9907 12.7825 24.621 11.5951 23.9375 10.5875C24.286 9.68251 24.4276 8.711 24.3519 7.74417C24.2762 6.77735 23.9851 5.83972 23.5 5C22.409 5.00037 21.3356 5.27537 20.3787 5.79966C19.4219 6.32394 18.6125 7.08063 18.025 8H13.975Z"
                      stroke="#d53dff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </li>
              </a>

              <a
                href="https://www.behance.net/Daanrox"
                rel="noopener"
                target="_blank"
              >
                <li className="border border-gray-800 rounded-lg p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    data-inject-url="https://daanrox.com/assets/icons/behance.svg"
                  >
                    <path
                      d="M21 10H29"
                      stroke="#d53dff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M20 18.9999H30C29.9979 17.8465 29.5961 16.7295 28.863 15.839C28.13 14.9486 27.1109 14.3397 25.9794 14.1161C24.8479 13.8925 23.6739 14.068 22.6572 14.6127C21.6405 15.1573 20.844 16.0376 20.4034 17.1035C19.9627 18.1693 19.9051 19.355 20.2403 20.4586C20.5756 21.5622 21.2829 22.5155 22.242 23.1562C23.2011 23.7969 24.3525 24.0854 25.5004 23.9726C26.6483 23.8597 27.7215 23.3526 28.5375 22.5374"
                      stroke="#d53dff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M4 15.5H12.25C13.3772 15.5 14.4582 15.9478 15.2552 16.7448C16.0522 17.5418 16.5 18.6228 16.5 19.75C16.5 20.8772 16.0522 21.9582 15.2552 22.7552C14.4582 23.5522 13.3772 24 12.25 24H4V8H10.75C11.7446 8 12.6984 8.39509 13.4017 9.09835C14.1049 9.80161 14.5 10.7554 14.5 11.75C14.5 12.7446 14.1049 13.6984 13.4017 14.4017C12.6984 15.1049 11.7446 15.5 10.75 15.5"
                      stroke="#d53dff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
//1640x915