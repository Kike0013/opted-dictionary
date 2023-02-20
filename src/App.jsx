import Letters from './components/Letters'
import Navbar from './components/Navbar'
// import ResultsContainer from './components/ResultsContainer'
import { useState, useEffect } from 'react'
import { loadDictionary } from './core/services/netService/dictionaryService'
import './styles/App.css'

import { VariableSizeList as List } from 'react-window';

function App() {

  const [data, setData] = useState([])
  const [currentData, setCurrentData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadDictionary()
      .then(({ data }) => setData(data))
      .catch(error => console.log(error))
  }, [])

  const searchByLetter = (letter) => {
    let arr = data.filter(el => el.word.indexOf(letter) === 0)
    setCurrentData(arr)
  }


  const currentRowHeights = new Array(currentData.length)
    .fill(100)

  const currentGetItemSize = index => currentRowHeights[index];

  const currentRow = ({ index, style }) => (
    <div style={style}>Row {index}, {currentData[index].word}, {currentData[index].definition}</div>
  );

  return (
    <div className="App">
      <Navbar />
      <Letters searchByLetter={searchByLetter} />
      {/* <ResultsContainer currentData={currentData} /> */}
      <List
        height={1000}
        itemCount={currentData.length}
        itemSize={currentGetItemSize}
        width={1000}
      >
        {currentRow}
      </List>
    </div>
  )
}

export default App
