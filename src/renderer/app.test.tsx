import { render, screen } from "@testing-library/react";

import App from "./app";

test("renders hello text", () => {
  render(<App />);
  expect(screen.getByText(/hello from app/i)).toBeInTheDocument();
});
