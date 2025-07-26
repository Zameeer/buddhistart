import WhatsappButton from "../components/WhatsappButton";
import WechatButton from "../components/WechatButton";
import FacebookButton from "../components/FacebookButton";
export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Get in Touch</h2>
        <div className="flex flex-col items-center justify-center space-y-6">
          <p className="text-2xl md:text-3xl font-medium text-[#f2906c]">
            Ready to transform your space with sacred art?
          </p>
          <div className="text-3xl md:text-4xl font-bold text-gray-900">
            Call us:{" "}
            <a
              href="tel:+9779818916817"
              className="hover:text-[#f2906c] transition-colors"
            >
              +977 981-8916817
            </a>
            <br></br>
            {"         "}
            <a
              href="tel:+9779843106388"
              className="hover:text-[#f2906c] transition-colors"
            >
              +977 984-3106388
            </a>
          </div>
          <div className="text-3xl md:text-4xl font-bold text-gray-900">
            Email:{" "}
            <a
              href="mailto:urgenart@gmail.com"
              className="hover:text-[#f2906c] transition-colors"
            >
              urgenart@gmail.com
            </a>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mt-6">
            We offer free consultations to discuss your vision and how we can
            bring sacred beauty to your space.
          </p>
          <FacebookButton />
          <WechatButton />
          <WhatsappButton />
        </div>
      </div>
    </section>
  );
}
