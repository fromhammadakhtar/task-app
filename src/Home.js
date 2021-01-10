import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import './Home.css';
import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';
import ApplicantStatus from './Components/ApplicantStatus/Applicantstatus';
import SearchContainer from './Components/SearchContainer/Search';

const Home = () => {
  const initialState = {
    error: null,
    isLoaded: false,
    items: [],
    totalItems: [],
  };

  const [state, setState] = useState(initialState);

  const { error, isLoaded, items, totalItems } = state;

  const search = (e) => {
    var results = [];
    var txt = e.target.value.toLowerCase();
    console.log(txt);

    if (txt === '') {
      setState({ ...state, items: totalItems });
      return;
    }
    for (var i = 0; i < items.length; i++) {
      if (items[i]['name'].toLowerCase().startsWith(txt)) {
        results.push(items[i]);
      }
    }
    setState({ ...state, items: results });
  };

  useEffect(() => {
    const fetchData = () => {
      return fetch(
        'https://run.mocky.io/v3/9699dcf5-daf8-4646-b70a-39c3766b4325'
      )
        .then((res) => res.json())
        .then((result) => {
          setState({
            ...state,
            isLoaded: true,
            items: result.items,
            totalItems: result.items,
          });
        })
        .catch((error) => {
          setState({ ...state, isLoaded: true, error });
        });
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {(() => {
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <div>
              <Header></Header>
              <Container style={{ background: '#fff', padding: '1.5rem', marginTop: '0.5rem' }}>
                
                  <ApplicantStatus totalItems={totalItems}></ApplicantStatus>
                  <SearchContainer search={search}></SearchContainer>
                  <Cards items={items}></Cards>
              </Container>
              <p className='footerText' >AGB • Datenschutz • Impressum</p>
            </div>
          );
        }
      })()}
    </div>
  );
};

export default Home;
