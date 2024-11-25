// const FormGroup = props => {
//   /*
//   props:
//   - id
//   - labelText
//   - placeholder
//   - type */
//   return (
//     // React Fragment <></>, un elemento vuoto che funge solo da raggrupatore di elementi ritornati dal nostro componente
//     <>
//       <div>
//         <label htmlFor={props.id}>{props.labelText}</label>
//       </div>
//       <input type={props.type} placeholder={props.placeholder} id={props.id} />
//     </>
//   );
// };

// versione con return IMPLICITO (e senza graffe)
const FormGroup = props => (
  // React Fragment <></>, un elemento vuoto che funge solo da raggrupatore di elementi ritornati dal nostro componente
  <>
    <div>
      <label htmlFor={props.id}>{props.labelText}</label>
    </div>
    <input type={props.type} placeholder={props.placeholder} id={props.id} />
  </>
);

export default FormGroup;
