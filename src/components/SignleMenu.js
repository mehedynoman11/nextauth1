import Image from "next/image"
import Link from "next/link"
import food2 from "../../public/assets/food2.jpg"

const SignleMenu = () => {
    return (
        <div>
            <article className="bg-orange-200/80 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/50 duration-300">
                <Link href="/">
                    <Image src={food2} className="block mx-auto"></Image>
                </Link>
                <div className="my-3">
                    <h2 className="text-2xl font-bold">Vegetable and Meat on Bowl</h2>
                    <p className="text-gray-800 text-sm font-medium"> Lorem lipsum dolor sit amet, connection elit.</p>
                </div>
                <div className="my-4">
                    <button className="px-4 py-3 font-bold bg-red-400 rounded-xl shadow-xl" type="submit">Add to cart $154</button>
                </div>
            </article>
        </div>
    )
}

export default SignleMenu