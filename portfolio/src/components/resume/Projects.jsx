import {projectsList} from "../../data/text_constants"

const ProjectCard = ({title, date, numTeam, techStack, points}) => {
    return (
        <div className='flex justify-center items-center text-center bg-gray-300 rounded-3xl p-10 m-10 mx-16'>
            <div className="w-5/12 space-y-4">
                <h3 className="text-2xl font-bold">{title}</h3>
                <ul className="flex justify-center space-x-2 font-semibold">
                    <li className="">{date} - </li>
                    <li>{numTeam} - </li>
                    <li>{techStack.join(", ")}</li>
                </ul>
                <a className="inline-block bg-gray-400 px-6 py-1 rounded-xl">GitHub Repository</a>
            </div>
            <div className="space-y-5">
                {
                    points.map((point, index) => (
                        <p className="text-left" key={index}>
                            {point}
                        </p>
                    ))
                }
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <div>
            <h1 className='text-3xl text-center font-bold'>Projects</h1>
            <div>
                {console.log(projectsList)}
                <ul>
                    {
                        projectsList.map((project, index) => (
                            <li className="" key={index}>
                                <ProjectCard {...project} />
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}

export default Projects