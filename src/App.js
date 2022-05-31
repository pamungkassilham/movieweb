import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/Intro"
import Trending from "./components/Trending"
import Superhero from "./components/Superhero"

import "./style/landingPage.css"

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className="myBG">
        <NavigationBar />
        <Intro/>
      </div>
      {/* End Of Intro Section */}

      {/* Trending Section */}
      <div className="trending">
        <Trending />
      </div>
      {/* End of  Trending */}

      <div className="superhero">
        <Superhero />
      </div>
    </div>
  );
}

export default App;
