import { useState } from 'react'
import Display from './Display'
import Pagination from './Pagination'
import {
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
} from '../assets'

const Carousel = () => {
  const [current, setCurrent] = useState(0)
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10]
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div className="pt-3 mx-4 md:w-[1000px] md:mx-auto">
      <Display
        currentImg={images[current]}
        isPaused={isPaused}
        setIsPaused={setIsPaused}
      />
      <Pagination
        images={images}
        current={current}
        setCurrent={setCurrent}
        isPaused={isPaused}
      />
    </div>
  )
}

export default Carousel
