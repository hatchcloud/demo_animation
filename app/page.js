'use client'
import React, { useEffect } from 'react'
import TimelineCarrusel from '../components/timelineCarrusel'

export default function Home() {

  const slides = [
    {
      title: "Entrada primero",
      mainTitle: "La historia empezó en 01",
      detail: "Grupo Monge incursiona en el mercado costarricense de mayoreo de electrodomésticos con la apertura de la empresa Continentes S.A.",
      lineTitle: "Fundación 1974"
    },
    {
        title: "Crecimiento en 100 años",
        mainTitle: "La historia empezó en 02",
        detail: "Grupo Monge incursiona en el mercado costarricense de mayoreo de electrodomésticos con la apertura de la empresa Continentes S.A.",
        lineTitle: "Fundación 1974"
    },
    {
        title: "Otro Texto",
        mainTitle: "La historia empezó en 03",
        detail: "Grupo Monge incursiona en el mercado costarricense de mayoreo de electrodomésticos con la apertura de la empresa Continentes S.A.",
        lineTitle: "Fundación 1974"
    }
    ,
    {
        title: "Otro Texto",
        mainTitle: "La historia empezó en 04",
        detail: "Grupo Monge incursiona en el mercado costarricense de mayoreo de electrodomésticos con la apertura de la empresa Continentes S.A.",
        lineTitle: "Fundación 1974"
    },
    {
        title: "Otro Texto",
        mainTitle: "La historia empezó en 05",
        detail: "Grupo Monge incursiona en el mercado costarricense de mayoreo de electrodomésticos con la apertura de la empresa Continentes S.A.",
        lineTitle: "Fundación 1974"
    }
]

  return (
    <main className="flex flex-col items-center h-screen p-24 container m-auto">

      <TimelineCarrusel slides={slides}/>
      
    </main>
  )
}
