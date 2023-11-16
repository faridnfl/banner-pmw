'use client'

import { useState } from 'react'
import Image from "next/image";
import"./globals.css"

export default function Home() {

  const [nama, setNama] = useState('Farid Naufal Afiq')
  const [namaBaru, gantiNama]= useState("")

  function handleChangeName(event) {
    gantiNama(event.target.value);
  }

  function handlerGantiNama() {
    setNama(namaBaru);
    gantiNama("");
  }

  function pressEnter(event) {
    if (event.key === 'Enter') {
      handlerGantiNama();
    }
  }


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
              <h1>{nama}</h1>
              <div className="bio-nim-header-banner">
                {/* NIM dan bio */}
                <p>D121211012</p>
                <p>Pemrograman Web 2023</p>
              </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          {/* Tombol CTA */}
          <div className="text-form">
                <input type="text" name="inputnama" onChange={handleChangeName} onKeyPress={pressEnter} />
          </div>
          <div className="cta-button" style={{ marginTop: "12px"}} onClick={handlerGantiNama}>
              <p>Ganti Nama</p>
          </div>
        </div>
      </div>
   </div>
  )
}
