import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "components/header/Nav/Nav";

test("renders Nav", () => {
  render(<Nav />);

  expect(screen.getByRole("button", { name: "home" })).toBeInTheDocument();
});
