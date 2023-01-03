import { Footer } from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import './App.css'
import { Header } from "./Components/Main/Components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="min-h-full">
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
