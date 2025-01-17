import { useState } from "react"

const Header = () => {

    return(
        <div className="bg-gray-200 py-32">
            <div className="flex items-center justify-evenly">
                <div className="w-1/2 space-y-4 ml-8">
            {/* <img className="absolute left-0 w-full -translate-y-[63rem] -z-10" src='https://images.unsplash.com/32/RgJQ82pETlKd0B7QzcJO_5912578701_92397ba76c_b.jpg?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' /> */}
                    <h1 className="text-5xl font-bold text-gray-400">Heading - Greetings</h1>
                    <p className="text-2xl font-semibold text-gray-600 w-10/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid distinctio quae blanditiis et atque iste ab magnam sunt dolor, facere obcaecati mollitia accusantium esse sit labore quos id soluta eius.</p>
                    <h2 className="text-xl font-bold">Aspiring Full Stack Developer | Hobbyist Artist</h2>
                </div>
                <div className="">
                    <img src='' alt="Image" width={300}/>
                </div>
            </div>
        </div>
    )
}

export default Header