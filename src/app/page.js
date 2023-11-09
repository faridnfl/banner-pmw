import Image from "next/image";
import"./globals.css"

export default function Home() {
  return (
   <div className="body">
      <div className="banner-container" >
         {/* Kartunya */}
        <div className="header-banner-wrapper">
            {/* Foto profil dan Nama */}
          <div className="profil-header-banner">
            {/* Foto profil */}
            <img src="amongus.png"></img>
          </div>
          <div className="Content-header-banner" class="*">
              {/* Nama dan kawan2 */}
              <h1>Farid Naufal Afiq</h1>
              <div className="bio-nim-header-banner">
              {/* NIM dan bio */}
              <p>D121211012</p>
              <p>Pemrograman Web 2023</p>
              </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          {/* Tombol CTA */}
          <button className="btn">Halo!</button>
        </div>
      </div>
   </div>
  )
}
