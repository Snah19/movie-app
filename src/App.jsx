import { useState } from "react";
import SearchField from "./components/SearchField";


const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main>
      <div className='pattern bg-[url(../public/img/hero-bg.png)]' />
      <div className='wrapper'>
        <header>
          <img src="../public/img/hero.png" alt="Hero Banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassles</h1>
        </header>
        <SearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h1 className="text-white">{searchTerm}</h1>
      </div>
    </main>
  )
}

export default App;