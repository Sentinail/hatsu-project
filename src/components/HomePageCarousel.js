import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';
import { getTopAiringAnime } from '../utilities/GogoAnime';
import HomeCarouselCard from './HomeCarouselCard';

const HomeCarousel = () => {
    const [ topAiringAnime, setTopAiringAnime ] = useState([])

    useEffect(() => {
        const getTopAiringAnimes = async () => {
            const result = await getTopAiringAnime()
            return result.results
        }

        getTopAiringAnimes().then(
            res => {
                setTopAiringAnime(res)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }, []) 

    console.log(topAiringAnime)

    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        {
            topAiringAnime.length > 0 && topAiringAnime.map((anime, index) => {
                return (
                    <SwiperSlide key={index}>
                        <HomeCarouselCard key={index} id={anime.id} title={anime.title} image={anime.image}></HomeCarouselCard>
                    </SwiperSlide>
                )
            })
        }
        </Swiper>
    );
};

export default HomeCarousel