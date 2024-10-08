import { HoverEffect } from "./ui/card-hover-effect"

const reasons = [
  {
    title: 'Expert Craftsmanship',
    description:
      'Our builders are experienced professionals who create stunning, intricate designs that elevate your Minecraft experience.',
  },
  {
    title: 'Unique Designs',
    description:
      'We offer a diverse range of unique building styles and themes, ensuring that you find the perfect fit for your server or personal world.',
  },
  {
    title: 'Customizable Options',
    description:
      'Choose from a variety of customizable options to tailor each build to your specific preferences and needs.',
  },
  {
    title: 'Fast Turnaround',
    description:
      'We pride ourselves on delivering high-quality builds in a timely manner, so you can enjoy your new creations without long wait times.',
  },
  {
    title: 'Community Support',
    description:
      'Join a vibrant community of Minecraft enthusiasts who share ideas, feedback, and support, enhancing your overall experience.',
  },
  {
    title: 'Satisfaction Guarantee',
    description:
      'We stand by our work, offering a satisfaction guarantee to ensure you’re thrilled with your new Minecraft builds.',
  },
]

const ChooseUs = () => {
  return (
    <div className="flex flex-col p-8 lg:p-20 text-white gap-10 lg:gap-20">
      <p className="text-[40px] font-bold text-center">Why choose us?</p>
      <HoverEffect items={reasons} />
    </div>
  )
}

export default ChooseUs
