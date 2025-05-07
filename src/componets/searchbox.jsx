import React from "react";
import "./searchbox.css";

function Searchbox() {
    return (
        <div className="searchbox-container">
            <div className="everythings-container">
                <div className="everything A">Everything
                we do</div>
                <div className="everything B">Everything
                we offer</div>
                <div className="everything C">Everything
                you'll love</div>
            </div>
            
            <input type="text" className="searchbox" placeholder="Search for jobs and website content" />
        </div>
    )
}
export default Searchbox;