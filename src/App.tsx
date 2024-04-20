// Libraries
import { Outlet } from "react-router-dom";

// Components
import { ErrorBoundary, Header, Footer } from "@/components";

const PATH = "src/App.tsx";

function App() {
  return (
    <ErrorBoundary path={PATH}>
      <div className="workspace">
        <Header />
        <div className="tw-flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
