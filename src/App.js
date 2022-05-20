import AboutSection from "./components/AboutSection/AboutSection";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import JoinSection from "./components/JoinSection/JoinSection";
import LoginSection from "./components/LoginSection/LoginSection";
import ReviewSection from "./components/ReviewSection/ReviewSection";

function App() {
  return (
    <div className="App" style={{maxWidth:'100%',overflow:'hidden',position:'relative'}}>
      <Header/>
      <Banner />
      <JoinSection/>
      <ReviewSection/>
      <LoginSection/>
      <AboutSection />
      <Footer/>
      <h1 
        className="discovery"
        style={{
          transform: "rotate(-90deg)",
          position: "absolute",
          left: '70%',
          fontSize: "10rem",
          bottom: "500px",
          color: "#01525f"
        }}
      >Discovery</h1>
    </div>
  );
}


export default App;
