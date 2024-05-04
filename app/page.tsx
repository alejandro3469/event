import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <div>Claire & Sam</div>
        <div>We joyfully invite you to the celebration of our marriage</div>
        <div>
          <span className="day">Saturday</span>
          <div>
            <span className="month">JUNE</span>
            <span className="daynumber">08</span>
            <span className="year">2024</span>
          </div>
          <span className="hour">2:30pm</span>
        </div>
        <div className="address">
          <span className="addresslineone">The polo lounge</span>
          <span className="addresslinetwo">2910 New ridge RD Elliston VA 24087</span>
        </div>
      </section>
    </main>
  );
}
