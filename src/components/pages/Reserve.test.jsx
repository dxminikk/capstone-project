import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import toast from "react-hot-toast"
import ReservePage from "./Reserve"

jest.mock("react-hot-toast", () => ({
  success: jest.fn()
}))

describe("ReservePage", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("renders the page with correct initial elements", () => {
    render(<ReservePage />)

    // Check main heading
    expect(screen.getByText("Reserve A Table")).toBeInTheDocument()

    // Check progress steps
    expect(screen.getByText("Personal")).toBeInTheDocument()
    expect(screen.getByText("Reservation")).toBeInTheDocument()
    expect(screen.getByText("Confirmation")).toBeInTheDocument()

    // Check initial form fields (Personal Details)
    expect(screen.getByLabelText("Name")).toBeInTheDocument()
    expect(screen.getByLabelText("Email")).toBeInTheDocument()
    expect(screen.getByLabelText("Phone")).toBeInTheDocument()

    // Check Next button
    expect(screen.getByText("Next")).toBeInTheDocument()
  })

  it("navigates through progress steps when clicking on tabs", async () => {
    render(<ReservePage />)

    // Click Reservation tab
    fireEvent.click(screen.getByText("Reservation"))

    // Check if Reservation form fields are visible
    expect(screen.getByLabelText("Date")).toBeInTheDocument()
    expect(screen.getByLabelText("Preferred Time")).toBeInTheDocument()
    expect(screen.getByLabelText("Number of Guests")).toBeInTheDocument()

    // Click Confirmation tab
    fireEvent.click(screen.getByText("Confirmation"))

    // Check if Confirmation content is visible
    expect(screen.getByText("Reservation Summary")).toBeInTheDocument()
  })

  it("shows back button on non-first steps", () => {
    render(<ReservePage />)

    // Initially, back button should not be visible
    expect(screen.queryByText("Back")).not.toBeInTheDocument()

    // Go to second step
    fireEvent.click(screen.getByText("Reservation"))

    // Back button should now be visible
    expect(screen.getByText("Back")).toBeInTheDocument()
  })

  it("nothing happens upon form submission with invalid data", async () => {
    render(<ReservePage />)
    const user = userEvent.setup()
    await user.click(screen.getByText("Next"))
    await user.click(screen.getByText("Next"))
    await user.click(screen.getByText("Confirm Reservation"))
    await waitFor(() => {
      expect(toast.success).not.toHaveBeenCalledWith(
        "Your reservation has been confirmed!"
      )
    })
  })

  it("allows form submission with valid data", async () => {
    const user = userEvent.setup()
    render(<ReservePage />)

    // Fill in Personal Details
    await user.type(screen.getByLabelText("Name"), "John Doe")
    await user.type(screen.getByLabelText("Email"), "john@example.com")
    await user.type(screen.getByLabelText("Phone"), "+3333333333")

    // Submit first step
    await user.click(screen.getByText("Next"))

    // Fill in Reservation Details
    await user.type(screen.getByLabelText("Date"), "2025-01-01")
    await user.type(screen.getByLabelText("Preferred Time"), "14:00")
    await user.type(screen.getByLabelText("Number of Guests"), "2")
    await user.selectOptions(screen.getByLabelText("Seating Preference"), "indoor")
    await user.selectOptions(screen.getByLabelText("Occasion"), "birthday")

    // Submit second step
    await user.click(screen.getByText("Next"))

    // Check if we're on confirmation page
    expect(screen.getByText("Reservation Summary")).toBeInTheDocument()

    // Submit final step
    await user.click(screen.getByText("Confirm Reservation"))

    // Check if success toast was shown
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith("Your reservation has been confirmed!")
    })
  })

  it("displays entered values in confirmation step", async () => {
    const user = userEvent.setup()
    render(<ReservePage />)

    // Fill and submit personal details
    await user.type(screen.getByLabelText("Name"), "John Doe")
    await user.type(screen.getByLabelText("Email"), "john@example.com")
    await user.type(screen.getByLabelText("Phone"), "+1234567890")
    await user.click(screen.getByText("Next"))

    // Fill and submit reservation details
    await user.type(screen.getByLabelText("Date"), "2025-01-01")
    await user.type(screen.getByLabelText("Preferred Time"), "14:00")
    await user.type(screen.getByLabelText("Number of Guests"), "2")
    await user.selectOptions(screen.getByLabelText("Seating Preference"), "indoor")
    await user.selectOptions(screen.getByLabelText("Occasion"), "birthday")
    await user.click(screen.getByText("Next"))

    // Check if values are displayed in confirmation
    expect(screen.getByText("John Doe")).toBeInTheDocument()
    expect(screen.getByText("john@example.com")).toBeInTheDocument()
    expect(screen.getByText("+1234567890")).toBeInTheDocument()
    expect(screen.getByText("2025-01-01")).toBeInTheDocument()
    expect(screen.getByText("14:00")).toBeInTheDocument()
    expect(screen.getByText("2")).toBeInTheDocument()
    expect(screen.getByText("indoor")).toBeInTheDocument()
    expect(screen.getByText("birthday")).toBeInTheDocument()
  })
})
