import { StrictMode } from "react";
import { GlobalStyled } from "./styles/GlobalStyle";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <GlobalStyled />
    <RouterProvider router={router} />
  </StrictMode>
);
