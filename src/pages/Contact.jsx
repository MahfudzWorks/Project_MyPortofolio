import { useState } from "react";
import CenterBlurBackground from "../components/CenterBlurBackground";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = (e) => {
    e.preventDefault();

    const phoneNumber = "6282140363716";

    const text = `Halo, ini pesan dari portfolio!\n\nEmail: ${email}\nPesan: ${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      id="contact"
      className="relative flex flex-col justify-center items-center scroll-mt-16"
    >
      <h1 className="text-3xl font-bold text-black mt-4">
        <span className="inline-block animate-bounce">🚀</span> Contact Me{" "}
        <span className="inline-block ">💫</span>
      </h1>
      <CenterBlurBackground />
      <div className="text-center w-200 mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          commodi qui consectetur cumque suscipit odit, fuga delectus.
          Cupiditate neque possimus saepe. Quidem eaque modi aperiam cum
          explicabo earum perspiciatis reiciendis.
        </p>
        <br />

        <form
          onSubmit={handleWhatsApp}
          className="justify-center items-center mt-8 flex flex-col gap-4 w-full"
        >
          <div className="w-full p-[2px] bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] rounded-lg">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg outline-none bg-white shadow-lg"
              required
            />
          </div>

          <div className="w-full p-[2px] bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] rounded-lg">
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 rounded-lg outline-none bg-white align-middle shadow-lg"
              required
            ></textarea>
          </div>

          <div className="p-[2px] bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] rounded-lg">
            <button
              type="submit"
              className="flex items-center gap-3 bg-white text-green-600 
               font-semibold px-6 py-2 rounded-lg 
               transition-all duration-300 ease-in-out
               hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 
               hover:shadow-md active:scale-[0.98]"
            >
              Send via WhatsApp{" "}
              <img
                src="/src/assets/icon/WhatsappLogo.svg"
                alt="WA"
                className="w-8"
              />
            </button>
          </div>
        </form>
      </div>
      <div className="h-32" />
    </div>
  );
}

export default Contact;
