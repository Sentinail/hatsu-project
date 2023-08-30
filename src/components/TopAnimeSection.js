import React, {useContext, useEffect, useState} from 'react'
import { themeContext } from '../context/themeContext'
import { TopAnimeSectionContainer } from '../styled-components/TopAnimeSectionContainer'
import { GridCardContainer } from '../styled-components/GridCardContainer'

const result = {
    "currentPage": 1,
    "hasNextPage": true,
    "results": [
      {
        "id": "watashi-no-shiawase-na-kekkon",
        "title": "Watashi no Shiawase na Kekkon",
        "image": "https://gogocdn.net/cover/watashi-no-shiawase-na-kekkon-1688158075.png",
        "url": "https://gogoanimehd.io/category/watashi-no-shiawase-na-kekkon",
        "genres": [
          "Fantasy",
          "Historical",
          "Romance"
        ]
      },
      {
        "id": "zom-100-zombie-ni-naru-made-ni-shitai-100-no-koto",
        "title": "Zom 100: Zombie ni Naru made ni Shitai 100 no Koto",
        "image": "https://gogocdn.net/cover/zom-100-zombie-ni-naru-made-ni-shitai-100-no-koto-1686557998.png",
        "url": "https://gogoanimehd.io/category/zom-100-zombie-ni-naru-made-ni-shitai-100-no-koto",
        "genres": [
          "Action",
          "Adult Cast",
          "Comedy",
          "Horror",
          "Seinen",
          "Supernatural",
          "Survival"
        ]
      },
      {
        "id": "mushoku-tensei-ii-isekai-ittara-honki-dasu",
        "title": "Mushoku Tensei II: Isekai Ittara Honki Dasu",
        "image": "https://gogocdn.net/cover/mushoku-tensei-ii-isekai-ittara-honki-dasu-1688156063.png",
        "url": "https://gogoanimehd.io/category/mushoku-tensei-ii-isekai-ittara-honki-dasu",
        "genres": [
          "Drama",
          "Ecchi",
          "Fantasy",
          "Isekai",
          "Reincarnation"
        ]
      },
      {
        "id": "bleach-sennen-kessen-hen-ketsubetsu-tan",
        "title": "Bleach: Sennen Kessen-hen - Ketsubetsu-tan",
        "image": "https://gogocdn.net/cover/bleach-sennen-kessen-hen-ketsubetsu-tan-1688151974.png",
        "url": "https://gogoanimehd.io/category/bleach-sennen-kessen-hen-ketsubetsu-tan",
        "genres": [
          "Action",
          "Adventure",
          "Fantasy",
          "Shounen"
        ]
      },
      {
        "id": "suki-na-ko-ga-megane-wo-wasureta",
        "title": "Suki na Ko ga Megane wo Wasureta",
        "image": "https://gogocdn.net/cover/suki-na-ko-ga-megane-wo-wasureta-1688157809.png",
        "url": "https://gogoanimehd.io/category/suki-na-ko-ga-megane-wo-wasureta",
        "genres": [
          "Comedy",
          "Romantic Subtext",
          "School",
          "Shounen"
        ]
      },
      {
        "id": "kanojo-okarishimasu-3rd-season",
        "title": "Kanojo, Okarishimasu 3rd Season",
        "image": "https://gogocdn.net/cover/kanojo-okarishimasu-3rd-season-1688155060.png",
        "url": "https://gogoanimehd.io/category/kanojo-okarishimasu-3rd-season",
        "genres": [
          "Comedy",
          "Romance",
          "Shounen"
        ]
      },
      {
        "id": "bungou-stray-dogs-5th-season",
        "title": "Bungou Stray Dogs 5th Season",
        "image": "https://gogocdn.net/cover/bungou-stray-dogs-5th-season.png",
        "url": "https://gogoanimehd.io/category/bungou-stray-dogs-5th-season",
        "genres": [
          "Action",
          "Adult Cast",
          "Mystery",
          "Organized Crime",
          "Seinen",
          "Super Power",
          "Supernatural"
        ]
      },
      {
        "id": "horimiya-piece",
        "title": "Horimiya: Piece",
        "image": "https://gogocdn.net/cover/horimiya-piece.png",
        "url": "https://gogoanimehd.io/category/horimiya-piece",
        "genres": [
          "Romance",
          "School",
          "Shounen"
        ]
      },
      {
        "id": "masamune-kun-no-revenge-r",
        "title": "Masamune-kun no Revenge R",
        "image": "https://gogocdn.net/cover/masamune-kun-no-revenge-r-1688155880.png",
        "url": "https://gogoanimehd.io/category/masamune-kun-no-revenge-r",
        "genres": [
          "Comedy",
          "Harem",
          "Romance",
          "School",
          "Shounen"
        ]
      },
      {
        "id": "maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e-kayou-2nd-season-part-2",
        "title": "Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou II",
        "image": "https://gogocdn.net/cover/maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e-kayou-2nd-season-part-2-1672331388.png",
        "url": "https://gogoanimehd.io/category/maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e-kayou-2nd-season-part-2",
        "genres": [
          "Action",
          "Fantasy",
          "Mythology",
          "Reincarnation",
          "School"
        ]
      }
    ]
}

