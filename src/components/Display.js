const Display = ({ currentImg, isPaused, setIsPaused }) => {
  const setDisplayClassName = () => {
    const className =
      'bg-gray-200 rounded-2xl md:h-[540px] mb-8 shadow-lg overflow-hidden transition-shadow '

    return isPaused ? `${className} shadow-red-500` : className
  }

  return (
    <div
      className={setDisplayClassName()}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <img src={currentImg} alt="Carousel display" className="h-full w-full" />
    </div>
  )
}

export default Display
