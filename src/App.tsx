import { RouterProvider } from "react-router-dom";
import router from "./router/router";

import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <main>
      <GlobalStyles />
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
