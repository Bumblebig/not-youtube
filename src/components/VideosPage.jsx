import React, {useState, useEffect} from 'react';
import VideoCard from "./VideoCard";
import loadImg from "../assets/Black-hole.gif"

export default function VideoPage() {

    const [datas, setDatas] = useState([]);
    const [channelIcon, setChannelIcon] = useState('')
    const [loader, setLoader] = useState(true)

    // Required param for api call
  const apiKey = 'AIzaSyDQHvO1U-fiwqzyTE4eoVeYnCXfZx4HH4I';
  const videoEndPoint = 'https://www.googleapis.com/youtube/v3/videos?';
  const channelEndPoint = "https://www.googleapis.com/youtube/v3/channels?";

  const getChannelIcon = (videoID) => {
    
    const res = fetch(channelEndPoint + new URLSearchParams({
            key: apiKey,
            part: 'snippet',
            id: videoID
        }))
        .then(res => res.json())
        .then(data => {
            consol.log("fetched data: ", data)
            setChannelIcon(data.items[0].snippet.thumbnails.default.url);
        }).catch(error => {
            console.error('Error fetching channel icon:', error);
        });
}

//   Calling the api
useEffect(()=> {
    const fetchVideos = async () => {
        try {
            const result = await fetch(videoEndPoint + new URLSearchParams({
            key: apiKey,
            part: 'snippet',
            chart: 'mostPopular',
            maxResults: 51,
            regionCode: 'US'
        }));

        const data = await result.json();
        setDatas(data)
        setLoader(false)
    } catch(error) {
        console.error('Error is: ', error);
        setLoader(false)
    }
    }

    fetchVideos();
}, [])






// Looping over fetched data to render component
const item = datas.items
  const cards = item ? (item.map(data => {
    // getChannelIcon(data.snippet.channelId)
    // console.log(channelIcon)
    return <VideoCard 
        key = {data.id} 
        chanID = {data.snippet.channelId}
        title = {data.snippet.title}
        img = {data.snippet.thumbnails.high.url} 
        chanTitle = {data.snippet.channelTitle} 
        chanIcon = {channelIcon } 
    />
  })) : null;

    return(
        <section className={`flex gap-5 flex-wrap m-auto pt-36 ${loader ? 'h-screen' : ''}`}>
            {
                loader ? 
                (<div className='m-auto translate-y-2/4 h-full'>
                    <img src={loadImg} alt='Loading...' className='w-20'/>
                </div>) : 
                (cards)
            }
        </section>
    )
}