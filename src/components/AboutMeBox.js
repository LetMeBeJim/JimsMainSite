import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faCarrot } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'


library.add(fab, faCheckSquare, faCoffee, faCarrot, faComment, faDiscord)
const AboutMeBox = (props) => {
    const link = props.link;
    const description = props.description;
    const logo = props.logo;
    const topColor = props.topColor;
    const bottomColor = props.bottomColor;

    return (
        <>
            <div className="col h-[25rem] w-[15rem] min-w-[12.5rem] px-2 py-2 mx-5">
                <a href={link} target="_blank" rel="noreferrer" className="">
                    <div className={`bg-[${topColor}] flex items-center justify-center border-solid border-[4px] border-black w-full h-50 rounded-tl-full rounded-tr-full`}>
                        <FontAwesomeIcon className="h-75" icon={logo} />
                    </div>
                    <div className={`flex items-center justify-center text-center text-xl bg-[${bottomColor}] border-solid border-r-[4px] font-semibold border-l-[4px] border-b-[4px] border-black w-full h-50 rounded-bl-2xl rounded-br-2xl`}>
                        {description}
                    </div>
                </a>
            </div>
        </>
    )
}

export default AboutMeBox;
