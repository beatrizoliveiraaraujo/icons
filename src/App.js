
import './App.css';
import $ from 'jquery';
import React, { useState } from 'react';
import { VscCircleLargeFilled, VscColorMode } from "react-icons/vsc";


function App() {
  const [escuro, setEscuro] = useState(false)


  const alterar = () => {
    setEscuro(!escuro)
    if($("body").hasClass("claro")){
      $("body").removeClass("claro").addClass("escuro");
      $("body").children().removeClass("claro").addClass("escuro");
    } else {
      $("body").removeClass("escuro").addClass("claro");
      $("body").children().removeClass("escuro");
    }
  }

  const alterarGrey = () =>{
    if($("body").hasClass("grayscale")){
      $("body").removeClass("grayscale");
    } else {
      $("body").addClass("grayscale");
    }
  }
  return (
  <>
      <div class="jumbotron">
        <div class="container">
          <h2>Botões de Acessibilidade</h2>
        </div>
      </div>
    <div class="container py-2">
        <div class="row">
          <div class="col-md-12">
            <button class="btn btn-primary bt-custom" id="contraste" onClick={() => alterar()} ><VscCircleLargeFilled color={escuro? '#fff': '#000'}/></button>
            <button class="btn btn-primary bt-custom" id="grayescale" onClick={() => alterarGrey() }><VscColorMode color={escuro? '#fff': '#000'}/></button>
           
            <img src="https://dominik.com.br/media/catalog/product/cache/d10099810bcac7f0abdd8e42c1022f22/p/a/parafusadeira_furadeira_impacto_gsb_18v_50_bateria_bosch_511166_02_1.png" style={{width: '200px'}} />
           </div>
        </div>
      </div>
      </>
  );
}

 

export default App;
