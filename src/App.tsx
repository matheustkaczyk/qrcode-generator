import { useState } from 'react';
import QrCode from 'qrcode';
import './App.scss';

import Header from './components/Header';
import Input from './components/Input';
import Button from './components/Button';
import Select from './components/Select';
import Footer from './components/Footer';

function App() {
  const [url, setUrl] = useState('');
  const [input, setInput] = useState('');
  const [size, setSize] = useState(200);

  const createQr = async () => {
    let conteiner = document.querySelector('.canvas-wrapper') as HTMLElement;

    if (input === '') return alert('Por favor insira um conteúdo para gerar o QR Code');

    try {
      await QrCode.toDataURL(input, {
        width: size,
      }, function (err, url) {
        if (err) console.log(err);
  
        setUrl(url);
      });
      
      await QrCode.toCanvas(input, {
        width: 200,
      }, function (err, canvas) {
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

  const handleSelect = (event: any) => {
    switch (event.target.value) {
      case 'Small':
        setSize(200);
        break;
      case 'Medium':
        setSize(400);
        break;
      case 'Large':
        setSize(600);
        break;
    default:
    setSize(200);
    }
  }

  return (
    <div className="App">
      <Header />
      <main>
        <div className='opts'>
          <h3>Insira as informações para o seu QRCode</h3>
          <div>
            <Input text={'Conteúdo do QR'} handleChange={(e) => setInput(e.target.value)} type="text" />
            <Select name='size' options={['Small', 'Medium', 'Large']} handleChange={handleSelect} />
            <Button text={"Criar"} type="button" handleClick={() => createQr()} />
          </div>
        </div>
        <div className='result'>
          <a className='canvas-wrapper' href={url} download="QrCode" />
          { url === '' ? <p>Crie seu QRCode agora mesmo, rápido e fácil!</p> : <p>Baixe seu QRCode clicando na imagem acima</p> }
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App;
