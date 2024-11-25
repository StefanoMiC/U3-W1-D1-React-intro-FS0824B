const Header = props => {
  console.log(props);
  // ogni componente riceve un oggetto come parametro che chiamaremo props, dal quale poi ricaveremo i dati che
  // avevamo fornito in ingresso al nostro componente come attributi sul suo tag JSX

  // ogni prop viaggia dall'esterno verso l'interno / o dall'alto verso il basso
  return (
    <header className={`App-header ${props.className}`} style={props.style}>
      <img src={props.logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>

      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </header>
  );
};

export default Header;
