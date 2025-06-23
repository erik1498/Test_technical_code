"use client";

import { useState } from "react";


export default function Home() {
  const [angka, setAngka] = useState<string>("")
  const [segitigaResult, setSegitigaResult] = useState<string[]>([])
  const [bilanganGanjilResult, setBilanganGanjilResult] = useState<number[]>([])
  const [bilanganPrimaResult, setBilanganPrimaResult] = useState<number[]>([])

  const generateSegitiga = () => {
    const arrSegitiga = []
    for (let i = 0; i < angka.length; i++) {
      arrSegitiga.push(`${angka[i]}${new Array(i + 1).fill(0).map(x => {
        return x
      }).join("")}`)
    }
    setSegitigaResult(arrSegitiga)
    setBilanganGanjilResult([])
    setBilanganPrimaResult([])
  }

  const generateBilanganGanjil = () => {
    const ganjilSelected: number[] = []
    for (let i = 0; i < Number(angka); i++) {
      if (i % 2 == 1 || i == 0) {
        ganjilSelected.push(i)
      }
    }

    setBilanganGanjilResult(ganjilSelected)
    setSegitigaResult([])
    setBilanganPrimaResult([])
  }


  const generateBilanganPrima = () => {
    const primaSelected: number[] = []
    for (let i = 2; i < Number(angka); i++) {
      let selected = true;
      
      const primaMax = i - 1 <= 5 ? i - 1 : 5

      for (let j = 2; j < primaMax; j++) {
        if (i % j == 0) {
          selected = false;
        }
      }
      if (selected) {
        primaSelected.push(i)
      }
    }

    setBilanganPrimaResult(primaSelected)
    setSegitigaResult([])
    setBilanganGanjilResult([])
  }

  return (
    <>
      <input
        type="number"
        name="angka"
        id="angka"
        onChange={(e) => {
          setAngka(e.target.value)
        }}
        placeholder="Input Angka"
        className="px-2 py-1 outline-1 rounded-sm mb-4" />
      <div className="flex gap-x-2">
        <button type="button"
          onClick={() => {
            generateSegitiga()
          }}
        >
          Generate Segitiga
        </button>
        <button
          type="button"
          onClick={() => {
            generateBilanganGanjil()
          }}
        >
          Generate Bilangan Ganjil
        </button>
        <button
          type="button"
          onClick={() => {
            generateBilanganPrima()
          }}
        >
          Generate Bilangan Prima
        </button>
      </div>

      <p className="text-2xl font-bold mt-5">Result : </p>
      {
        segitigaResult?.map((x, i) => {
          return <p key={i}>{x} </p>
        })
      }

      <div className="flex flex-wrap">
        {
          bilanganGanjilResult?.map((x, i) => {
            return <span key={i}>{x} {i != bilanganGanjilResult.length - 1 ? "," : ""}</span>
          })
        }
      </div>

      <div className="flex flex-wrap">
        {
          bilanganPrimaResult?.map((x, i) => {
            return <span key={i}>{x} {i != bilanganPrimaResult.length - 1 ? "," : ""}</span>
          })
        }
      </div>
    </>
  );
}
