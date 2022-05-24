import { useState } from 'react';
import './App.scss';
import Header from './components/Header';

import QrCode from 'qrcode';
import Input from './components/Input';
import Button from './components/Button';

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

  return (
    <div className="App">
      <Header />
      <main>
        <div className='opts'>
          <Input text={'Conteúdo'} handleChange={(e) => setInput(e.target.value)} type="text" />
          <Button text={"Criar"} type="button" handleClick={() => teste()} />
        </div>
        <div className='result'>
          <a className='canvas-wrapper' href={url} download="QrCode">

          </a>
        </div>
      </main>
    </div>
  )
}

export default App
