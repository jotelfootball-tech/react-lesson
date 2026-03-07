import Menubtn from "./menubtn";

function Menucard() {
  return (
    <>
      <div className="menucard">
        <div className="img-container">
          <img src="/potato 3.jpg" alt="Herb Roasted Bites" />
          <span className="price">$9</span>
        </div>
        <div className="content">
          <h2>Herb Roasted Bites</h2>
          <p>Herb Roasted Bites anti hevolianie potato rotties and theat meticonily crafted.</p>
          <Menubtn />
        </div>
      </div>

      <div className="menucard">
        <div className="img-container">
          <img src="/roasted-potatoes-6.jpg" alt="Crispy Smashed Potatoes" />
          <span className="price">$12</span>
        </div>
        <div className="content">
          <h2>Crispy Smashed Potatoes</h2>
          <p>Crispy Smashed Potatoes have roashed potatoes and won ito for aemar lineverexping and avseosent lelirs.</p>
          <Menubtn />
        </div>
      </div>

      <div className="menucard">
        <div className="img-container">
          <img src="/rosemary-roasted-potatoes-recipe.jpg" alt="Loaded Stuffed Spuds" />
          <span className="price">$15</span>
        </div>
        <div className="content">
          <h2>Loaded Stuffed Spuds</h2>
          <p>Loaded Stuffed Spuds with a moit food catering methed delivery event. Truck Events onanes and food ements.</p>
          <Menubtn />
        </div>
      </div>
    </>
  );
}
export default Menucard;