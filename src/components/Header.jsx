import Button from "./ui/Button"
import img from "../assets/images/header.jpg"
const Header = () => {
  return (
    <header className="bg-secondary text-white mb-4">
      <div className="max-w-5xl mx-auto px-5 py-8">
        <div className="flex sm:flex-row flex-col gap-2 justify-between">
          <div className="flex flex-col gap-y-4">
            <div className="font-markazi">
              <h1 className="text-6xl text-primary font-semibold">Little Lemon</h1>
              <p className="-mt-4 text-4xl text-white">Chicago</p>
            </div>
            <p className="font-karla font-medium sm:w-1/3">
              We are a family owned Mediterranean restaurant, focused on traditional
              recipes served with a modern twist.
            </p>
            <a href="/reserve">
              <Button className="bg-primary hover:bg-primary/80" href="/reserve">
                Reserve a Table
              </Button>
            </a>
          </div>
          <img
            src={img}
            className="h-[300px] w-[300px] object-cover rounded-xl place-self-center"
          />
        </div>
      </div>
    </header>
  )
}
export default Header
