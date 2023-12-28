import Image from "next/image"
import food1 from "../../public/assets/food12.jpg"

export default function HomeMenu() {
  return (
    <section className="grid grid-cols-2 bg-orange-200">
      <div className="flex flex-col justify-center w-auto text-left ml-4">
        <h1 className="text-4xl font-bold">
          Chicken Grill With Sauce.
        </h1>
        <p className="text-lg font-medium">
        There are many variations of passages of Lorem Ipsum available, but the majority anything embarrassing hidden in the middle of text.
        </p>
      </div>
        <div className=" relative h-full">
            <Image src={food1}></Image>
        </div>
    </section>
  )
}
