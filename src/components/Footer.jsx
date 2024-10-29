import { routes } from "./Nav"

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="max-w-5xl mx-auto px-5 py-8 text-light">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl text-primary font-semibold">Doormat Navigation</h2>
            <ul>
              {routes.map((x) => (
                <li key={x.title}>
                  <a href={x.href}>{x.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl text-primary font-semibold">Contact</h2>
            <p>Széchenyi Street 22, Budapest</p>
            <p>+36701234567</p>
            <p>info@littlelemon.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
