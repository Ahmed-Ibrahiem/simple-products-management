import { Component } from "react";
import "./ReleaseNotes.css";

class ReleaseNotes extends Component {
  render() {
    return (
      <div className="release_notes">
        <div className="top">
          <div className="title">
            <i className="fa-solid fa-clock-rotate-left"></i>
            <h2>Release Notes</h2>
          </div>
          <button className="download_changelog">Download Changelog</button>
        </div>
        <div className="notes">
          <div className="note">
            <p>v1.0 – Setup project & components.</p>
          </div>
          <div className="note">
            <p>v1.1 – Added Context API.</p>
          </div>
          <div className="note">
            <p>v1.2 – Implemented Product Form & Random Product.</p>
          </div>
          <div className="note">
            <p>v1.3 – About page updated for training purpose.</p>
          </div>
        </div>
      </div>
    );
  }
}
export default ReleaseNotes;
