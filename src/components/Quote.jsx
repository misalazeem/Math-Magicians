import { React, useState, useEffect } from 'react';

function Quote() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes', {
      headers: {
        'X-Api-Key': 'OpjST6lLVPMztqEXqvVpUQ==0mUc3zSnJ67pxMdw',
      },
    })
      .then((response) => response.json())
      .then((apidata) => setData(apidata[0]));
  }, []);

  return (
    <>
      <div className="Quote">
        <h2>Quote of the day</h2>
        <p>
          {data.quote}
          {' - '}
          {data.author}
        </p>
      </div>
    </>
  );
}

export default Quote;
