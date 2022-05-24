import './App.scss'
import Header from './components/Header'

import QrCode from 'qrcode';

function App() {
  const teste = async () => {
    try {
      await QrCode.toDataURL('https://www.google.com.br', function (err, url) {
        if (err) console.log(err);
  
        console.log(url);
      });
      
      await QrCode.toCanvas('https://www.google.com.br', function (err, canvas) {
        if (err) console.log(err);
  
        let conteiner = document.getElementById('canvas-wrapper') as HTMLElement;
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
        <div id='canvas-wrapper'>

        </div>
      </main>
    </div>
  )
}

export default App
