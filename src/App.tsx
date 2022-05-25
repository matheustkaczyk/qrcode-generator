import { useState } from 'react';
import QrCode from 'qrcode';
import './App.scss';

import Header from './components/Header';
import Input from './components/Input';
import Button from './components/Button';

function App() {
  const [url, setUrl] = useState('');
  const [input, setInput] = useState('');

  const createQr = () => {
    let conteiner = document.querySelector('.canvas-wrapper') as HTMLElement;

    try {
      QrCode.toDataURL(input, function (err, url) {
        if (err) console.log(err);
  
        setUrl(url);
      });
      
      QrCode.toCanvas(input, function (err, canvas) {
        if (err) console.log(err);

        if (document.querySelector('.qrcode')) {
          conteiner.removeChild(document.querySelector('.qrcode') as HTMLElement);
        }

        canvas.setAttribute('class', 'qrcode');
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
          <Input text={'Conteúdo alvo'} handleChange={(e) => setInput(e.target.value)} type="text" />
          <Button text={"Criar"} type="button" handleClick={() => createQr()} />
        </div>
        <div className='result'>
          <a className='canvas-wrapper' href={url} download="QrCode" />
          { url === '' && <p>Crie seu QRCode agora mesmo, rápido e fácil!</p> }
        </div>
      </main>
    </div>
  )
}

export default App
