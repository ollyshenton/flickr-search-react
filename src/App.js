import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import CardsLoading from "./components/CardsLoading";
import Footer from './components/Footer'

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
      console.log("data", search,response);
      setAppState({ loading: false, images: allImages });
    });
  
  }, [setAppState, searchTerm]);


  // click submit search
  const handleSubmit = (e) => {
    e.preventDefault();

    const search = e.target.search.value;
    console.log('e', search)
    if (search) {
      setSearchTerm(search)
      e.target.search.value = '';
    }
  };

  return ( 
    <div className="text-gray-900 leading-tight flex flex-col min-h-screen">
      <header className="container m-auto">
        <h1 className="text-4xl font-mono py-11">Search someone else's photos</h1>

        <form className="Form" onSubmit={handleSubmit}>
          <input
            type="text"
            autoFocus
            autoComplete="off"
            name="search"
            placeholder="Search flickr"
            className="border py-2 px-3 text-grey-darkest border-black "
          />
          <button className="p-2.5 m-2 text-green-100  duration-150 bg-black focus:shadow-outline ">Search</button>
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
