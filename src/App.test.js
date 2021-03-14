import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders text title", () => {
  render(<App />);
  const h1 = screen.getByText(/Search someone else's photos on Flickr/i);
  expect(h1).toBeInTheDocument();
});
