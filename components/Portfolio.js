import Image from 'next/image'
import { images } from './portfolio/data'

export default function Portfolio(props) {
  return (
    <>
      <div className="grid grid-cols-4">
        {images.map((image) => (
          <div
            className="h-64 w-full relative border-1 transform hover:scale-110 transition-transform duration-500 cursor-pointer"
            key={image.filename}
            onClick={() => {
              props.setModal(true)
              props.setImage(image)
            }}
          >
            <Image
              src={`/portfolio/${image.filename}`}
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
        ))}
      </div>
    </>
  )
}
