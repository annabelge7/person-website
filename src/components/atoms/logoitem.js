import Image from 'next/image'

const LogoItem = ({ href, imgSrc, altText }) => (
  <li>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image
        src={imgSrc}
        alt={altText}
        width={500}
        height={300}
        className="size-9 p-1"
      />
    </a>
  </li>
)

export default LogoItem
