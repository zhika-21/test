import React, {useState} from 'react';
import styles from './Search.scss';

const Search = ({ fethchedData, setSearch, updatePageNumber}) => {
    let searchBtn = (e) => {
        e.preventDefault();
    }

 
        
  return (
      <form className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb- `}>
          <input onChange={(e) => {
              updatePageNumber(1);
              setSearch(e.target.value)
          }}
              placeholder=' Search for characters'
              className={styles.input}
              type='text'
            //   value={search}
          /> 
          
          <button
              onClick={searchBtn}
              className={`${styles.btn}`}>
              
          </button>
    </form>
  )
}

export default Search