"use client";
import "@style/diary.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Diary() {
    const [judul, setJudul] = useState([]);
    const [isiDiary, setKonten] = useState([]);
  
    const endpointAPI = "https://655ea551879575426b43b8bb.mockapi.io/Diary";
  
    async function getDiary() {
      const res = await axios.get(endpointAPI);
  
      //ambil data
      const data = res.data;
  
      //ambil judul
      const judul = data.map((item) => item.judul);
      setJudul(judul);
  
      //ambil isi_diary
      const isi_diary = data.map((item) => item.konten);
      setKonten(isi_diary);
    }
  
    useEffect(() => {
      getDiary();
    }, []);
  
    
    return (
      <div>
        {judul.length > 0 ? (
          <ul>
            {judul.map((item, idx) => (
                <li key={idx}>
                  <div className="diary-container">
                      <h1>{judul[idx]}</h1>
                      <p className="p-diary">{isiDiary[idx]}</p>
                  </div>
                </li>
  
            ))}
          </ul>
        ) : (
          "API Is Loading..."
        )}
      </div>
    );
  }