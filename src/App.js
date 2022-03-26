import React, { useState, useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Card from './components/card/Card'
import Search from './components/search/Search'
import Pagination from './components/pagination/Pagination'

function App() {
  let [fetchedData, updateFetchedData] = useState([])
  let [search, setSearch] = useState('');
  let [pageNumber, updatePageNumber] = useState(1);

  let { info, results } = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`
 
  // let filteredCard = fetchedData.filter(el => {
  //   el.name.toLowerCase().includes(search.toLowerCase())
  // }) 
  //updateFetchedData(filteredCard)
  
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json())
      console.log(data)
      updateFetchedData(data)
    }) ()
  }, [api])


  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <div className="container">
        <Search search={search} setSearch={setSearch} updatePageNumber={updatePageNumber}/>
      <div className="row">
          Filter component will be placed here
          <div className="col-lg-8 col-12">
          <div className="row">
        <Card result={results} />
      </div>
    </div>
  </div>
  </div>
</div>
  );
}

export default App;