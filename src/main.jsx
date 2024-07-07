import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./Context/ThemeContext.jsx";
import DataContextProvider from "./Context/DataContext.jsx";
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
if (import.meta.env.PROD) {
  disableReactDevTools();
}

console.log(import.meta.env.PROD)
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </ThemeProvider>
);
