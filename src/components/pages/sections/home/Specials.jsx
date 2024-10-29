import greekSalad from "../../../../assets/images/greek-salad.jpg"
import bruschetta from "../../../../assets/images/bruschetta.jpg"
import lemonDessert from "../../../../assets/images/lemon-dessert.jpg"
import bicycle from "../../../../assets/images/bicycle.jpg"
import Button from "../../../ui/Button"
const menuItems = [
  {
    name: "Greek Salad",
    image: greekSalad,
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
  },
  {
    name: "Brushetta",
    image: bruschetta,
    price: "$7.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
  },
  {
    name: "Lemon Dessert",
    image: lemonDessert,
    price: "$6.99",
    description:
      "This comes straight from Grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
  }
]
const Specials = () => {
  return (
    <div className="max-w-5xl mx-auto px-5 py-8">
      <div className="flex sm:flex-row flex-col justify-between">
        <h1 className="font-markazi text-4xl text-dark font-medium">
          This Week's Specials
        </h1>
        <Button className="bg-primary hover:bg-primary/80">Online Menu</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {menuItems.map((item) => (
          <article
            key={item.name}
            className="bg-light rounded-xl p-4 text-dark flex flex-col justify-between gap-y-6"
          >
            <div>
              <img src={item.image} alt={item.name} />
              <div className="flex justify-between mt-2">
                <h2 className="font-markazi text-2xl font-bold">{item.name}</h2>
                <p className="font-karla font-bold text-[#EE9972]">{item.price}</p>
              </div>
              <p className="font-karla text-dark mt-2">{item.description}</p>
            </div>
            <div className="flex gap-x-2 items-center mb-2">
              <p>Order & Delivery</p>
              <img src={bicycle} className="size-5" />
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
export default Specials
