import "./App.css";
import {RouterProvider} from "react-router-dom";
import router from "./router/router";

function App() {
  /**
   * 이제부터는 RouterProvider 로 경로를 출력시킨다.
   */
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
