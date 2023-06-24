import React, { useEffect } from 'react';
import { restClient } from '@polygon.io/client-js';

export default function API() {
  useEffect(() => {
    const client = restClient("_R7IUrep0pdUryYZoG8rtCst6yxIQSmm");
    client.stocks.aggregates("AAPL", 1, "day", "2023-01-01", "2023-04-14")
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  }, []);

  return <></>;
}
