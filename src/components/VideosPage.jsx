import React, {useState, useEffect} from 'react';
import VideoCard from "./VideoCard";
import loadImg from "../assets/Black-hole.gif"

export default function VideoPage() {

    const [datas, setDatas] = useState([]);
    const [channelIcon, setChannelIcon] = useState({})
    const [loader, setLoader] = useState(true)

    // Required param for api call
  const apiKey = 'AIzaSyDQHvO1U-fiwqzyTE4eoVeYnCXfZx4HH4I';
  const videoEndPoint = 'https://www.googleapis.com/youtube/v3/videos?';
  const channelEndPoint = "https://www.googleapis.com/youtube/v3/channels?";


//   Get region code
const userLanguage = navigator.language;
const region = userLanguage.split('-')[1];


//   GET CHANNEL ICON
  const fetchChannelIcon = async (channelId) => {
    try {
      const result = await fetch(
        channelEndPoint + new URLSearchParams({
          key: apiKey,
          part: 'snippet',
          id: channelId,
        })
      );
      const data = await result.json();
      setChannelIcon((prevChannelIcons) => ({
        ...prevChannelIcons,
        [channelId]: data.items[0].snippet.thumbnails.default.url,
      }));
    } catch (error) {
      console.error('Error fetching channel icon:', error);
    }
  };

//   Calling the api
useEffect(()=> {
    const fetchVideos = async () => {
        try {
            const result = await fetch(videoEndPoint + new URLSearchParams({
            key: apiKey,
            part: 'snippet',
            chart: 'mostPopular',
            maxResults: 51,
            regionCode: region
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


useEffect(() => {
    datas.items &&
      datas.items.forEach((item) => {
        fetchChannelIcon(item.snippet.channelId);
      });
  }, [datas]);


// Formatting time
const formatTime = function(date) {
        const calcHoursPassed = (date1, date2) => {
            return Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60));
        }
      
        const time = new Date(date);
        const hourPassed = calcHoursPassed(new Date(), time);
        const day = Math.round(Math.abs(hourPassed / 24));
        const week = Math.round(Math.abs(day / 7));
        const min = Math.round(Math.abs(hourPassed / 60));

        
        if (hourPassed < 24) {
            if (hourPassed < 1) return `${min} ${min > 1 ? 'mins' : 'min'}` 
            else return `${hourPassed} ${hourPassed > 1 ? 'hours' : 'hour'}`;
        }

        if (hourPassed > 24) {
            if (week > 1) {
                return `${week} weeks`
            } else if (day === 7) {
                return `1 week`
            } else return `${day} ${day > 1 ? 'days' : 'day'}`
        }
}


// Looping over fetched data to render component
const item = datas.items
  const cards = item ? (item.map(data => {
    return <VideoCard 
        key = {data.id} 
        chanID = {data.snippet.channelId}
        title = {data.snippet.title}
        img = {data.snippet.thumbnails.high.url} 
        chanTitle = {data.snippet.channelTitle} 
        chanIcon = {channelIcon[data.snippet.channelId]} 
        time = {formatTime(data.snippet.publishedAt)}
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