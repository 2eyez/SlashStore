import { Typewriter } from "react-simple-typewriter";

const Announcement = ({
  words = [],
  bgColor = "orange",
  textColor = "white",
  speed = 70,
}) => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "0.3rem",
        backgroundColor: bgColor,
        fontSize: "1rem",
        fontWeight: "bold",
        color: textColor,
      }}
    >
      <Typewriter
        words={words}
        loop={0}
        cursor
        cursorStyle="_"
        typeSpeed={speed}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
};

export default Announcement;