// area degli import, possiamo importare file resenti nella cartella src o altri componenti
// import di foto che genera una variabile chiamata "logo"
import logo from "./logo.svg";
// import di css, questo viene semplicemente caricato come css globale
import "./App.css";
import Header from "./components/Header";
import FormGroup from "./components/FormGroup";
import ClassComponent from "./components/ClassComponent";
import Main from "./components/Main";
import TopBar from "./components/TopBar";

// questo file contiene il nostro primo React Component, il principale: App.jsx
// Qui dentro creeremo i nostri componenti personali. Tutto quello che verrà creato qua dentro verrà poi renderizzato per l'utente

// Cos'è un componente React? Nella sua forma più basilare non è altro che... una semplice funzione!
// E' una funzione con l'unico vincolo di dover ritornare SEMPRE del codice JSX valido!

// JSX è una sintassi simil-HTML che permette l'inserimento di codice dinamico (JavaScript) direttamente in quello che sembra essere normale HTML
// Ci permette di combinare struttura e logica insieme!

// principali differenze con HTML:
// - class - diventa className (per evitare conflitti con la keyword class dei costruttori in js)
// - i tag img, br, hr, input sono autoconclusivi e hanno bisogno della chiusura immediata con lo slash finale: <img />, <br />, ecc..
// - l'attributo per le label "for" diventa "htmlFor" <label htmlFor="nome_id"></label>

// tutto quello che non è un valore di stringa, in JSX, dovrà essere delimitato da graffe src={logo} xs={2}
// all'interno delle graffe è anche possibile valutare un qualsiasi valore dinamico (variabile o espressione)

function App() {
  return (
    <div className="App">
      {/* utilizzare un componente è semplice come usarlo in forma di tag */}
      <TopBar />
      {/* i componenti possono anche ricevere dei dati in ingresso in diverse forme: stringhe, numeri, oggetti, variabili ecc */}
      <Header logo={logo} style={{ backgroundColor: "coral" }} className="border-md p-5 shadow mb-5" />

      {/* uno stesso componente può essere riutilizzato più volte e produrre codice diverso grazie alle prop che dinamicizzano il contenuto */}
      <FormGroup id="name-input" labelText="Name" placeholder="inserisci il tuo nome" type="text" />
      <FormGroup id="surname-input" labelText="Cognome" placeholder="inserisci il tuo cognome" type="text" />
      <FormGroup id="email-input" labelText="Email" placeholder="mario@rossi.it" type="email" />
      <FormGroup id="date-input" labelText="Data di nascita" placeholder="" type="datetime-local" />

      <ClassComponent
        title="Sono un componente a Classe"
        description="lorem ipsum"
        buttonText="scopri di più"
        buttonStyle={{ backgroundColor: "black", border: "none", padding: "0.5rem 1rem", color: "white", borderRadius: "6px" }}
      />

      <ClassComponent
        title="Sono un ALTRO componente a Classe"
        description="lorem ipsum"
        buttonText="scopri di più"
        buttonStyle={{ backgroundColor: "coral", border: "2px solid lightgray", padding: "0.5rem 1rem", color: "black", borderRadius: "6px" }}
      />

      {/* un tag corrispondente ad un componente può anche essere usato in forma NON autocolusiva, quindi con tag di apertura e chiusura 
      nel caso in cui ci interessi fornire dei figli, potenzialmente sempre diversi */}
      <Main title="Titolo principale della pagina">
        {/* questi elementi divenanto i children del componente Main, li si potrà ricavare tramite props.children all'interno */}
        <img
          src="https://images.unsplash.com/photo-1732408078218-b7094b6a1875?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width="100%"
          alt="skyscraper"
        />
        <h4>Skyscraper</h4>
      </Main>
      <Main title="Altro titolo principale">
        {/* questo componente FormGroup diventa un "children" del componente Main, li si potrà ricavare tramite props.children all'interno */}
        <FormGroup id="date-input" labelText="Data di nascita" placeholder="" type="datetime-local" />
      </Main>
    </div>
  );
}

export default App;
