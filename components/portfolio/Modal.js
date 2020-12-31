import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Modal(props) {
  const image = props.image
  const modalContent = useRef(null)

  const closeModal = (e) => {
    // close modal if clicked outside it :)
    if (!modalContent.current.contains(e.target)) {
      props.setModal(false)
    }
  }

  return (
    <div
      onClick={closeModal}
      className="fixed bg-bland h-screen w-full flex items-center justify-center z-50"
    >
      <div
        ref={modalContent}
        className={`bg-white ${
          image.position === 'landscape' ? `w-4/5` : `w-1/2`
        } flex items-center justify-between`}
      >
        <div
          className={`${
            image.position === 'landscape' ? `w-2/3 h-96` : `w-1/2 h-112`
          } relative`}
        >
          <Image
            src={`/portfolio/${image.filename}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="px-8">
          <h5 className="text-3xl">{image.description}</h5>
          <div className="mt-4">
            <Link href={`/portfolio/${image.filename}`}>
              <a
                target="_blank"
                className="py-2 px-6 bg-gray-300 tracking-wide hover:bg-gray-400"
              >
                View Full Image
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
