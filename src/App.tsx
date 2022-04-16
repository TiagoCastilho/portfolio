import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Copy } from "./components/Copy";
import { Menu } from "./components/Menu";
import { Works } from "./pages/Works";
import { Banner } from "./pages/Banner";
import { NotFound } from "./pages/NotFound";
import { Project1 } from "./pages/Works/Project1";
import { Project2 } from "./pages/Works/Project2";
import { Project3 } from "./pages/Works/Project3";
import { Project4 } from "./pages/Works/Project4";

const App = () => {
  return(
    <>
      <div>
        <Menu />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Banner />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/works" element={<Works />}/>
          <Route path="/works/project1" element={<Project1 />}/>
          <Route path="/works/project2" element={<Project2 />}/>
          <Route path="/works/project3" element={<Project3 />}/>
          <Route path="/works/project4" element={<Project4 />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
      <div>
        <Copy />
      </div>
    </>
  );
}

export default App;
