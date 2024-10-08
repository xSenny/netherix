import React from 'react'
import { FocusCards } from './ui/focus-cards'
const collections: { title: string; src: string; href: string }[] = [
  {
    title: 'Spawns',
    src: 'https://netherixstudios.com/wp-content/uploads/2024/03/WEBP-OCTOPUS-RENDER-JPG--scaled-844x506.webp',
    href: '/collections/spawns',
  },
  {
    title: 'ArenasPvP',
    src: 'https://netherixstudios.com/wp-content/uploads/2024/03/MARCA-AGUA-Copiar-scaled-844x506.webp',
    href: '/collections/arenaspvp',
  },
  {
    title: 'SkyBlock',
    src: 'https://netherixstudios.com/wp-content/uploads/2022/07/WEB-map-78-render-scaled-844x506.webp',
    href: '/collections/skyblock',
  },
  {
    title: 'Factions',
    src: 'https://netherixstudios.com/wp-content/uploads/2021/12/WEB-build-36-render-844x506.webp',
    href: '/collections/factions',
  },
  {
    title: 'RPG Builds',
    src: 'https://netherixstudios.com/wp-content/uploads/2024/09/build89-marcadeagua-OPTI-844x506.webp',
    href: '/collections/rpg',
  },
  {
    title: 'Sky Wars',
    src: 'https://netherixstudios.com/wp-content/uploads/2021/12/WEB-build-26-render-844x506.webp',
    href: '/collections/skywars',
  },
]
const Collections = () => {
  return (
    <section id="collections" className="flex flex-col gap-20 p-20">
      <p className="text-[40px] font-bold text-center text-white">Our Collections</p>
      <FocusCards cards={collections} />
    </section>
  )
}

export default Collections
