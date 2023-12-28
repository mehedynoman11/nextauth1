import { AiFillCaretRight } from "react-icons/ai"
import SignleMenu from "./SignleMenu"

const Menu = () => {
  return (
    <section>
        <div>
            <div className="mt-6 flex items-center justify-center">
                <h1 className="text-3xl font-extrabold">Filter By Menu</h1><AiFillCaretRight className="text-3xl"/>
            </div>
            <div className="my-6"></div>
            <div className="grid grid-cols-3 gap-6">
                <SignleMenu />
                <SignleMenu />
                <SignleMenu />
                <SignleMenu />
                <SignleMenu />
                <SignleMenu />
            </div>
        </div>
    </section>
  )
}

export default Menu