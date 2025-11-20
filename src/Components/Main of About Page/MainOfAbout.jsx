import { Component } from "react";
import Description from "../Description in about page/description";
import Highilights from "../Highilights in about page/Highilights";
import TeamInAbout from "../Team Of About Page/TeamInAbout";
import ReleaseNotes from "../Release Notes Of About Page/ReleaseNotes";
import Support from "../Support Of About Page/Support";

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
