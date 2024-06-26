import Image from "next/image";
import { Allura, Tangerine, Lato, Merriweather } from "next/font/google";
import { VscLinkExternal } from "react-icons/vsc";

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
            <img
              className="image"
              src="/wed/Lake Michigan Beach Engagement Photos at Sunset.jpg"
            />

            <div className="date">
              <span className="date_line" />
              <span>December 10, 2026</span>
            </div>
          </div>
          <div className="join_us">
            <span>Join us</span>
            <span className="line2" />
          </div>
          <div className="address">Melchor Ocampo, MX | 5:00pm</div>
        </div>
      </section>

      <section className="banner details">
        <div className={`${merriweather.className} info`}>
          <div className="message">The details</div>
          <div className="image_container">
            <div className="full_names">
              <span className="full_name name1">
                <span>Lilian </span>
                <span>Aguilar</span>
              </span>
              <span className="full_name name2">
                <span>Alejandro </span>
                <span>Perez</span>
              </span>
            </div>
            <img
              className="image"
              src="/wed/Lake Michigan Engagement Photos by Tylee Shay Photography (9).jpg"
            />

            <div className="full_names detalis_content">
              <span className="full_name detail">
                <span className="subtitle">Will exange vows on</span> December
                10, 2026
              </span>
              <span className="full_name detail">
                <span className="subtitle">Reception:</span> The Marriot LA, CA.
                <span className="link">SEE MAPS{<VscLinkExternal />}</span>
              </span>
            </div>
          </div>
          <div className={`join_us`}>
            {"Can't wait to celebrate with you"}
            <span className="line2" />
          </div>
        </div>
      </section>

      <section className="banner date_section">
        <div className={`${merriweather.className} info`}>
          <div className="message">The day</div>
          <div className="">
            <div className="">
              <div className="bless">
                <div className="image_container_sides">
                  <span className="image_cover" />
                  <img
                    src="/wed/Lake Michigan Engagement Photos by Tylee Shay Photography (2).jpg"
                    alt=""
                  />
                </div>
                <div className="blessings">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </div>
                <div className="image_container_sides2">
                  <span className="image_cover" />
                  <img
                    src="/wed/Lake Michigan Engagement Photos by Tylee Shay Photography (2).jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="countdown">
            <span className="coming_soon">Coming soon!</span>
            <span className="date_squares">
              <div className="date_item">
                <span className="date_numbers">
                  <span className="date_number">2</span>
                  <span className="date_number">9</span>
                </span>
                <span className="coming_soon aa">Months</span>
              </div>
              <div className="date_item">
                <span className="date_numbers">
                  <span className="date_number">6</span>
                  <span className="date_number">3</span>
                </span>
                <span className="coming_soon aa">Days</span>
              </div>
              <div className="date_item">
                <span className="date_numbers">
                  <span className="date_number">0</span>
                  <span className="date_number">2</span>
                </span>
                <span className="coming_soon aa">Hours</span>
              </div>
              <div className="date_item">
                <span className="date_numbers">
                  <span className="date_number">0</span>
                  <span className="date_number">2</span>
                </span>
                <span className="coming_soon aa">Minutes</span>
              </div>
            </span>
          </div>
        </div>
      </section>

      <section className="banner">
        <span className={`${merriweather.className}`}>OUR SONG</span>
        <iframe
          src="https://open.spotify.com/embed/track/14fNBhtYL6qERv2jd2gHFY?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </section>
      <section>
        <iframe
          src="https://open.spotify.com/embed/track/5NYQS0JkqRRfhlliy0P3Dv?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
}
