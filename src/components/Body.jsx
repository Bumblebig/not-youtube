
import VideoPage from "./VideosPage"
import Tags from "./Tags"

export default function Body () {
    return(
        <section className="p-7">
            <Tags />

            <div className="">
                <VideoPage />
            </div>
        </section>
    )
}