import { Component } from "react";
import './AboutHeader.css'
class AboutHeader extends Component {
    render(){
        return(
          <div className="header">
          <h1>About This App</h1>
          <div className="about_actions">
            <button className="docs">Docs</button>
            <button className="contact_support">Contact Support</button>
          </div>
        </div>  
        )
    }
}

export default AboutHeader;