import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
  model: string;
  bg: string;
  image: string;
}

const Card = ({title, subtitle, model, bg, image}: Props) => {

  return (
    <div className="w-40 h-40 md:w-44 md:h-44 rounded-xl">
      <div className="position relative block w-full h-full rounded-md">
        <Image
          className="w-full h-full position relative rounded-md"
          src={bg}
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="position absolute top-0 left-0 z-2 w-full h-full backdrop-blur-xl rounded-md py-3 px-4">
          <Image
            className="position absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-25%]"
            src={image}
            alt=""
            width={74}
            height={74}
          />
          <div className="position absolute w-32 md:w-36">
            <h1 className="text-xl font-semibold text-black">{title}</h1>
            <p className="text-xs text-black/30 font-semibold whitespace-nowrap overflow-hidden text-ellipsis mb-1">{subtitle}</p>
            <span className="px-2 py-1 rounded-full bg-white text-black text-xs">{model}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card