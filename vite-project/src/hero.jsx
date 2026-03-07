import Herobtn from './herobtn.jsx';

function Hero() {
    return (
      
        <div className="hero">
          <div className="heroletters">
            <h1>Potato <br /> Twister With <br /> <span className="spices">Rich Spices</span></h1>
            <p>Introducing Crunchy Twists, the ultimate potato twister brand <br /> that revolutionizes snacking. Each twist is meticulously crafted.</p>
            <Herobtn />
          </div>
         

          <div className="heroimg">
          <img src="/remove_bg_-removebg-preview.png" alt="hero image " />
          </div>
       </div>
    )
}
export default Hero;