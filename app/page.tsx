import Image from "next/image";
import { Allura, Tangerine, Lato, Merriweather } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const dancing_script = Tangerine({
  weight: ["400"],
  subsets: ["latin"],
});
const merriweather = Merriweather({
  weight: ["300"],
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main>
      <section className="banner">
        <div className={`${merriweather.className} info`}>
          <div className="message">The wedding of</div>
          <div className="image_container">
            <div className={`${dancing_script.className} names`}>
              <span className="first_person">Lilian & </span>
              <span className="second_person">Alejandro</span>
            </div>
            <img src="/wed/Lake Michigan Beach Engagement Photos at Sunset.jpg" />
            <div className="date">December 10, 2026 </div>
          </div>
          <div className="join_us">Join us</div>
          <div className="address">Melchor Ocampo, MX | 5:00pm</div>
        </div>
      </section>
    </main>
  );
}
