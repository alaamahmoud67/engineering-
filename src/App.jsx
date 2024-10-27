import { RouterProvider } from "react-router-dom";
import router from "./components/Routing/Routes";

import "./App.css";


function App() {
  return (
    <>
      <RouterProvider router={router} />
      <div>
        {/* <Button>Click me</Button> */}
      </div>
    </>
  );
}

export default App;
