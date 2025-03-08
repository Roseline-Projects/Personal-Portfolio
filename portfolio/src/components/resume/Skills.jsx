
import { skills } from "../../data/text_constants"

const SkillCard = ({skill, img}) => {
    return (
        <div>
            <div>
                <img src={img} alt={skill} className="h-[160px] overflow-hidden"/>
            </div>
            <div>
                <h6 className="font-lg text-gray-600 text-center">{skill}</h6>
            </div>
        </div>
    )
}

const SkillSection = ({heading, side = "left", skillsList}) => {
    return (
        <div className="flex justify-stretch">
                <div className={`w-1/3 px-6 order-${side == "right" ? "last" : "first"}`}>
                    <h3 className={`text-xl text-${side == "left" ? "right" : "left"} font-bold`}>{heading}</h3>
                </div>
                <div className="bg-gray-200 w-2/3">
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
        <div className="space-y-20">
            <h2 className="text-3xl font-bold">Skills</h2>

            <SkillSection heading="Languages" side="left" skillsList={skills} />
            <SkillSection heading="Frameworks" side="right" skillsList={skills} />
            <SkillSection heading="Tools and Databases" side="left" skillsList={skills} />

        </div>
    )
}

export default Skills