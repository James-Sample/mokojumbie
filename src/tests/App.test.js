import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("mokojumbie is on the screen", () => {
  render(<App />);
  expect("Mokojumbie").toBeInTheDocument();
});
