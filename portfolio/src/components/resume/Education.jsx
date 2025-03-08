
const Education = () => {

    return (
        <div className="">
            <div>
                <h2 className="text-3xl font-bold mb-4">Education</h2>
            </div>
            <div className="flex items-center justify-stretch">
                <div className="relative border-r-8 border-black px-8">
                    <h3 className="font-bold text-xl">Degree Goes Here Placeholder</h3>
                    <h4 className="mb-2 font-semibold text-gray-800/80">Location | School</h4>
                    <ul className="ml-4 decoration-none list-disc leading-7 text-gray-700">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quas fugit commodi repudiandae eveniet id ratione ut aut cumque neque at</li>
                        <li>Accomplishment 2</li>
                        <li>Accomplishment 3</li>
                        <li className="mt-2">Honors college probably</li>
                    </ul>
                    <div className="absolute top-0 right-8 font-semibold">
                        <h4>Expected Graduation</h4>
                    </div>
                </div>
                <div>
                    Icon or image of FIU maybe
                </div>
            </div>
        </div>
    )
}

export default Education