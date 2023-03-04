import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [data, setData] = useState([]);
  const [date, setDate] = useState('');

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json')
      .then(res => {
        setData(res.data[date]);
      })
      .catch(err => {
        console.log(err);
      })
  } , [date , data]);

  return (
    <div className="covid-project">
      <div className='container'>
        <div className="row">
          <div className="col-lg-8 mx-auto mt-4">
        <h1 className='text-center text-white display-3'>COVID-19 TRACKER</h1>
        <input type="text" placeholder='GG/AA/YY' className='form-control mt-4' onChange={(e) => setDate(e.target.value)}/>
        <table className="table mt-4 table-striped text-white">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Test Sayısı</th>
              <th scope="col">Hasta Sayısı</th>
              <th scope="col">Vefat Sayısı</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"  className={data === undefined ? 'bg-danger' : 'bg-success'}>1</th>
              <td className={data === undefined ? 'bg-danger' : 'bg-success'}>{data === undefined ? "Veri bekleniyor" : data.totalTests}</td>
              <td className={data === undefined ? 'bg-danger' : 'bg-success'}>{data === undefined ? "Veri bekleniyor" : data.totalPatients}</td>
              <td className={data === undefined ? 'bg-danger' : 'bg-success'}>{data === undefined ? "Veri bekleniyor" : data.totalDeaths}</td>
            </tr>
          </tbody>
        </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
