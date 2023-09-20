import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useEffect, useState } from 'react';
import { getTopAiringAnime } from '../utilities/GogoAnime';
import HomeCarouselCard from './HomeCarouselCard';
import { Navigation, Autoplay } from 'swiper/modules';
import { useHomeContentCache } from '../context/homeContentCacheContext';
const loadingMiku = require("../assets/icons/loading.gif")

const HomeCarousel = () => {
    const { homeCarouselCache: fetchResult, setHomeCarouselCache: setFetchResult } = useHomeContentCache()
    const [ loaded, setLoaded ] = useState(false)

    useEffect(() => {
        const fetchTopAiringAnimes = async () => {
            try {
                const result = await getTopAiringAnime();
                setFetchResult(result)
                setLoaded(true)

            } catch (err) {
                console.log(err)
            }
        }
        
        if (fetchResult === undefined) {
            setLoaded(false)
            fetchTopAiringAnimes()
        } else {
            setLoaded(true)
          }
    }, []);
    
    return (
        <>
            { loaded ?
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
        >
            { fetchResult.results.length > 0 &&
                fetchResult.results.map((anime, index) => (
                    <SwiperSlide key={index}>
                        <HomeCarouselCard
                            key={index}
                            id={anime.id}
                            title={anime.title.userPreferred}
                            image={anime.image}
                        ></HomeCarouselCard>
                    </SwiperSlide>
                ))}
        </Swiper>
            :
            <>  
                <img className='loading' src={loadingMiku} alt='Loading...' />
            </>
        }
        </>
    );
};

export default HomeCarousel;
