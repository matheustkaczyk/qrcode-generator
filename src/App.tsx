import { useState } from 'react';
import './App.scss';
import Header from './components/Header';

import QrCode from 'qrcode';

function App() {
  const [url, setUrl] = useState('');
  const [input, setInput] = useState('');

  const teste = () => {
    let conteiner = document.querySelector('.canvas-wrapper') as HTMLElement;

    try {
      QrCode.toDataURL('https://www.google.com.br', function (err, url) {
        if (err) console.log(err);
  
        console.log(url);
        setUrl(url);

        // let element = document.createElement('a');
        // element.setAttribute('href', url);
        // element.setAttribute('download', 'qrcode.png');
        // element.innerHTML = 'Download';
        // conteiner.appendChild(element);
      });
      
      QrCode.toCanvas('https://www.google.com.br', function (err, canvas) {
        if (err) console.log(err);

        conteiner.appendChild(canvas);
      })
    } catch (error) {
      console.log(error);
    }
  }

  teste();

  return (
    <div className="App">
      <Header />
      <main>
        <div className='opts'>

        </div>
        <div className='result'>
          <a className='canvas-wrapper' download={`${url}.png`}>

          </a>
        </div>
      </main>
    </div>
  )
}

export default App