const result2 = {
    "currentPage": 1,
    "hasNextPage": true,
    "results": [
      {
        "id": "jewelpet",
        "episodeId": "jewelpet-episode-29",
        "episodeNumber": 29,
        "title": "Jewelpet",
        "image": "https://gogocdn.net/cover/jewelpet.png",
        "url": "https://gogoanimehd.io/jewelpet-episode-29"
      },
      {
        "id": "odekake-kozame",
        "episodeId": "odekake-kozame-episode-5",
        "episodeNumber": 5,
        "title": "Odekake Kozame",
        "image": "https://gogocdn.net/cover/odekake-kozame.png",
        "url": "https://gogoanimehd.io/odekake-kozame-episode-5"
      },
      {
        "id": "helck",
        "episodeId": "helck-episode-8",
        "episodeNumber": 8,
        "title": "Helck",
        "image": "https://gogocdn.net/cover/helck-1688154157.png",
        "url": "https://gogoanimehd.io/helck-episode-8"
      },
      {
        "id": "suki-na-ko-ga-megane-wo-wasureta",
        "episodeId": "suki-na-ko-ga-megane-wo-wasureta-episode-9",
        "episodeNumber": 9,
        "title": "Suki na Ko ga Megane wo Wasureta",
        "image": "https://gogocdn.net/cover/suki-na-ko-ga-megane-wo-wasureta-1688157809.png",
        "url": "https://gogoanimehd.io/suki-na-ko-ga-megane-wo-wasureta-episode-9"
      },
      {
        "id": "idol-tenshi-youkoso-youko",
        "episodeId": "idol-tenshi-youkoso-youko-episode-7",
        "episodeNumber": 7,
        "title": "Idol Tenshi Youkoso Youko",
        "image": "https://gogocdn.net/cover/idol-tenshi-youkoso-youko.png",
        "url": "https://gogoanimehd.io/idol-tenshi-youkoso-youko-episode-7"
      },
      {
        "id": "beyblade-burst-god",
        "episodeId": "beyblade-burst-god-episode-40",
        "episodeNumber": 40,
        "title": "Beyblade Burst God",
        "image": "https://gogocdn.net/cover/beyblade-burst-god.png",
        "url": "https://gogoanimehd.io/beyblade-burst-god-episode-40"
      },
      {
        "id": "yugioh-go-rush",
        "episodeId": "yugioh-go-rush-episode-73",
        "episodeNumber": 73,
        "title": "Yu☆Gi☆Oh!: Go Rush!!",
        "image": "https://gogocdn.net/cover/yugioh-go-rush.png",
        "url": "https://gogoanimehd.io/yugioh-go-rush-episode-73"
      },
      {
        "id": "okashi-na-tensei",
        "episodeId": "okashi-na-tensei-episode-10",
        "episodeNumber": 10,
        "title": "Okashi na Tensei",
        "image": "https://gogocdn.net/cover/okashi-na-tensei-1688156495.png",
        "url": "https://gogoanimehd.io/okashi-na-tensei-episode-10"
      },
      {
        "id": "yumemiru-danshi-wa-genjitsushugisha",
        "episodeId": "yumemiru-danshi-wa-genjitsushugisha-episode-9",
        "episodeNumber": 9,
        "title": "Yumemiru Danshi wa Genjitsushugisha",
        "image": "https://gogocdn.net/cover/yumemiru-danshi-wa-genjitsushugisha-1688158262.png",
        "url": "https://gogoanimehd.io/yumemiru-danshi-wa-genjitsushugisha-episode-9"
      },
      {
        "id": "ayakashi-triangle",
        "episodeId": "ayakashi-triangle-episode-8",
        "episodeNumber": 8,
        "title": "Ayakashi Triangle",
        "image": "https://gogocdn.net/cover/ayakashi-triangle-1672328594.png",
        "url": "https://gogoanimehd.io/ayakashi-triangle-episode-8"
      },
      {
        "id": "synduality-noir",
        "episodeId": "synduality-noir-episode-8",
        "episodeNumber": 8,
        "title": "Synduality: Noir",
        "image": "https://gogocdn.net/cover/synduality-noir-1688157852.png",
        "url": "https://gogoanimehd.io/synduality-noir-episode-8"
      },
      {
        "id": "mononogatari-2nd-season",
        "episodeId": "mononogatari-2nd-season-episode-9",
        "episodeNumber": 9,
        "title": "Mononogatari 2nd Season",
        "image": "https://gogocdn.net/cover/mononogatari-2nd-season-1688155960.png",
        "url": "https://gogoanimehd.io/mononogatari-2nd-season-episode-9"
      },
      {
        "id": "masamune-kun-no-revenge-r",
        "episodeId": "masamune-kun-no-revenge-r-episode-9",
        "episodeNumber": 9,
        "title": "Masamune-kun no Revenge R",
        "image": "https://gogocdn.net/cover/masamune-kun-no-revenge-r-1688155880.png",
        "url": "https://gogoanimehd.io/masamune-kun-no-revenge-r-episode-9"
      },
      {
        "id": "lv1-maou-to-one-room-yuusha",
        "episodeId": "lv1-maou-to-one-room-yuusha-episode-9",
        "episodeNumber": 9,
        "title": "Lv1 Maou to One Room Yuusha",
        "image": "https://gogocdn.net/cover/lv1-maou-to-one-room-yuusha-1688155798.png",
        "url": "https://gogoanimehd.io/lv1-maou-to-one-room-yuusha-episode-9"
      },
      {
        "id": "zom-100-zombie-ni-naru-made-ni-shitai-100-no-koto",
        "episodeId": "zom-100-zombie-ni-naru-made-ni-shitai-100-no-koto-episode-6",
        "episodeNumber": 6,
        "title": "Zom 100: Zombie ni Naru made ni Shitai 100 no Koto",
        "image": "https://gogocdn.net/cover/zom-100-zombie-ni-naru-made-ni-shitai-100-no-koto-1686557998.png",
        "url": "https://gogoanimehd.io/zom-100-zombie-ni-naru-made-ni-shitai-100-no-koto-episode-6"
      },
      {
        "id": "tousouchuu-great-mission",
        "episodeId": "tousouchuu-great-mission-episode-20",
        "episodeNumber": 20,
        "title": "Tousouchuu: Great Mission",
        "image": "https://gogocdn.net/cover/tousouchuu-great-mission-1680203786.png",
        "url": "https://gogoanimehd.io/tousouchuu-great-mission-episode-20"
      },
      {
        "id": "shinigami-bocchan-to-kuro-maid-2nd-season-dub",
        "episodeId": "shinigami-bocchan-to-kuro-maid-2nd-season-dub-episode-5",
        "episodeNumber": 5,
        "title": "Shinigami Bocchan to Kuro Maid 2nd Season (Dub)",
        "image": "https://gogocdn.net/cover/shinigami-bocchan-to-kuro-maid-2nd-season-dub.png",
        "url": "https://gogoanimehd.io/shinigami-bocchan-to-kuro-maid-2nd-season-dub-episode-5"
      },
      {
        "id": "ao-no-orchestra",
        "episodeId": "ao-no-orchestra-episode-18",
        "episodeNumber": 18,
        "title": "Ao no Orchestra",
        "image": "https://gogocdn.net/cover/ao-no-orchestra-1677471586.png",
        "url": "https://gogoanimehd.io/ao-no-orchestra-episode-18"
      },
      {
        "id": "haai-step-jun",
        "episodeId": "haai-step-jun-episode-14",
        "episodeNumber": 14,
        "title": "Haai Step Jun",
        "image": "https://gogocdn.net/cover/haai-step-jun.png",
        "url": "https://gogoanimehd.io/haai-step-jun-episode-14"
      },
      {
        "id": "yami-shibai-11",
        "episodeId": "yami-shibai-11-episode-8",
        "episodeNumber": 8,
        "title": "Yami Shibai 11",
        "image": "https://gogocdn.net/cover/yami-shibai-11.png",
        "url": "https://gogoanimehd.io/yami-shibai-11-episode-8"
      }
    ]
}

