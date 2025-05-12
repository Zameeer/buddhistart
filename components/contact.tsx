import WhatsappButton from "../components/WhatsappButton";
import WechatButton from "../components/WechatButton";
export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Get in Touch</h2>
        <div className="flex flex-col items-center justify-center space-y-6">
          <p className="text-2xl md:text-3xl font-medium text-[#f2906c]">
            Ready to transform your space with sacred art?
          </p>
          <div className="text-3xl md:text-4xl font-bold text-gray-900">
            Call us:{" "}
            <a
              href="tel:+1234567890"
              className="hover:text-[#f2906c] transition-colors"
            >
              +977 981-8916817
            </a>
          </div>
          <div className="text-3xl md:text-4xl font-bold text-gray-900">
            Email:{" "}
            <a
              href="mailto:info@buddhistart.com"
              className="hover:text-[#f2906c] transition-colors"
            >
              info@buddhistart.com
            </a>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mt-6">
            We offer free consultations to discuss your vision and how we can
            bring sacred beauty to your space.
          </p>
          <WechatButton />
          <WhatsappButton />
        </div>
      </div>
    </section>
  );
}
