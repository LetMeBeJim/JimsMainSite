import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee)
const AboutMeBox = (props) => {
    const link = props.link;
    const description = props.description;
    const logo = props.logo;

    return (
        <>
            <div className="col h-[30vh] w-25 px-2 mx-5">
                <a href={link} target="_blank" rel="noreferrer" className="">
                    <div className="row border-solid border-[4px] border-black w-full h-50 rounded-tl-full rounded-tr-full ">
                        <FontAwesomeIcon className="h-75" icon={logo} />
                    </div>
                    <div className="row bg-[#ffb759] border-solid border-r-[4px] border-l-[4px] border-b-[4px] border-black w-full h-50 rounded-bl-2xl rounded-br-2xl">
                        {description}
                    </div>
                </a>
            </div>
        </>
    )
}

export default AboutMeBox;