const GridCard = ({ id, image, title, episodeNumber }) => {
    const { primaryColor, secondaryColor, tertiaryColor } = useContext(themeContext)

    let truncatedTitle = title || '';
    if (truncatedTitle.length > 30) {
        truncatedTitle = truncatedTitle.slice(0, 30) + '...';
    }


    return (
        <>
            <GridCardContainer $tertiaryColor={tertiaryColor} $secondaryColor={secondaryColor}>
                <div className='image'>
                    <img src={image} alt={id} />
                    <div className="curtain">
                        <button className='button'> Play Now </button>
                        <button className='button'> Add To Bookmark </button>
                    </div>
                    { episodeNumber && <p className='episode'>Episode: {episodeNumber} </p> }
                </div>
                <p className='title'>
                    {truncatedTitle}
                </p>
            </GridCardContainer>
        </>
    )
}

const TopAnimeSection = () => {
    const { primaryColor, secondaryColor, tertiaryColor } = useContext(themeContext)
    const [ animeList, setAnimeList ] = useState()
    const [ recentAnimeList, setRecentAnimeList] = useState()

    useEffect(() => {
        setAnimeList(result.results) //Assume this is the response from the fetch
        setRecentAnimeList(result2.results) //Assume this is the response from the fetch
    }, [])

    return (
        <TopAnimeSectionContainer>
            <section>
                <h1 className='section_title'>Top Animes</h1>
                <div className='cards'>
                    { animeList && animeList.map((anime, index) => {
                        return (
                            <GridCard episodeNumber={null} key={index} id={anime.id} image={anime.image} title={anime.title}></GridCard>
                        )
                    })}
                    
                </div>
            </section>
            <section>
                <h1 className='section_title'>Recent Episodes</h1>
                <div className='cards'>
                    { recentAnimeList && recentAnimeList.map((anime, index) => {
                        return (
                            <GridCard episodeNumber={anime.episodeNumber} key={index} id={anime.id} image={anime.image} title={anime.title}></GridCard>
                        )
                    })}
                    
                </div>
            </section>
        </TopAnimeSectionContainer>
    )
}

export default TopAnimeSection