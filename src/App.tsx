import { FC, useEffect, useState } from 'react';
import './App.css';
import { doGet } from './Services/ApiService';

export const App: FC = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [textToDisplay, setTextToDisplay] = useState<TextResponse[]>([]);
  const [timestamp, setTimestamp] = useState<string>();

  const helloWorldText: Promise<TextResponse[]> = doGet('/hello-world');
  const currentTime: Promise<TimeStampResponse> = doGet('/timestamp');

  useEffect(() => {
    helloWorldText.then((response) => {
      setTextToDisplay(response);
    });
    currentTime.then((response) => {
      setTimestamp(response.currentTime);
    });
    setIsLoading(false);
  }, []);

  return (
    <div className="App">
      <h1>E-Comm Shop</h1>
      {isLoading && (
        <p>Loading...</p>
      )}
      {textToDisplay && textToDisplay.map((text: TextResponse) =>
        <p>{text.text}</p>
      )}
      {timestamp && (
        <p>Node Server's Timestamp: {timestamp}</p>
      )}
    </div>
  )
}
