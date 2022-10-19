import React from 'react';
import "./App.css";
import Card from './components/Card';
import Sdata from "./components/Sdata";

// function ncard(val){
//   return(
//     <Card
//     // className="shakti"
//       sname={val.sname}
//       imgsrc={val.imgsrc}
//       title={val.title}
//       link={val.links}
//     /> 
//   )
// }



function App() {
  return (
    <>

      <h1 className="heading_style">List of top 5 Netflix Series</h1>

      {/* {Sdata.map(function ncard(val) { */}

      {Sdata.map((val,index) => {
        console.log(index);
        return (
          <Card
            // className="shakti"
            sname={val.sname}
            imgsrc={val.imgsrc}
            title={val.title}
            link={val.links}
          />
        );
      })

      }

    </>

  );
};

export default App;
