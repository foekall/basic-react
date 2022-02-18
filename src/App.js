import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Header from './Components/Header';
import './Scss/App.scss';
import Footer from './Components/Footer';
import TopStories from './Components/TopStories';
import Sports from './Components/Sports';
import { useContext, useState } from 'react';
import SearchResult from './Components/SearchResult';
import Article from './Components/Article';
import Bookmark from './Components/Bookmark';
import { BookmarkContext } from './Contexts/BookmarkState';
import SearchBar from './Components/SearchBar';

const App = () => {

  const [sortDirection, setSortDirection] = useState("newest")
  const contexts = useContext(BookmarkContext);
  const onSorting = (event) => {
    setSortDirection(event.target.value);
  };

  return (
      <Router>
        <Header />
        <div className='sps-container mt-5' style={{minHeight: '100vh'}}>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <div className='position-relative' style={{minHeight: "300px"}}>
                  { contexts.keywords ?
                      <><SearchBar onSorting={onSorting} title="Search results" /> <SearchResult  sortDirection={sortDirection} query={contexts.keywords}/> </>
                    : <><SearchBar onSorting={onSorting} title="Top stories" /> <TopStories sortDirection={sortDirection}/> </>}
                  </div>
                  {
                    !contexts.keywords && (
                      <div className='sps-col sps-col-md-6 px-0 py-0'>
                        <Sports/>
                      </div>
                    )
                  }
                </>
              }
            ></Route>
            <Route
              path="/article"
              exact
              element={
                <>{ contexts.isVisible ? <><SearchBar onSorting={onSorting} title="Search results" /> <SearchResult sortDirection={sortDirection} query={contexts.keywords}/></> :  <Article/>}</>
              }></Route>
            <Route
              path="/bookmarks"
              element={
                <Bookmark/>
              }></Route>
          </Routes>
        </div>
        <Footer/>
      </Router>
  );
}

export default App;
