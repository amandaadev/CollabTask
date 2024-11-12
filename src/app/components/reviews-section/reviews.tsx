"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Fernando",
    feedback:
      "Gosto muito do ColabTask, porque ele otimiza muito meu fluxo de trabalho! Agora consigo ver e editar tarefas em tempo real. Além disso, o design é muito bom.",
    rating: "Nota",
    icon: "⭐️",
    score: "10",
    image: "/img/perfil/fernando.jpg",
  },
  {
    name: "Julia",
    feedback:
      "Estava procurando uma solução prática e eficiente para minha lista de tarefas, e o ColabTask superou minhas expectativas! Agiliza muito meu dia a dia.",
    rating: "Amei",
    icon: "❤️",
    image: "/img/perfil/Julia.jpeg",
  },
  {
    name: "Eiji",
    feedback:
      "Gostei muito da experiência com o ColabTask! Agora posso organizar melhor as tarefas, e o melhor de tudo é que posso acompanhar e gerenciar tudo em uma plataforma simples e eficiente.",
    rating: "Gostei",
    icon: "👍",
    image: "/img/perfil/Eiji.jpg",
  },
  {
    name: "Matheus",
    feedback:
      "Desde que comecei a usar, consigo gerenciar minhas tarefas com muito mais eficácia. O suporte a múltiplos dispositivos torna o uso mais prático. Com certeza recomendo!",
    rating: "Confiável",
    icon: "😊",
    image: "/img/perfil/matheus.jpg",
  },
  {
    name: "Carol",
    feedback:
      "Ferramenta incrível. A segurança da autenticação e a capacidade de colaboração em tempo real tornam o ColabTask indispensável para mim.",
    rating: "Nota 10",
    icon: "⭐️",
    image: "/img/perfil/carol.jpg",
  },
  {
    name: "Vitor",
    feedback:
      "Usar o ColabTask tem sido uma experiência incrível. É simples, intuitivo e ideal para o dia a dia. Me ajuda muito a focar no trabalho e aumentar minha produtividade!",
    rating: "Amei",
    icon: "❤️",
    image: "/img/perfil/vitor.jpg",
  },
  {
    name: "Fernanda",
    feedback:
      "O ColabTask transformou minha rotina! Posso organizar todas as minhas tarefas de forma prática e fácil. Recomendo para todos que querem mais produtividade no dia a dia!",
    rating: "Perfeito",
    icon: "🌟",
    image: "/img/perfil/fernanda.jpg",
  },
  {
    name: "Lucas",
    feedback:
      "Desde que comecei a usar o ColabTask, meu fluxo de trabalho ficou muito mais organizado. Gosto da facilidade de uso e das funcionalidades intuitivas. Excelente!",
    rating: "Ótimo",
    icon: "👍",
    image: "/img/perfil/lucas.jpg",
  },
  {
    name: "Ana",
    feedback:
      "A experiência com o ColabTask é incrível! Consigo ver o progresso das minhas tarefas e o design é muito agradável. Faz toda a diferença na minha produtividade!",
    rating: "Super útil",
    icon: "✨",
    image: "/img/perfil/ana.jpg",
  },
  {
    name: "Pedro",
    feedback:
      "Ferramenta indispensável! A agilidade e organização que o ColabTask proporciona são incomparáveis. Meus dias ficaram muito mais produtivos desde que comecei a usar.",
    rating: "Excelente",
    icon: "🚀",
    image: "/img/perfil/pedro.jpg",
  },
];

const SectionReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] p-4">
      <h1 className="text-center text-[#64183F] font-archivo-bold font-bold text-[32px] p-12">
        Avaliações
      </h1>
      <Slider {...settings} className="m-8">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 mt-20">
            <div className="w-[333px] h-[364px] bg-white rounded-2xl p-6 shadow-md text-[#7C7777] border-4 border-[#64183F]">
              <div className="flex flex-col items-center mb-4">
                {/* Exibe a imagem de perfil */}
                <img
                  src={review.image}
                  alt={`${review.name} profile`}
                  className="w-16 h-16 rounded-full object-cover mb-2"
                />
                <h3 className="font-semibold text-center">{review.name}</h3>
              </div>

              <div className="h-32">
                <p className="mb-4 text-justify">{review.feedback}</p>
              </div>
              <div className="">
                <div className="border-t border-gray-300 my-4 mb-5 mt-5"></div>
                <div className="flex flex-col items-end space-y-1">
                  <span>
                    {review.rating} {review.score}
                  </span>
                  <span className=" mb-6">{review.icon}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SectionReviews;
