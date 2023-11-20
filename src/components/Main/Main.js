import React from "react";
import { useContext } from "react";
import Header from "../Header/Header";
import Middle from "../Middle/Middle";
import img1 from "../../images/abhishek.png";
import img2 from "../../images/Ellipse 10.png";
import img3 from "../../images/Ellipse 9.png";
import img4 from "../../images/Ellipse 9 (1).png";
import img5 from "../../images/Ellipse 9 (2).png";
import img6 from "../../images/Ellipse 9 (3).png";
import img8 from "../../images/Ellipse 7.png";
import Footer from "../Footer/Footer";
import ThemeContext from "../context/ThemeContext";

const Main = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <div className="main">
      <Header />
      <Middle
        imgUrl={img1}
        name="Abhishek Bro"
        date="3:20 pm"
        message="Ma dami 👌 caption ma post garchu hai vai..."
      />
      <Middle
        imgUrl={img2}
        name="Sagar Bro"
        date="10:03 am"
        message="euta ticket ma 18 flim tyo pani barsae vari v..."
      />
      <Middle
        imgUrl={img3}
        name="Niranjan vai UX Designer"
        date="Yesterday"
        message="Like colombia, ko fox movies haru metro g..."
      />

      <Middle
        imgUrl={img4}
        name="Balram vai"
        date="29/04/2021"
        message="Yeso freelancing haniyo bhane sajilo hunch..."
      />

      <Middle
        imgUrl={img5}
        name="clickEAT Project"
        date="28/04/2021"
        message="Order now lai download now rakhdaa k hol...."
      />

      <Middle
        imgUrl={img6}
        name="Jeeven vai"
        date="28/04/2021"
        message="Design by maa tpai lai tag garxu 😂 ni ki ka..."
      />

      <Middle
        imgUrl={img8}
        name="Digital Ghumti Team"
        date="27/04/2021"
        message="https://drive.google.com/file/d/1z5w01j15..."
      />

      <Footer />
    </div>
  );
};

export default Main;
