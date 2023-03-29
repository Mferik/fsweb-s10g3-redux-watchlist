import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useSelector, useDispatch } from "react-redux";
import { addFav } from "./action/action";

function App() {
  const [sira, setSira] = useState(0);
  const dispatch = useDispatch();
  const favMovies = useSelector((state) => state.favMovies);

  function sonrakiFilm() {
    setSira(sira + 1);
    buttonVisibility(sira + 1);
  }

  function öncekiFilm() {
    setSira(sira - 1);
    buttonVisibility(sira - 1);
  }
  function basaDon() {
    setSira(0);
    buttonVisibility(0);
  }

  const buttonVisibility = (currentIndex) => {
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    if (currentIndex <= 0) {
      prevButton.style.display = "none";
    } else {
      prevButton.style.display = "block";
    }
    if (currentIndex === 19) {
      nextButton.style.display = "none";
    } else {
      nextButton.style.display = "block";
    }
  };

  return (
    <div className="wrapper max-w-2xl mx-auto ">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={sira} />

          <div className="flex gap-3 justify-end py-3">
            <button
              onClick={basaDon}
              disabled={sira === 0}
              className={`select-none px-4 py-2 border ${
                sira === 0
                  ? "border-gray-300 text-gray-300 cursor-not-allowed"
                  : "border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
              }`}
            >
              Başa dön
            </button>
            <button
              id="prev-button"
              onClick={öncekiFilm}
              disabled={sira === 0}
              className={`hidden select-none px-4 py-2 border ${
                sira === 0
                  ? "border-gray-300 text-gray-300 cursor-not-allowed"
                  : "border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
              }`}
            >
              Önceki
            </button>
            <button
              id="next-button"
              onClick={sonrakiFilm}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Sıradaki
            </button>

            <button
              className="select-none px-4 py-2 bg-green-700 hover:bg-green-600 text-white"
              onClick={() => dispatch(addFav(sira))}
            >
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
