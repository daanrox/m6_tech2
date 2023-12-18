export interface Project {
    id: number
    name: string,
    print: string,
    description: string,
    deploy: string | null,
    repository: string
}


export const projects: Array<Project> = [
    {
        id: 7,
        name: 'Auau',
        print: '/prints/auau.jpg',
        description: 'Aplicação em React para o petshop Auau. Interface dinâmica para compra de produtos e serviços para pets. Intuitiva, responsiva e pronta para oferecer a melhor experiência aos usuários.',
        deploy: "https://auau.vercel.app",
        repository: "https://github.com/daanrox/Auau"
    },
    {
        id:6,
        name: 'API Cashout Pix',
        print: '/prints/pixcashout.jpg',
        description: 'Essa API foi desenvolvida para oferecer a funcionalidade de resgate gratuito de transferências PIX de clientes. Projetada para um sistema de recompensa ou saque de teste, essa API permite que usuários resgatem transferências PIX gratuitas com débito na conta do cliente.',
        deploy: null,
        repository: "https://github.com/daanrox/Pix-CashOut"
    },
    {
        id:5,
        name: 'Kenzie Feed',
        print: '/prints/kenziefeed.jpg',
        description: 'O Kenzie-Feed é uma aplicação de jornal online com funcionalidades de administrador. Oferece rotas públicas para cadastro, login de usuários e operações CRUD para criar, editar e excluir publicações.',
        deploy: "https://kenzie-feed-six.vercel.app",
        repository: "https://github.com/daanrox/Kenzie-Feed"
    },
    {
        id: 2,
        name: 'Social Linking',
        print: '/prints/sociallinking.jpg',
        description: 'O site destinado a armazenar links para redes sociais e agendamentos, seguindo o estilo do Linktree, oferecendo atalhos e social linking.',
        deploy: "https://daanrox.com/robertalopes/",
        repository: "https://github.com/daanrox/Social-Linking"
    },
    {
        id: 1,
        name: 'Meu Próximo Destino',
        print: '/prints/meuproximodestino.jpg',
        description: 'Com uma abordagem simples e intuitiva, apresenta informações valiosas sobre destinos populares, pontos turísticos, dicas de hospedagem, alimentação e experiências locais.',
        deploy: "https://daanrox.github.io/Meu-Proximo-Destino/",
        repository: "https://github.com/daanrox/Meu-Proximo-Destino"
    },
    {
        id: 3,
        name: 'Kenzie Hub',
        print: '/prints/kenziehub.jpg',
        description: 'Projeto em React com cadastro e login de usuários, que se autenticados, podem criar uma lista de tecnologias, e selecionar editando o nível atual de conhecimento em cada tecnologia.',
        deploy: "kenzie-hub-ten-chi.vercel.app/dashboard",
        repository: "https://github.com/daanrox/Kenzie-Hub"
    },
    {
        id:4,
        name: 'ContactList',
        print: '/prints/contactlist.jpg',
        description: 'Este projeto consiste em um avançado gerenciador de contatos, desenvolvido utilizando React + Typescript como frontend e NestJS como backend. Com um foco especial na experiência do usuário e na eficiência operacional, a aplicação oferece um conjunto abrangente de funcionalidades para gerenciar contatos de maneira ágil e segura.',
        deploy: "https://contactlist-silk.vercel.app",
        repository: "https://github.com/daanrox/Tech-Contact-List"
    },
    
  



]

