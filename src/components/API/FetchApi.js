import { useState, useEffect } from 'react';
import Gif from '../Gif/Gif';
import './FetchApi.css';

const FetchApi = () => {
  const [data, setData] = useState([]);
  const apiGet = () => {
    const key = 'hetC3L1obcsSQVPwNUSLdVZAX3dR8vZb';
    const limit = 5;
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=${limit}`)
      .then((response) => response.json())
      .then((response) => {
        setData(response.data);
        
      });
  };

  useEffect(() => {
    apiGet();
  }, []);
  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="Gifs-wrapper">
          {data.map(item => {
            return <Gif url={item.url} alt={item.title} key={item.id} src={item.images.fixed_height.url}/>
          })}
      </div>
    </div>
  );
}


export default FetchApi;