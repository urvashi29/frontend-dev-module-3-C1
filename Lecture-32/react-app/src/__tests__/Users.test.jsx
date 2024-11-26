import User from "../pages/User";
import { render, waitFor, screen } from "@testing-library/react";

describe("testing api data", () => {
  it("expected data", async () => {
    render(<User />);

    await waitFor(() => {
      expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
    });
  });
});
