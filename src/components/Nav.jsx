export default function Nav() {
  return (
    <nav>
      <ul className="flex gap-x-[58px]">
        <li>
          <a
            className="transition duration-300 link hover:border-b-[3px] hover:border-dark"
            href="#home"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="transition duration-300 link hover:border-b-[3px] hover:border-dark"
            href="#about"
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            className="transition duration-300 link hover:border-b-[3px] hover:border-dark"
            href="#galery"
          >
            Galeria
          </a>
        </li>
        <li>
          <a
            className="transition duration-300 link hover:border-b-[3px] hover:border-dark"
            href="#special"
          >
            Especialidades
          </a>
        </li>
        <li>
          <a
            className="transition duration-300 link hover:border-b-[3px] hover:border-dark"
            href="#testimonial"
          >
            Depoimentos
          </a>
        </li>
        <li>
          <a
            className="transition duration-300 link hover:border-b-[3px] hover:border-dark"
            href="#contact"
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  )
}
