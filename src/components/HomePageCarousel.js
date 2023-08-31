import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useEffect, useState } from 'react';
import { getTopAiringAnime } from '../utilities/GogoAnime';
import HomeCarouselCard from './HomeCarouselCard';
import { Navigation, Autoplay } from 'swiper/modules';
const loadingMiku = require("../assets/icons/loading.gif")

const HomeCarousel = () => {
    const [topAiringAnime, setTopAiringAnime] = useState([]);
    const [ loaded, setLoaded ] = useState(false)

    useEffect(() => {
        setLoaded(false)
        const getTopAiringAnimes = async () => {
            const result = await getTopAiringAnime();
            return result.results;
        };

        getTopAiringAnimes()
            .then((res) => {
                setTopAiringAnime(res);
                setLoaded(true)
            })
            .catch((err) => {
                console.log(err);
            });
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
                onSlideChange={() => console.log('Slide changed')}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
        >
            {topAiringAnime.length > 0 &&
                topAiringAnime.map((anime, index) => (
                    <SwiperSlide key={index}>
                        <HomeCarouselCard
                            key={index}
                            id={anime.id}
                            title={anime.title}
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
