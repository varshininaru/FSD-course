import ReactDOM from "react-dom/client";
import App from "./route";

const rootElement = document.getElementById('root')
const rootref = ReactDOM.createRoot(rootElement);
rootref.render(<App/>);