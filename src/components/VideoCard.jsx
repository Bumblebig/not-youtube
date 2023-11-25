// import channelPic from "../assets/pfp.jpg";

export default function VideoCard (props) {
    return (
        <div className="pt-3 pb-6 cursor-pointer card">
            <img src={props.img} alt="video" className="w-full rounded-xl transition-all hover:rounded-none h-80"/>

            <div className="wrapper flex items-center">
                <img src={props.chanIcon} alt="icon" className="w-12 h-12 rounded-full relative top-1"/>
                <div>
                <h2 className="font-medium mt-3 px-5 text-lg">{props.title}</h2>
                <p className="text-gray-500 px-5 text-sm mt-1">{props.chanTitle} • <span>10 hours ago</span></p>
                </div>
            </div>
        </div>
    )
}