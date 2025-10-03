import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getImageUrl } from './utils.js';

//Seccion: Pasar props a un componente
function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'Yfe0qp2',
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma',
          imageId: 'OKS67lh',
        }}
      />
      <Avatar
        size={50}
        person={{
          name: 'Lin Lanying',
          imageId: '1bX5QH6',
        }}
      />
    </div>
  );
}

//Seccion: Crear y anidar componentes
function MyButton(props) {
  return (
    <button onClick={props.Fn}> Soy un boton custom y mi cuenta es:
      {props.count}
    </button>
  )
}

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount((count) => count + 1);

  return (
    <div className="card">

      <MyButton count={count} Fn={increment} />
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

