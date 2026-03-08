function Offer() {
    return (
        <div className="offer">
          <div className="offer-text">
            <h1>SPECIAL OFFERS</h1>
            <p>Don't miss out on our limited time promotions</p>
          </div>

          <div className="offer-contentcard">
            <div className="off-contenttext">
              <h2>Buy One Get One Free</h2>
              <p>Now everyone <span className="highlight-text">+ get one deal</span></p>
            </div>  

            <button className="claim-btn">Claim Offer</button>
          </div>
        </div>
    );
}
export default Offer; 