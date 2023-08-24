import { QuestionContextProvider } from "./Context";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import "./index.css";

function App() {
  return (
    <QuestionContextProvider>
      <Card />
      <Footer />
    </QuestionContextProvider>
  );
}

export default App;
