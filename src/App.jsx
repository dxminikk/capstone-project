import { Toaster } from "react-hot-toast"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Nav"
import Routing from "./components/Routing"

function App() {
  return (
    <>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            color: "#333333",
            background: "#EFEEEE",
            fontWeight: "200",
            padding: "0.5rem"
          },
          duration: 3000
        }}
      />
      <div className="min-h-screen flex flex-col justify-between antialiased">
        <div>
          <Navbar />
          <Header />
          <main>
            <Routing />
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default App
