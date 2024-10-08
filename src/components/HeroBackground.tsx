import { ParallaxScroll } from "./ui/parallax-scroll"

const HeroBackground = () => {

  const images = [
    'https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-75-render-web-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/07/WEB-map-78-render-scaled-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-73-render-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-75-render-web-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/07/WEB-map-78-render-scaled-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-73-render-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-75-render-web-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/07/WEB-map-78-render-scaled-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-73-render-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-75-render-web-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/07/WEB-map-78-render-scaled-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-73-render-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-75-render-web-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/07/WEB-map-78-render-scaled-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-73-render-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-75-render-web-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/07/WEB-map-78-render-scaled-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-73-render-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-75-render-web-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/07/WEB-map-78-render-scaled-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-73-render-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-75-render-web-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/07/WEB-map-78-render-scaled-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-73-render-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-75-render-web-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/07/WEB-map-78-render-scaled-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-73-render-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-75-render-web-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/07/WEB-map-78-render-scaled-844x506.webp',
    'https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-73-render-844x506.webp',
  ]

  return (
    <div className="w-full absolute top-0 left-0 -z-10">
      <ParallaxScroll
        images={images}
      />
    </div>
  )
}

export default HeroBackground
