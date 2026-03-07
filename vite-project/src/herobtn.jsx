import { Play } from 'lucide-react';
import './App.css';

function Herobtn() {
    return (
        <div className="herobtn">
        <button className="order-btn">Order Now</button>
        <button className="watch-video-btn">Watch Video <Play /></button>
        </div>
    )
}
export default Herobtn;