// _tests_/MainLayout.test.tsx

import { render, screen, fireEvent } from "@testing-library/react";
import { MainLayout } from "@/components/MainLayout";
import { usePersonContext } from "@/context/PersonContext";

// Mock the usePersonContext hook
jest.mock("@/context/PersonContext", () => ({
  usePersonContext: jest.fn(),
}));

describe("MainLayout", () => {
  const mockSetEnableLogs = jest.fn();
  const mockHandleButtonClick = jest.fn();

  beforeEach(() => {
    usePersonContext.mockReturnValue({
      data: {
        profilePictureUrl: "https://example.com/profile.jpg",
        name: "John Doe",
        title: "Software Engineer",
        followers: 100,
        following: 50,
      },
      handleButtonClick: mockHandleButtonClick,
      error: null,
      isLoading: false,
      selectedPerson: "PersonA",
      enableLogs: false,
      setEnableLogs: mockSetEnableLogs,
    });
  });

  it("renders MainLayout component with person data", () => {
    render(<MainLayout />);

    // Check if the person data is rendered
    expect(
      screen.getByRole("heading", { name: /John Doe/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Software Engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/Followers: 100/i)).toBeInTheDocument();
    expect(screen.getByText(/Following: 50/i)).toBeInTheDocument();

    // Check if the profile picture is rendered
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://example.com/profile.jpg",
    );
  });

  it("toggles logs on checkbox click", () => {
    render(<MainLayout />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(mockSetEnableLogs).toHaveBeenCalledWith(true);

    fireEvent.click(checkbox);
    expect(mockSetEnableLogs).toHaveBeenCalledWith(false);
  });

  it("calls handleButtonClick when a button is clicked", () => {
    render(<MainLayout />);

    const button = screen.getByRole("button", { name: /PersonA/i });
    fireEvent.click(button);
    expect(mockHandleButtonClick).toHaveBeenCalledWith("PersonA");
  });

  it("shows error message when error is present", () => {
    usePersonContext.mockReturnValue({
      ...usePersonContext(),
      error: "Some error occurred",
    });

    render(<MainLayout />);
    expect(screen.getByText(/Error loading person data/i)).toBeInTheDocument();
  });

  it("shows loading skeleton when isLoading is true", () => {
    usePersonContext.mockReturnValue({
      ...usePersonContext(),
      isLoading: true,
    });

    render(<MainLayout />);
    expect(screen.getByTestId("skeleton")).toBeInTheDocument();
  });
});
