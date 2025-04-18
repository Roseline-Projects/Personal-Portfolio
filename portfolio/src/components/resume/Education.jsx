import { education } from "../../data/text_constants"

const Education = () => {

    return (
        <div className="">
            <div>
                <h2 className="text-3xl text-center font-bold mb-4">Education</h2>
            </div>
            <div className="flex items-center">
                <div className="relative border-r-8 border-black px-12">
                    <h3 className="font-bold text-xl">{education.degree}</h3>
                    <h4 className="mb-2 font-semibold text-gray-800/80">{education.location} | {education.uni}</h4>
                    <ul className="ml-4 decoration-none list-disc leading-7 text-gray-700">
                        {
                            education.points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))
                        }
                        <li className="mt-2">{education.highlight}</li>
                    </ul>
                    <div className="absolute top-0 right-8 font-semibold">
                        <h4>{education.date}</h4>
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