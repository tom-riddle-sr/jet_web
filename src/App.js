import Sidebar from "./Sidebar/Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import app_styles from "./app.module.scss";
import Router1 from "./Router";
import { HashRouter } from "react-router-dom";


function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className={app_styles.layout1}>
          <Sidebar />
          <Router1 />
        </div>
        <div className={app_styles.layout2}>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
