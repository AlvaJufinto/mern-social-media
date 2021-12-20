import { GlobalStyles } from "./globals";

import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <div className="app">
        <Home />
      </div>
    </>
  );
}

export default App;
