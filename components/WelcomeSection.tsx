import React from "react";

const WelcomeSection = () => (
  <section id="welcome" className="py-10 px-4 md:px-20 bg-white">
    <section className="relative bg-yellow-100 text-gray-800 p-4 md:p-10 rounded-md shadow-lg border border-red-300 overflow-hidden">
      {/* Corner decorations */}
      <img
        src="/left corner.png"
        alt=""
        className="absolute top-0 left-0 w-12 h-12"
      />
      <img
        src="/right corner.png"
        alt=""
        className="absolute top-0 right-0 w-12 h-12"
      />
      <img
        src="/left corner bottom.png"
        alt=""
        className="absolute bottom-0 left-0 w-12 h-12"
      />
      <img
        src="/right corner bottom.png"
        alt=""
        className="absolute bottom-0 right-0 w-12 h-12"
      />

      {/* Faint background symbol */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-10 z-0"
        style={{ backgroundImage: `url('/luckysign.png')` }}
      />

      <div className="max-w-6xl mx-auto px-2 md:px-4 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-[#8B2323] mb-4">
          Welcome to Urgen Buddhist Art Consultancy
        </h1>
        <p className="text-base md:text-lg{font-size: 1.0 rem} text-gray-700 mb-6">
          We warmly welcome you to Urgyen Buddhist Art Consult and Service
          Private Limited. Urgyen Buddhist Art is an official art company
          registered under the policies and regulations of the Government of
          Nepal, dedicated to making quality Tibetan traditional art effective
          today. This company has been established with the specific purpose of
          creating cement decorative work, painting, and thangka painting used
          in Buddhist monasteries. So far, we have completed quality design and
          painting work in many monasteries built in various places in Nepal, as
          well as in Himachal Pradesh, Jammu Kashmir, Ladakh, and Sikkim in
          India. If you are also constructing a new monastery, you can contact
          us. Thank you.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          ༈
          ཨོ་རྒྱན་ནང་པའི་སློབ་སྟོན་བཟོ་རིག་གིས་ཁྱེད་རྣམས་ལ་སྙིང་ཐག་པ་ནས་མཚམས་འདྲི་ཞུ།
          ཨོ་རྒྱན་ནང་པའི་སློབ་སྟོན་བཟོ་རིག་ནི་བོད་ཀྱི་རིག་གནས་ཀྱི་ལག་རྩལ་ཡར་རྒྱས་གཏོང་བའི་ཆེད་དུ་བལ་ཡུལ་གཞུང་གི་སྲིད་ཇུས་དང་མཐུན་པར་ཐོ་འགོད་བྱས་པའི་སྤྱི་ཚོགས་ལག་རྩལ་ཚོང་ལས་ཤིག་ཡིན།
          འདི་ཡི་ཚོང་ལས་ནི་ཁྱད་པར་དུ་དགོན་པའི་ནང་རྟེན་སྐུ་འདྲ། རིས་མོ།
          ཐང་ཀ་སོགས་བྲིས་སྐྲུན་ཆེད་དུ་གཞི་འཛུགས་བྱས་པ་ཡིན།
          དེང་སང་བར་དུ་ང་ཚོས་བལ་ཡུལ་གྱི་ས་ཕྱོགས་མི་འདྲ་བར་དང་།
          དེ་བཞིན་རྒྱ་གར་གྱི་ཧི་མ་ཅལ། ཇམ་མུ་ཀ་ཤི་མིར། ལ་དྭགས།
          སི་ཀིམ་བཅས་སུ་བཟོ་བཅོས་གནང་བའི་དགོན་པ་མང་པོའི་ནང་རྟེན་སྐུ་འདྲ་དང་རིས་མོའི་ལས་ཀ་སྒྲུབ་ཐུབ་ཡོད།
          ཁྱེད་ཚོས་ཀྱང་དགོན་པ་གསར་བཟོ་གནང་བཞིན་ཡོད་ན་ང་ཚོ་ལ་འབྲེལ་བ་གནང་རོགས་ཞུ།
          ཐུགས་རྗེ་ཆེ།།
        </p>
        <p className="text-md text-gray-600">
          Explore our gallery, learn about our services, and discover how we can
          help you realize your vision for a sacred space.
        </p>
      </div>
    </section>
  </section>
);

export default WelcomeSection;
