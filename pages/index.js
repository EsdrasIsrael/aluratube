import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline"

function HomePage() {
  return (
        <>
            <CSSReset/>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu/>
                <Header/>
                <Timeline playlists={config.playlists}/>
            </div>
        </>    
  )
}

export default HomePage

/* function Menu(){
  return(
    <div>
        Menu
    </div>
  )
} */

const StyledHeader = styled.div`
    img{
        width:80px;
        height: 80px;
        border-radius:50%;
    }
    .info-user{
        display:flex;
        margin-top: 50px;
        align-items:center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`

function Header(){
  return(
    <StyledHeader>
      {/* <img src={``}/> */}
      <section className="info-user">
          <img src={`http://github.com/${config.github}.png`}/>
          <div>
            <h2>{config.name}</h2>
            <p>{config.job}</p>
          </div>
      </section>
    </StyledHeader>
  )
}

function Timeline({playlists}){
    const playlistNames = Object.keys(playlists);

    return(
        <StyledTimeline>
            {
                playlistNames.map(playlistName => {
                    const videos = playlists[playlistName];
                    return (
                        <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map( video => {
                                return(
                                    <a href={video.url}>
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

