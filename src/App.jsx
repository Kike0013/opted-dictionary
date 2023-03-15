import Letters from './components/Letters'
import Navbar from './components/Navbar'
import ResultsContainer from './components/ResultsContainer'
import { useState, useEffect, useMemo } from 'react'
import { loadDictionary } from './core/services/netService/dictionaryService'
import './styles/App.css'
import { Pagination } from './components/Pagination'
import NotFound from './components/NotFound'

function App() {

  const [data, setData] = useState([])
  const [currentData, setCurrentData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [page, setPage] = useState(0)

  useEffect(() => {
    loadDictionary()
      .then(({ data }) => setData(data.sort()))
      .catch(error => console.log(error))
  }, [])

  const searchByLetter = (letter) => {
    let arr = data.filter(el => el.word.indexOf(letter) === 0)
    setCurrentData(arr)
    setPage(0)
    notFound && setNotFound(false)
  }

  const handleSearch = (searchValue) => {
    let arr = data.filter(el => el.word.toLowerCase().includes(searchValue.current.value.toLowerCase()))
    setPage(0)

    if (arr.length) {
      setCurrentData(arr)
      notFound && setNotFound(false)
    } else {
      !notFound && setNotFound(true)
    }

    console.log(arr);
    console.log(searchValue.current.value);
  }

  const prevPage = () => !page ? null : setPage(prevPage => prevPage - 1)

  const nextPage = () => {
    currentData.length - (page * 10) <= 10 ? null : setPage(prevPage => prevPage + 1)
  }

  return (
    <div className="App">
      <Navbar handleSearch={handleSearch} />
      <Letters searchByLetter={searchByLetter} />
      {!notFound ? <ResultsContainer currentData={currentData} page={page} /> : <NotFound />}
      <Pagination nextPage={nextPage} prevPage={prevPage} />
      {`currentData.length: ${currentData.length}`}
      <br />
      {`Page: ${page}`}
      <br />
      {currentData.length - (page * 10)}
      <br />
      {currentData.length % 10}
    </div>
  )
}

export default App
