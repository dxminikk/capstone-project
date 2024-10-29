import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Data = [
  {
    name: "Allen",
    rating: 4,
    review: "Great food and service!"
  },
  {
    name: "Jane",
    rating: 5,
    review: "I love this place!"
  },
  {
    name: "John",
    rating: 5,
    review: "The food is amazing!"
  },
  {
    name: "Megan",
    rating: 5,
    review: "I would definitely recommend this place!"
  }
]

const Ratings = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto px-5 py-12 place-items-center">
        <h1 className="font-markazi text-5xl text-primary mb-6">Our Ratings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {Data.map((item) => (
            <div className="bg-light rounded-xl p-4 text-dark flex flex-col justify-between gap-y-6">
              <div>
                <div className="flex justify-between mt-2">
                  <h2 className="font-markazi text-2xl font-bold">{item.name}</h2>
                  <p className="font-karla font-bold text-[#EE9972]">
                    {item.rating}/5 ⭐
                  </p>
                </div>
                <p className="font-karla text-dark mt-2">{item.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default Ratings
