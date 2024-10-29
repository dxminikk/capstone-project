import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/Home"
import Booking from "./pages/Booking"
import ReservePage from "./pages/Reserve"

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/reserve" element={<ReservePage />} />
      <Route path="*" element={<_404 />} />
    </Routes>
  )
}
const _404 = () => {
  return (
    <div className="max-w-5xl mx-auto p-5">
      <p className="font-bold text-dark font-karla">
        The requested page was not found. :/
      </p>
    </div>
  )
}
