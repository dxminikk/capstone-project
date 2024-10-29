import Bottom from "./sections/home/Bottom"
import Ratings from "./sections/home/Ratings"
import Specials from "./sections/home/Specials"

const HomePage = () => {
  return (
    <>
      <section>
        <Specials />
      </section>

      <section className="bg-secondary">
        <Ratings />
      </section>
      <section>
        <Bottom />
      </section>
    </>
  )
}
export default HomePage
