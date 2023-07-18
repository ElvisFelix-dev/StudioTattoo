// social data
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { GrFacebookOption } from 'react-icons/gr'

export default function Socials() {
  return (
    <ul className="flex items-center justify-center gap-x-[30px]">
      <li>
        <a href="http://">
          <GrFacebookOption />
        </a>
      </li>
      <li>
        <a href="http://">
          <FaInstagram />
        </a>
      </li>
      <li>
        <a href="http://">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="http://">
          <FaYoutube />
        </a>
      </li>
    </ul>
  )
}
