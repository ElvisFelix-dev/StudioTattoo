import Logo from '../src/assets/img/header/logo.svg'
import GalleryImg1 from '../src/assets/img/gallery/1.png'
import GalleryImg2 from '../src/assets/img/gallery/2.png'
import GalleryImg3 from '../src/assets/img/gallery/3.png'
import GalleryImg4 from '../src/assets/img/gallery/4.png'
import GalleryImg5 from '../src/assets/img/gallery/5.png'
import GalleryImg6 from '../src/assets/img/gallery/6.png'
import GalleryImg7 from '../src/assets/img/gallery/7.png'
import GalleryImg8 from '../src/assets/img/gallery/8.png'
import QuoteImg from '../src/assets/img/testimonial/quote.svg'

// icons

import {
  FaPlay,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa'

export const headerData = {
  logo: Logo,
}

export const heroData = {
  title: 'Olá, Somos á InkZone.',
  subtitle:
    'Tatuagens têm seu próprio poder único e magia. Elas não apenas embelezam o corpo, mas também a psique.',
  btnText: 'read more',
}

export const aboutData = {
  title: 'Sobre Nós:',
  subtitle1:
    'A InkZone Tatuagens é um estúdio de tatuagem dedicado a transformar ideias e histórias em obras de arte na pele. Valorizamos a originalidade e trabalhamos em estreita colaboração com nossos clientes para criar designs personalizados que reflitam suas personalidades e significados especiais.',
  subtitle2:
    'Além de oferecer serviços de alta qualidade, priorizamos a segurança e a higiene, garantindo um ambiente acolhedor e estéril para todos os nossos clientes.',
  href: '/about',
}

export const galleryData = {
  title: 'Galeria:',
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
  ],
}

export const interviewData = {
  title:
    '“Faça o que você quiser. Seu tatuador nunca irá lhe dizer qual tatuagem deve fazer.”',
  btnText: 'Assistir Agora',
  btnIcon: <FaPlay />,
}

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      'Amei o trabalho da InkZone! Eles fizeram uma tatuagem incrível para mim, exatamente do jeito que eu queria. Além disso, toda a equipe foi super atenciosa e profissional durante o processo. Recomendo muito!',
    name: 'Marcos',
    occupation: 'Motoboy',
  },
  {
    quoteImg: QuoteImg,
    message:
      'Encontrei a InkZone por indicação de um amigo e não me arrependo! Fiz minha primeira tatuagem com eles e fiquei impressionado com a qualidade do trabalho e a higiene do estúdio. O tatuador foi muito cuidadoso e experiente. Com certeza voltarei para fazer mais tatuagens!',
    name: 'Ana',
    occupation: 'Dentista',
  },
  {
    quoteImg: QuoteImg,
    message:
      'A tatuadora que me atendeu foi extremamente criativo e captou exatamente a ideia que eu tinha em mente. A atmosfera do estúdio é ótima, me senti muito à vontade durante toda a sessão.',
    name: 'Laura',
    occupation: 'Hair Style',
  },
  {
    quoteImg: QuoteImg,
    message:
      'Sou cliente fiel da InkZone há anos e não troco por nada! Eles têm uma variedade incrível de estilos de tatuagem e sempre me surpreendem com o talento dos tatuadores.',
    name: 'Douglas',
    occupation: 'Operador de Máquinas',
  },
]

export const contactData = {
  title: 'Contato:',
  info: [
    {
      title: 'Studio Matão',
      subtitle:
        'Nosso estúdio em Matão, um espaço criado para expressar sua personalidade e história por meio de tatuagens únicas e marcantes.',
      address: {
        icon: <FaMapMarkerAlt />,
        name: 'Centro - Rua 15 de Novembro 154',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+55 16 3382-0000',
      },
      cel: {
        icon: <FaWhatsapp />,
        number: '+55 16 99190 0000',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'contato@studioinkzone.com.br',
      },
    },
  ],
  form: {
    name: 'Nome',
    email: 'Seu melhor email',
    message: 'Sua mensagem',
    btnText: 'Enviar',
  },
}

export const footerData = {
  about: {
    title: 'Nosso Studio InkZone',
    subtitle:
      'Nossa equipe está pronta para criar tatuagens incríveis e significativas que vão além das expectativas.',
    address: {
      icon: <FaMapMarkerAlt />,
      name: 'Centro - Rua 15 de Novembro 154, Matão',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '+55 16 3382-0000',
    },
    cel: {
      icon: <FaWhatsapp />,
      number: '+55 16 99190 0000',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'contato@studioinkzone.com.br',
    },
  },
}
