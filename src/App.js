// import React, { useEffect } from "react";
import Character from "./pages/character";

function App() {
  return (
    <div className="App">
      <Character />
    </div>
  );
}

export default App;

//useEffect iki parametre bekler biri callback function diğeri array. Bu array ne için kullanılıyor; eğer ki boş bir array tanımlarsak bu şu demektir; //component ilk render olduğunda buraya girer.
