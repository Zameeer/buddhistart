import { Palette, ShovelIcon as Chisel, Building, Home } from "lucide-react"

const services = [
  {
    title: "Wall Art Carvings",
    description:
      "Intricate stone and wood carvings that bring depth and texture to any wall, featuring traditional Buddhist motifs and symbols.",
    icon: <Chisel className="h-12 w-12 text-[#f2906c]" />,
  },
  {
    title: "Buddhist Paintings",
    description:
      "Vibrant and detailed paintings that depict Buddhist deities, mandalas, and scenes from Buddhist texts, created with traditional techniques.",
    icon: <Palette className="h-12 w-12 text-[#f2906c]" />,
  },
  {
    title: "Monastery Design",
    description:
      "Comprehensive design and artistic services for monasteries, including interior and exterior artwork that honors Buddhist traditions.",
    icon: <Building className="h-12 w-12 text-[#f2906c]" />,
  },
  {
    title: "Residential & Commercial Art",
    description:
      "Custom Buddhist art pieces for homes, hotels, and businesses that create a peaceful and spiritually enriching environment.",
    icon: <Home className="h-12 w-12 text-[#f2906c]" />,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            We offer a range of artistic services specializing in Buddhist art forms, from intricate carvings to vibrant
            paintings for various spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
