import Education from "./Education"
import Projects from "./Projects"
import Skills from "./Skills"

const Resume = () => {
    return (
        <div className="my-20 mx-16 p-2 space-y-20">
            <Education />
            <Skills />
            <Projects />
        </div>
    )
}

export default Resume