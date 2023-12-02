import React, { useState } from "react";
import { Button } from "@radix-ui/themes";
const PrimaChecker: React.FC = () => {
  const [batasAwal, setBatasAwal] = useState<number | "">("");
  const [batasAkhir, setBatasAkhir] = useState<number | "">("");
  const [result, setResult] = useState<number[]>([]);

  const cekBilanganPrima = (bilangan: number): boolean => {
    if (bilangan <= 1) {
      return false;
    }
    for (let i = 2; i * i <= bilangan; i++) {
      if (bilangan % i === 0) {
        return false;
      }
    }
    return true;
  };

  const handleSearch = () => {
    const start = parseInt(String(batasAwal));
    const end = parseInt(String(batasAkhir));
    const primes: number[] = [];

    if (!isNaN(start) && !isNaN(end) && start < end) {
      for (let i = start; i <= end; i++) {
        if (cekBilanganPrima(i)) {
          primes.push(i);
        }
      }
      setResult(primes);
    } else {
      alert(
        "Masukkan range bilangan yang valid (bilangan awal harus lebih kecil dari bilangan akhir)"
      );
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl mt-10">
        Aplikasi Pencari
        <span className="text-orange-500"> Bilangan Prima</span>
      </h2>
      <p className="text-red-400 mt-2">Pakai mode Dekstop agar lebih nyaman</p>
      <div className="flex items-center justify-center mt-12">
        <div>
          <label>Dari : </label>
          <input
            type="number"
            value={batasAwal}
            className="rounded-md border-solid border-2"
            onChange={(e) => setBatasAwal(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label>Sampai : </label>
          <input
            type="number"
            value={batasAkhir}
            className="border-solid border-2 rounded-md"
            onChange={(e) => setBatasAkhir(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div className="mt-12">
        <Button onClick={handleSearch}>Cari Bilangan Prima</Button>
      </div>
      <div>
        <h3 className="mt-12">Hasil:</h3>
        {result.length > 0 ? (
          <p>
            Bilangan prima dalam range tersebut:{" "}
            <span className="font-bold">{result.join(", ")}</span>
          </p>
        ) : (
          <p>Tidak ada bilangan prima dalam range tersebut.</p>
        )}
      </div>
    </div>
  );
};

export default PrimaChecker;
