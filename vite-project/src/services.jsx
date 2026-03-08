import { Soup, TruckElectric, Motorbike } from 'lucide-react';

function Services(){
    return(
      <div className="services">
        <div className="ser-text">
          <h1>OUR SERVICES</h1>
          <p>Everything you need for a crunchy, delicious experience</p>
        </div>

        <div className="ser-icons"> 
          <div className="service-card">
            <div className="icon-wrapper">
              <Soup />
            </div>
            <h2>Party Catering</h2>
            <p>Elevate your events with our custom potato twister catering. Perfect for birthdays, weddings, and corporate gatherings.</p>
          </div>

          <div className="service-card">
            <div className="icon-wrapper">
              <TruckElectric />
            </div>
            <h2>Food Truck Events</h2>
            <p>Craving a crunch at home? Order online and get hot, fresh potato twisters delivered straight to your doorstep.</p>
          </div>

          <div className="service-card">
            <div className="icon-wrapper">
               <Motorbike />
            </div>
            <h2>Home Delivery</h2>
            <p>Spot our Crunchy Twists truck at local festivals and markets! Follow our socials to see where we're popping up next.</p>
          </div>
        </div>
      </div>
    );
}

export default Services;