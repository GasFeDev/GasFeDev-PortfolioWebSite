import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

createRoot(document.querySelector("#root")).render(<App />);
