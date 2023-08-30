import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useEffect, useState } from 'react';
import { getTopAiringAnime } from '../utilities/GogoAnime';
import HomeCarouselCard from './HomeCarouselCard';
import { Navigation, Autoplay } from 'swiper/modules';

const HomeCarousel = () => {
    const [topAiringAnime, setTopAiringAnime] = useState([]);

    useEffect(() => {
        const getTopAiringAnimes = async () => {
            const result = await getTopAiringAnime();
            return result.results;
        };

        getTopAiringAnimes()
            .then((res) => {
                setTopAiringAnime(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
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
    );
};

export default HomeCarousel;
