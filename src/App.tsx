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
import { Project5 } from "./pages/Works/Project5";
import { Project6 } from "./pages/Works/Project6";
import { Project7 } from "./pages/Works/Project7";
import { Project8 } from "./pages/Works/Project8";
import { Project9 } from "./pages/Works/Project9";
import { Project10 } from "./pages/Works/Project10";
import { Project11 } from "./pages/Works/Project11";
import { Project12 } from "./pages/Works/Project12";

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
          <Route path="/works/project5" element={<Project5 />}/>
          <Route path="/works/project6" element={<Project6 />}/>
          <Route path="/works/project7" element={<Project7 />}/>
          <Route path="/works/project8" element={<Project8 />}/>
          <Route path="/works/project9" element={<Project9 />}/>
          <Route path="/works/project10" element={<Project10 />}/>
          <Route path="/works/project11" element={<Project11 />}/>
          <Route path="/works/project12" element={<Project12 />}/>
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
