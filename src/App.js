import './App.css';
import { Route ,Routes} from "react-router-dom";
import  Layout  from "./Layout";
import About from './header/About'
import Contact from "./header/Contact";
import Services from "./header/Services";
import Home from "./header/Home";
import Empty from "./header/Empty";
import { Post } from "./header/Post";
import { SinglePost } from './header/SinglePost';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Post/" element={<Post />} />
          <Route path="/Post/:id" element={<SinglePost />} />
          <Route path="*" element={<Empty />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
