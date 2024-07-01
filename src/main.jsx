import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./Context/ThemeContext.jsx";
import DataContextProvider from "./Context/DataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </ThemeProvider>
);
