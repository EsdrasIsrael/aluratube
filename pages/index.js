import { React, useState } from "react"
import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline"

function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = useState("");

    return (
        <>
            <CSSReset/>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
                <Header/>
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists}/>
            </div>
        </>    
    )
}

export default HomePage

const StyledHeader = styled.div`
    .github-user{
        width:80px;
        height: 80px;
        border-radius:50%;
    }
    .info-user{
        display:flex;
        align-items:center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`
const StyledBanner = styled.div`
    background-image: url(${config.bg});
    height: 230px;
`

function Header(){
  return(
    <StyledHeader>
        <StyledBanner/>
        <section className="info-user">
            <img className="github-user" src={`http://github.com/${config.github}.png`}/>
            <div>
            <h2>{config.name}</h2>
            <p>{config.job}</p>
            </div>
        </section>
    </StyledHeader>
  )
}

function Timeline({searchValue, playlists}){
    const playlistNames = Object.keys(playlists);

    return(
        <StyledTimeline>
            {
                playlistNames.map(playlistName => {
                    const videos = playlists[playlistName];
                    return (
                        <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos
                                .filter(video => {
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();
                                    return titleNormalized.includes(searchValueNormalized);
                                })
                                .map( video => {
                                    return(
                                        <a key={video.url} href={video.url}>
                                            <img src={video.thumb}/>
                                            <span>{video.title}</span>
                                        </a>
                                    )
                                })}
                        </div>
                        </section>
                    );
                })
            }
        </StyledTimeline>
    )
}

