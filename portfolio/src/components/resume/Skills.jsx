import { skills } from "../../data/text_constants"

const SkillCard = ({skill, img}) => {
    return (
        <div>
            <div>
                <img src={img} alt={skill} className="h-[120px] overflow-hidden"/>
            </div>
            <div>
                <h6 className="text-lg mt-4 text-gray-600 text-center">{skill}</h6>
            </div>
        </div>
    )
}

const SkillSection = ({heading, side = "left", skillsList}) => {
    return (
        <div className="flex justify-stretch">
                <div className={`w-1/3 px-6 ${side == "left" ? "order-last" : "order-first"}`}>
                    <h3 className={`text-2xl ${side == "right" ? "text-right" : "text-left"} font-bold`}>{heading}</h3>
                </div>
                <div className="bg-gray-200 w-2/3 p-8 rounded-lg">
                    <ul className="flex items-center justify-around">
                        {
                            skillsList.map((skill, index) => (
                                <li key={index}>
                                    <SkillCard {...skill} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
    )
}

const Skills = () => {
    return (
        <div className="space-y-14">
            <h2 className="text-3xl text-center font-bold">Skills</h2>
            <SkillSection heading="Languages" side="left" skillsList={skills} />
            <SkillSection heading="Frameworks" side="right" skillsList={skills} />
            <SkillSection heading="Tools and Databases" side="left" skillsList={skills} />
        </div>
    )
}

export default Skills