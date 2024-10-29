import header from "../../../../assets/images/header.jpg"
const Bottom = () => {
  return (
    <div className="max-w-5xl mx-auto px-5 py-12 text-dark">
      <h1 className="font-karla font-bold text-4xl">Little Lemon</h1>
      <p className="font-karla text-xl">Chicago</p>
      <div className="mt-4 grid md:grid-cols-2">
        <p className="place-self-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur numquam,
          facilis veritatis amet incidunt officia pariatur non natus corporis. Corrupti
          debitis quia ullam consequatur commodi. Deserunt dolor sit similique dolorum.
        </p>
        <div className="flex gap-4">
          <img src={header} className="size-1/2 rounded-xl" />
          <img src={header} className="size-1/2 rounded-xl" />
        </div>
      </div>
    </div>
  )
}
export default Bottom
