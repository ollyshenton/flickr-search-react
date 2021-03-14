import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import CardsLoading from "./components/CardsLoading";
import Search from "./components/Search";
import Footer from "./components/Footer";

function App() {
  const ListLoading = CardsLoading(Card);
  const [searchTerm, setSearchTerm] = useState("bicycle");
  const [appState, setAppState] = useState({
    loading: false,
    images: null
  });

  // searches
  useEffect(() => {
    setAppState({ loading: true });
    const search = searchTerm;
    const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_KEY}&tags=${search}&text=${search}&safe_search=1&extras=description%2C+tags%2C+geo&per_page=30&page=1&format=json&nojsoncallback=1`;

    axios.get(apiUrl).then(response => {
      const allImages = response.data.photos;
      console.log("data", search, response);
      setAppState({ loading: false, images: allImages });
    });
  }, [setAppState, searchTerm]);

  // click submit search
  const handleSubmit = e => {
    e.preventDefault();

    const search = e.target.search.value;
    console.log("e", search);
    if (search) {
      setSearchTerm(search);
      e.target.search.value = "";
    }
  };

  return (
    <div className="text-gray-900 leading-tight flex flex-col min-h-screen bg-grey-100">
      <header className="bg-yellow-300">
        <h1 className="container m-auto text-4xl font-mono py-11">
          📷 Search someone else's photos on Flickr 📷
        </h1>
        <p className="container m-auto">
          On load the default search is bicycle 🚲
        </p>

        <form className="Form container m-auto" onSubmit={handleSubmit}>
          <Search />
        </form>
      </header>

      <div className="container m-auto flex-grow">
        <ListLoading isLoading={appState.loading} images={appState.images} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
