import SocialCard from "./SocialCard"
import {socialLinks} from '../../data/text_constants'

const About = () => {

    return (
        <section className="flex justify-center items-center gap-20 bg-gray-200 py-12">
            <div className="w-8/12 pr-8 border-r-solid border-r-8 border-gray-400">
                <h2 className="text-4xl font-bold mb-4">About</h2>
                <p className="font-thin">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis minus ut amet, soluta, voluptate corporis, unde animi placeat dolore omnis exercitationem? Harum, similique? Consequatur numquam fugit quasi, perferendis magnam odit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque qui natus dolore quisquam sint repellat eos, aut labore vitae, atque quaerat in commodi doloremque alias distinctio veritatis, id temporibus officia.</p>
            </div>
            <div className="list-none w-2/12 text-center space-y-4">
                {
                    socialLinks.map((page, index) => (
                        <li key={index} className="bg-gray-400 px-4 py-2 text-xl rounded-xl">
                            <a href={page.link}>
                                <h6>{page.site}</h6>
                            </a>
                        </li>
                    ))
                }

            </div>
        </section>
    )
}

export default About