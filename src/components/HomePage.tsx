import React from "react";
import { Button, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <main>
      <div className="mt-20">
        <h1 className="text-3xl text-center">
          Haloo 👋, Saya{" "}
          <span className="font-bold">Alfarizi Dwi Prasetyo</span>
        </h1>
        <p className="text-center mt-5">Tugas Struktur Data 👇</p>
      </div>
      <ul className="text-center mt-12">
        <li className="mt-6">
          <Button>
            <Link to="/sorting-page">Sorting Array</Link>
          </Button>
        </li>
        <li className="mt-6">
          <Button>
            <Link to="/cari-prima">Cari Prima</Link>
          </Button>
        </li>
        <li className="mt-6">
          <Button>
            <Link to="/crud-ktp">CRUD Ktp</Link>
          </Button>
        </li>
      </ul>
    </main>
  );
};

export default HomePage;
