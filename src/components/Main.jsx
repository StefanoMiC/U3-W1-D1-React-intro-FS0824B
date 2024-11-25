// const Main = props => {
//   console.log("Main props", props);
//   return (
//     <div className="Main">
//       <h2>{props.title}</h2>
//       {/* qui verranno renderizzati i figli, quindi siamo in grado di decidere dove posizionarli */}
//       {props.children}
//     </div>
//   );
// };

import { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <h2>{this.props.title}</h2>

        {/* qui verranno renderizzati i figli, quindi siamo in grado di decidere dove posizionarli */}
        {this.props.children}
      </div>
    );
  }
}
export default Main;
