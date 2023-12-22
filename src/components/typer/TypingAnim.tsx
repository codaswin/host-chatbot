import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "Chat With Your OWN AI 🤖",
        1000,
        "MERN stack application",
        2000,
        "CHAT-gpt tubro 💻",
        1500,
        "FU*k you :)",
        190,
      ]}
      speed={50}
      style={{
        fontSize: "60px",
        color: "#00fffc",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;
