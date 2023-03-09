import { FC, useEffect, useState } from 'react';
import './App.css';
import { doGet } from './Services/ApiService';

export const App: FC = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [textToDisplay, setTextToDisplay] = useState<TextResponse[]>([]);

  const helloWorldText: Promise<TextResponse[]> = doGet('/hello-world');

  useEffect(() => {
    helloWorldText.then((response) => {
      setIsLoading(false);
      setTextToDisplay(response);
    });
  }, []);

  return (
    <div className="App">
      <h1>E-Comm Shop</h1>
      {isLoading && (
        <p>Loading...</p>
      )}
      {textToDisplay && textToDisplay.map((text: TextResponse) => {
        return <p>{text.text}</p>
      })}
    </div>
  )
}
