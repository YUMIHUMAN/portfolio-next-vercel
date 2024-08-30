import { FC } from "react";

const footer_Style: React.CSSProperties = {
  backgroundColor: "#000000",
  color: "white",
  textAlign: "center",
  padding: "1rem",
  width: "100%",
};

const Footer: FC = () => {
  return (
    <div style={footer_Style}>
      <p>&copy; 2024 Morijyobi-studio.</p>
    </div>
  );
};

export default Footer;
