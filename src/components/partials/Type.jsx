import { TypeAnimation } from "react-type-animation";

const Type = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "Selamat datang di website saya!",
        100,
      ]}
      speed={30}
      style={{ fontSize: "2em" }}
      repeat={1}
    />
  );
};

export default Type;
