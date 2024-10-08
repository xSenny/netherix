import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type Build = {
  name: string
  description: string
  image: string
  size: string
  interiors: string
  identifier: string
}

export type Collection = {
  builds: Build[]
  identifier: string
  image: string
  name: string
}

export const collections: Collection[] = [
  {
    identifier: 'spawns',
    name: 'Spawns',
    image:
      'https://netherixstudios.com/wp-content/uploads/2024/03/WEBP-OCTOPUS-RENDER-JPG--scaled-844x506.webp',
    builds: [
      {
        name: 'Space Dome Skyblock Lobby',
        identifier: 'space-dome-skyblock-lobby',
        description:
          'Spawn For Skyblock Server a space ship or a place in outer space where great humans are housed protected by a very large dome and turret. Or u can call it “Space Dome”',
        image: 'https://netherixstudios.com/wp-content/uploads/2024/08/phoenix-r9-OPTI-scaled.webp',
        size: '250 x 250',
        interiors: 'Yes',
      },
      {
        name: 'AVALON SPAWN',
        identifier: 'avalon-spawn',
        description:
          'Enter a fantasy world and discover the magic of Minecraft with this build called “Avalon Spawn” ! Immerse yourself in a breathtaking landscape where each landscaping has a meticulously crafted design',
        image: 'https://netherixstudios.com/wp-content/uploads/2024/04/1-OPTI.webp',
        size: '300 x 300',
        interiors: 'No',
      },
      {
        name: 'OCTOPUS SPAWN ',
        identifier: 'octopus-spawn',
        description:
          'Discover the various islands where you’ll have enchantment zone, crates zone, farm zone, portal zone, portal zone, underwater zone, and a detailed design and underwater atmosphere will immerse you in an unforgettable experience',
        image:
          'https://netherixstudios.com/wp-content/uploads/2024/03/WEBP-OCTOPUS-RENDER-JPG--scaled.webp',
        size: '250 x 250',
        interiors: 'Partially',
      },
      {
        name: 'TROPICAL SPAWN',
        identifier: 'tropical-spawn',
        description:
          'This tropical island is a paradise on earth, a refuge where natural beauty and serenity intertwine -Spawn location-Location for NPCS -Location for crates',
        image: 'https://netherixstudios.com/wp-content/uploads/2024/01/nanilum-tropical-10.webp',
        size: '250 x 250',
        interiors: 'No',
      },
      {
        name: 'SANTA’S TOY FACTORY',
        identifier: 'santa-toy-factory',
        description:
          'The Christmas season is coming and with it the atmosphere we need when it comes to enjoying the entertainment that Minecraft, Santa’s Factory, offers us.',
        image:
          'https://netherixstudios.com/wp-content/uploads/2023/11/SANTAS-NANILUM-1-scaled.webp',
        size: '200 x 200',
        interiors: 'Yes',
      },
      {
        name: 'ORIGINS MAP',
        identifier: 'origins-map',
        description:
          'Origins is a traditional survival mode, but designed to add hundreds of elements to the game and have many players at the same time. We have designed this map for those who like to make a difference in the player experience, immerse yourself in this map and give the special touch to your players',
        image:
          'https://netherixstudios.com/wp-content/uploads/2023/11/Render-OriginsMap-escalado-wpb.webp',
        size: '600 x 600',
        interiors: 'Yes',
      },
    ],
  },
  {
    identifier: 'arenaspvp',
    name: 'Arenas PVP',
    image:
      'https://netherixstudios.com/wp-content/uploads/2024/03/MARCA-AGUA-Copiar-scaled-844x506.webp',
    builds: [
      {
        name: 'NATURAL MYSTIC DRAGON MAP',
        identifier: 'natural-mystic-dragon-map',
        description:
          'Welcome to our fascinating map “Natural Mystic Dragon”, a fantasy-themed creation designed especially for Minecraft servers. Enter a draconic world and discover the majesty of this unique work.',
        image:
          'https://netherixstudios.com/wp-content/uploads/2024/09/build89-marcadeagua-OPTI-scaled.webp',
        size: '480 x 480',
        interiors: 'No',
      },
      {
        name: 'SHIP SUNK ',
        identifier: 'ship-sunk',
        description:
          'Dive into the Deep Sea Arena, a PvP arena in Minecraft. With a design inspired by the seabed, the map is 200×200 in size, the battle comes to life underwater.',
        image:
          'https://netherixstudios.com/wp-content/uploads/2024/03/MARCA-AGUA-Copiar-scaled.webp',
        size: '200 x 200',
        interiors: 'Not Apply',
      },
      {
        name: 'FLORAL PVP MAP',
        identifier: 'floral-pvp-map',
        description:
          'The PvP map is adorned with lush floral meadows that bring to life a colorful and vibrant landscape. Fights flourish in this enchanting setting, where nature itself seems to witness every confrontation.',
        image: 'https://netherixstudios.com/wp-content/uploads/2024/02/florar-nanibel-2.webp',
        size: '180 x 180',
        interiors: 'Not Apply',
      },
      {
        name: 'TOY KINGDOM',
        identifier: 'toy-kingdom',
        description:
          'Colored blocks, game versions and mods intertwine to create a unique and dynamic experience, where victory depends not only on brute force, but also on cunning and adaptability in this exciting battlefield.',
        image: 'https://netherixstudios.com/wp-content/uploads/2024/02/TOY-KINGDOM-7.webp',
        size: '250 x 250',
        interiors: 'Not Apply',
      },
      {
        name: 'ARENA WILD WEST',
        identifier: 'arena-wild-west',
        description:
          'The stifling heat is not the only threat; Predators prowl, ready to attack those who venture too far from the safety of their makeshift shelters.',
        image:
          'https://netherixstudios.com/wp-content/uploads/2023/11/SANTAS-NANILUM-1-scaled.webp',
        size: '180 x 180',
        interiors: 'Not Apply',
      },
      {
        name: 'NUTCRACKER PvP MAP',
        identifier: 'nutcracker-pvp-map',
        description: 'where victory is the greatest gift of all!',
        image: 'https://netherixstudios.com/wp-content/uploads/2023/11/NUTCRACKER-PvP-MAP-1.jpg',
        size: '150 x 150',
        interiors: 'Not Apply',
      },
    ],
  },
  {
    identifier: 'skyblock',
    name: 'SkyBlock',
    image:
      'https://netherixstudios.com/wp-content/uploads/2022/07/WEB-map-78-render-scaled-844x506.webp',
    builds: [
      {
        name: 'Space Dome Skyblock Lobby',
        identifier: 'space-down-skyblock-lobby',
        description:
          'Spawn For Skyblock Server a space ship or a place in outer space where great humans are housed protected by a very large dome and turret. Or u can call it “Space Dome”',
        image: 'https://netherixstudios.com/wp-content/uploads/2024/08/phoenix-r9-OPTI-scaled.webp',
        size: '250 x 250',
        interiors: 'Yes',
      },
      {
        name: 'Fantasy Faction Spawn Dragon Lair’s',
        identifier: 'fantasy-faction-spawn-dragon-lair',
        description:
          'Fantasy Faction Spawn | Dragon Lair’s is Hub/Spawn for Minecraft Spawn Lobby Skyblock/Faction Lobby. Include 10 Npc Spot,Crates,Blackmarket,Mob Area,Warzone,KOTH,Enchantment Area,Leaderboard,Portal.',
        image:
          'https://netherixstudios.com/wp-content/uploads/2024/07/Fantasy-Dragons-Lairs-11-OPTI.webp',
        size: '500 x 500',
        interiors: 'No',
      },
      {
        name: 'ORIGINS MAP',
        identifier: 'origins-map',
        description:
          'Origins is a traditional survival mode, but designed to add hundreds of elements to the game and have many players at the same time. We have designed this map for those who like to make a difference in the player experience, immerse yourself in this map and give the special touch to your players',
        image:
          'https://netherixstudios.com/wp-content/uploads/2023/11/Render-OriginsMap-escalado-wpb.webp',
        size: '600 x 600',
        interiors: 'Yes',
      },
    ],
  },
  {
    identifier: 'factions',
    name: 'Factions',
    image:
      'https://netherixstudios.com/wp-content/uploads/2021/12/WEB-build-36-render-844x506.webp',
    builds: [
      {
        name: 'SPAWN RED CITY',
        identifier: 'spawn-red-city',
        description:
          'Spawn Red City, a semi-medieval themed map in vibrant red colors. Explore the exterior design and numerous places. Check the 3D model for a closer look. Perfect for your server’s spawn area!',
        image: 'https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-70-render1.webp',
        size: '350 x 250',
        interiors: 'No',
      },
      {
        name: 'Fantasy Faction Spawn Dragon Lair’s',
        identifier: 'fantasy-faction-spawn-dragon-lairs',
        description:
          'Fantasy Faction Spawn | Dragon Lair’s is Hub/Spawn for Minecraft Spawn Lobby Skyblock/Faction Lobby. Include 10 Npc Spot,Crates,Blackmarket,Mob Area,Warzone,KOTH,Enchantment Area,Leaderboard,Portal.',
        image:
          'https://netherixstudios.com/wp-content/uploads/2024/07/Fantasy-Dragons-Lairs-11-OPTI.webp',
        size: '500 x 500',
        interiors: 'No',
      },
      {
        name: 'Takayama Village',
        identifier: 'takayama-village',
        description:
          'Enter the world of Takayama Village, a Japanese-inspired Minecraft map. Explore the majestic temple and authentic village. Check the 3D model for a closer look. Immerse yourself in Japanese culture!',
        image: 'https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-68-render.webp',
        size: '350 x 280',
        interiors: 'Partially',
      },
    ],
  },
  {
    identifier: 'rpg',
    name: 'RPG',
    image:
      'https://netherixstudios.com/wp-content/uploads/2024/09/build89-marcadeagua-OPTI-844x506.webp',
    builds: [
      {
        name: 'ORIGINS MAP',
        identifier: 'origins-map',
        description:
          'Origins is a traditional survival mode, but designed to add hundreds of elements to the game and have many players at the same time. We have designed this map for those who like to make a difference in the player experience, immerse yourself in this map and give the special touch to your players',
        image:
          'https://netherixstudios.com/wp-content/uploads/2023/11/Render-OriginsMap-escalado-wpb.webp',
        size: '600 x 600',
        interiors: 'Yes',
      },
      {
        name: 'NATURAL MYSTIC DRAGON MAP',
        identifier: 'natural-mystic-dragon-map',
        description:
          'Welcome to our fascinating map “Natural Mystic Dragon”, a fantasy-themed creation designed especially for Minecraft servers. Enter a draconic world and discover the majesty of this unique work.',
        image:
          'https://netherixstudios.com/wp-content/uploads/2024/09/build89-marcadeagua-OPTI-scaled.webp',
        size: '480 x 480',
        interiors: 'No',
      },
      {
        name: 'Kasandry Island',
        identifier: 'kasandry-island',
        description:
          'Explore our diverse Floating Island Minecraft map with themes like “End,” “Steampunk,” “Medieval,” “Space,” and more. Discover volcanoes, caves, villages, and a chained dragon. Check out the 3D model before you buy!',
        image: 'https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-74-render.webp',
        size: '400 x 310',
        interiors: 'Yes',
      },
    ],
  },
  {
    identifier: 'skywars',
    name: 'SkyWars',
    image:
      'https://netherixstudios.com/wp-content/uploads/2021/12/WEB-build-26-render-844x506.webp',
    builds: [
      {
        name: 'Sky Island',
        identifier: 'sky-island',
        description:
          'Experience the immersive Skywars lobby for your Minecraft server. Lively vegetation, parkour challenges, and a fearsome dragon. Check out the 3D model to explore every corner!',
        image: 'https://netherixstudios.com/wp-content/uploads/2022/12/NutriaSaurio-Build-1.webp',
        size: '139 x 142',
        interiors: 'Partially',
      },
      {
        name: 'ICE CREAM',
        identifier: 'ice-cream',
        description:
          'Dive into Candy Skywars! Battle it out on ice cream cone-shaped islands in this sweet-themed Minecraft map. The central island is a giant ice cream sundae. See the 3D model for the full experience.',
        image: 'https://netherixstudios.com/wp-content/uploads/2021/12/WEB-build-45-render.webp',
        size: '200 x 200',
        interiors: 'No',
      },
      {
        name: 'VILLAGE SKYWARS ARENA',
        identifier: 'village-skywars-arena',
        description:
          'Experience a thrilling Medieval Skywars arena with mini islands, cozy houses, and a central tree hiding a secret cave. Check the 3D model before you buy!',
        image: 'https://netherixstudios.com/wp-content/uploads/2021/12/WEB-build-44-render.webp',
        size: '200 x 200',
        interiors: 'Partially',
      },
    ],
  },
]
