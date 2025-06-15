import video from "../data/video.js";
import VideoContainer from "./VideoContainer.js";
import CommentList from "./CommentList.js";

const App = () => {
  return (
    <div className="App">
      <VideoContainer videoData={video}/>
      <CommentList {...video}/>
    </div>
  );
}

export default App;
