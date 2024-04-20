// Components
import { ErrorBoundary, Header, Footer } from "@/components";
import { getTranslateMessage } from "./translations/messages";
import { translations } from "./translations";

const PATH = "src/App.tsx";

function App() {
  return (
    <ErrorBoundary path={PATH}>
      <div className="workspace">
        <Header />
        <div className="tw-flex-1">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </div>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
