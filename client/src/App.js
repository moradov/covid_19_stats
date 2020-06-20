import React, { Component } from 'react';
import axios from 'axios';

import Chart from './Components/Chart/Chart';
import Cards from './Components/Cards/Cards';
import CountryPicker from './Components/CountryPicker/CountryPicker';

import { availableContries } from './data';
import Spinner from './Components/UI/Spinner';
class App extends Component {
  state = {
    selectedCountry: 'Morocco',
    selectedCountryLatestData: [],
    selectedCountryDailyData: [],
    loading: false,
    dataNotFound: false
  };

  getContryData = contryName => {
    //chek if the name of the country is exist in the available_contries that's provided by the API
    // eslint-disable-next-line
    let isExist = availableContries.find(el => el.Country == contryName);
    if (isExist) {
      this.setState({ loading: true });
      this.setState({ dataNotFound: false });
      this.setState({ err: null });
      // connect to the API
      axios
        .get(`/api/data/${isExist.Slug}`)
        .then(res => {
          this.setState({ loading: false });
          //chek if the data array not empty
          if (res.data.length > 0) {
            //set the latest update stats
            this.setState({
              selectedCountryLatestData: res.data[res.data.length - 1]
            });
            //get the daily data
            this.getContryDailyData(isExist.Slug);
          } else {
            // if there is no data
            this.setState({ dataNotFound: true });
          }
        })
        .catch(err => {
          this.setState({ dataNotFound: true });
          this.setState({ loading: false });
        });
    }
  };

  getContryDailyData = contryName => {
    axios.get(`/api/daily_data/${contryName}`).then(res => {
      this.setState({ selectedCountryDailyData: res.data });
    });
    // .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getContryData(this.state.selectedCountry);
  }
  //select input func handler
  selectInputHandler = event => {
    this.setState({ selectedCountry: event.target.value }, () => {
      //setState callback

      //get contry data every time selectedCountry state update
      this.getContryData(this.state.selectedCountry);
    });
  };

  render() {
    return (
      <div className='container'>
        {this.state.loading ? <Spinner /> : null}
        <h2 className='text-muted text-center display-4 p-4  '>
          COVID-19 stats
        </h2>
        <CountryPicker
          selectedCountry={this.state.selectedCountry}
          selectInputHandler={this.selectInputHandler}
        />
        <Cards
          selectedCountryLatestData={this.state.selectedCountryLatestData}
          dataNotFound={this.state.dataNotFound}
        />
        <Chart
          selectedCountryDailyData={this.state.selectedCountryDailyData}
          dataNotFound={this.state.dataNotFound}
        />
      </div>
    );
  }
}
export default App;
