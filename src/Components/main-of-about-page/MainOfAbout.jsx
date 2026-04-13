import { Component } from "react";
import Highilights from "../highlights-in-about-page/Highilights";
import TeamInAbout from "../team-of-about-page/TeamInAbout";
import ReleaseNotes from "../release-notes-of-about-page/ReleaseNotes";
import Support from "../support-of-about-page/Support";
import Description from "../description-in-about-page/Description";

class MainOfAbout extends Component {
  render() {
    return (
      <div className="main">
        <Description />
        <Highilights />
        <TeamInAbout />
        <ReleaseNotes />
        <Support />
      </div>
    );
  }
}
export default MainOfAbout;
