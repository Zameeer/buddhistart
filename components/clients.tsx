const clients = [
  {
    name: "Dharma Mountain Monastery",
    testimonial:
      "The artwork created for our meditation hall has transformed the space into a truly sacred environment. The attention to detail and understanding of Buddhist symbolism is exceptional.",
    role: "Head Monk",
    image: "/urgen/Himachal_Pradesh_2007/HH_Rinpoche.jpg?height=400&width=400",
  },
  {
    name: "Dharma Mountain Monastery",
    testimonial:
      "The artwork created for our meditation hall has transformed the space into a truly sacred environment. The attention to detail and understanding of Buddhist symbolism is exceptional.",
    role: "Head Monk",
    image: "/urgen/Jammu_Kashmir_Ladakh/KK_Rangdol.jpg?height=400&width=400",
  },
  {
    name: "Dharma Mountain Monastery",
    testimonial:
      "The artwork created for our meditation hall has transformed the space into a truly sacred environment. The attention to detail and understanding of Buddhist symbolism is exceptional.",
    role: "Head Monk",
    image: "/urgen/Nepal_Kathmandu/Rinpoche.jpeg?height=400&width=400",
  },
];

import Image from "next/image";

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            Hear from our esteemed clients who have transformed their spaces
            with our Buddhist art.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {clients.map((client, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="flex flex-col h-full">
                <div className="flex justify-center mb-6">
                  <div className="relative h-32 w-32 rounded-full overflow-hidden">
                    <Image
                      src={client.image || "/placeholder.svg"}
                      alt={client.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <svg
                    className="h-12 w-12 text-[#f2906c] opacity-50 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-gray-600 italic mb-6 flex-grow text-center">
                  {client.testimonial}
                </p>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">{client.name}</p>
                  <p className="text-[#f2906c]">{client.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
