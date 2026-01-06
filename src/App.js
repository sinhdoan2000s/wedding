import './styles/App.css';
import './styles/reset.css';

import Banner from "./sections/Banner";
import ImageWithText from "./sections/ImageWithText";
import Introduction from './sections/Introduction';
import Story from './sections/Story';
import Album from './sections/Album';
import Timeline from './sections/Timeline';
import Event from './sections/Event';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div id="App">
      <MusicPlayer />
      <Banner />
      <ImageWithText />
      <Introduction />
      <Story />
      <Album />
      <Timeline />
      <Event />
    </div>
  );
}

export default App;
