import Letters from './components/Letters'
import Navbar from './components/Navbar'
import ResultsContainer from './components/ResultsContainer'
import { useState, useEffect, useRef } from 'react'
import { loadDictionary } from './core/services/netService/dictionaryService'
import './styles/App.css'
import { Pagination } from './components/Pagination'
import Results from './components/Results'
import Loading from './components/Loading'
import NotFound from './components/NotFound'

function App() {

  const [data, setData] = useState([])
  const [currentData, setCurrentData] = useState([])
  const [isLetter, setIsLetter] = useState(false)
  const [isSelected, setIsSelected] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [page, setPage] = useState(0)

  const searchValue = useRef();
  const exactValue = useRef();
  const defValue = useRef();

  useEffect(() => {
    loadDictionary()
      .then(({ data }) => setData(data.sort((a, b) => {
        const wordA = a.word.toLowerCase();
        const wordB = b.word.toLowerCase();
        if (wordA < wordB) {
          return -1;
        }
        if (wordA > wordB) {
          return 1;
        }
        return 0;
      })))
      .then(
        setIsLoading(false)
      )
      .catch(error => {
        setIsLoading(false)
        console.log(error)
      })
  }, [])

  const searchByLetter = (letter) => {
    !isLetter && setIsLetter(true)
    resetInputs(searchValue, exactValue, defValue)
    setIsSelected(letter)
    let arr = data.filter(el => el.word.indexOf(letter) === 0)
    setCurrentData(arr)
    setPage(0)
    notFound && setNotFound(false)
  }

  const handleSearch = (searchValue, isExact, isDef, event) => {
    event && event.preventDefault();
    setIsLetter(false)
    setIsSelected(null)
    if (!searchValue.current.value) return null

    let arr;

    isExact
      ? arr = data.filter(el => el.word.toLowerCase() === searchValue.current.value.toLowerCase())
      : isDef
        ? arr = data.filter(el => el.word.toLowerCase().includes(searchValue.current.value.toLowerCase())
          || el.definition.toLowerCase().includes(searchValue.current.value.toLowerCase()))
        : arr = data.filter(el => el.word.toLowerCase().includes(searchValue.current.value.toLowerCase()))

    if (arr.length) {
      setCurrentData(arr)
      notFound && setNotFound(false)
    } else {
      !notFound && setNotFound(true)
    }

    setPage(0)
  }

  const resetInputs = (inputSearch, exactCheck, defCheck) => {
    inputSearch.current.value = '';
    exactCheck.current.checked = false;
    defCheck.current.checked = false;
  }

  const firstPage = () => !page
    ? null
    : setPage(0)

  const prevPage = () => !page
    ? null
    : setPage(prevPage => prevPage - 1)

  const nextPage = () => currentData.length - (page * 10) <= 10
    ? null
    : setPage(prevPage => prevPage + 1)

  const lastPage = () => currentData.length - (page * 10) <= 10
    ? null
    : setPage(Math.floor(currentData.length / 10))

  return (
    <div className="App">
      {isLoading
        ? <Loading />
        : <><Navbar handleSearch={handleSearch} searchValue={searchValue} exactValue={exactValue} defValue={defValue} />
          <Letters searchByLetter={searchByLetter} isSelected={isSelected} />
          <ResultsContainer  >
            {!notFound ?
              <Results currentData={currentData} page={page} />
              : <NotFound />}
          </ResultsContainer>
          <Pagination
            firstPage={firstPage}
            nextPage={nextPage}
            prevPage={prevPage}
            lastPage={lastPage}
            page={page}
            searchValue={searchValue?.current?.value}
            show={Boolean(currentData.length > 10)}
            length={Math.floor(currentData.length / 10)}
          /></>
      }
    </div>
  )
}

export default App

