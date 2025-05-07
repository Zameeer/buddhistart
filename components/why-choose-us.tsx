import { Award, Clock, Brush, Users } from "lucide-react"

const reasons = [
  {
    title: "Authentic Craftsmanship",
    description:
      "Our artists are trained in traditional Buddhist art techniques passed down through generations, ensuring authenticity in every piece.",
    icon: <Brush className="h-10 w-10 text-[#f2906c]" />,
  },
  {
    title: "Spiritual Understanding",
    description:
      "We deeply understand Buddhist symbolism and iconography, creating art that is not only beautiful but spiritually meaningful.",
    icon: <Award className="h-10 w-10 text-[#f2906c]" />,
  },
  {
    title: "Customized Approach",
    description:
      "Every project is tailored to your specific space, needs, and spiritual intentions, resulting in truly unique creations.",
    icon: <Users className="h-10 w-10 text-[#f2906c]" />,
  },
  {
    title: "Timely Execution",
    description:
      "We respect deadlines while never compromising on quality, ensuring your project is completed when you need it.",
    icon: <Clock className="h-10 w-10 text-[#f2906c]" />,
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            What sets our Buddhist art consultancy apart from others.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mt-1">{reason.icon}</div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
