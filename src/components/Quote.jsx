import { React, useState, useEffect } from 'react';

function Quote() {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [hasError, sethasError] = useState(false);

  useEffect(() => {
    setisLoading(true);
    fetch('https://api.api-ninjas.com/v1/quotes', {
      headers: {
        'X-Api-Key': 'OpjST6lLVPMztqEXqvVpUQ==0mUc3zSnJ67pxMdw',
      },
    })
      .then((response) => response.json())
      .then((apidata) => {
        setData(apidata[0]);
        setisLoading(false);
      })
      .catch((_error) => {
        sethasError(true);
        setisLoading(false);
        setData(_error);
      });
  }, []);

  if (hasError) return <div className="Quote">Something Went Wrong </div>;

  if (isLoading) return <div className="Quote">Loading... </div>;

  return (
    <>
      <div className="section">
        <div className="Quote">
          <h2>Quote of the day</h2>
          <p>
            {data.quote}
            {' - '}
            {data.author}
          </p>
        </div>
      </div>
    </>
  );
}

export default Quote;
