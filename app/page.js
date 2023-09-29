'use client'
import React, { useEffect } from 'react'
import TimelineData from '../components/timelineData'
import LineTimeDetails from '../components/lineTimeDetail'

export default function Home() {

  const slides = [
    {
      title: "Crecimiento en 48 años",
      mainTitle: "La historia empezó en 1974",
      detail: "Grupo Monge incursiona en el mercado costarricense de mayoreo de electrodomésticos con la apertura de la empresa Continentes S.A.",
      lineTitle: "Fundación 1974"
    },
    {
        title: "Crecimiento en 100 años",
        mainTitle: "La historia empezó en 3000",
        detail: "Grupo Monge incursiona en el mercado costarricense de mayoreo de electrodomésticos con la apertura de la empresa Continentes S.A.",
        lineTitle: "Fundación 1974"
    },
    {
        title: "Otro Texto",
        mainTitle: "La historia empezó en 4433",
        detail: "Grupo Monge incursiona en el mercado costarricense de mayoreo de electrodomésticos con la apertura de la empresa Continentes S.A.",
        lineTitle: "Fundación 1974"
    }
]

  return (
    <main className="flex flex-col items-center h-screen justify-between p-24 container m-auto">

      <TimelineData slides={slides}/>
      
    </main>
  )
}
