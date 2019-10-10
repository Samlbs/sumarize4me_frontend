import React, { Component } from 'react';
import axios from 'axios';
import Resumo from '../Resumo/Resumo';
import { uniqueId } from "lodash"; 

import './style.css';

const initialState = {
  uploadFiles: []
}

export default class FileList extends Component {
  state = {...initialState};

  testeJson = {
    summaries: [
      {
        id: '12122',
        title: 'TesteTitulo',
        content: [
            {
              text: "No dia 11 de setembro de 2001, os Estados Unidos viveram o seu maior ataque terrorista de sua história.",
              weight: 83.08843904733658
            },
            {
              text: "Os ataques terroristas do 11 de setembro de 2001, também foram o estopim para a Guerra do Afeganistão (2001–presente) e a Invasão do Iraque em 2003.",
              weight: 78.2297101020813
            },
            {
              text: "Eram quase 9h da manhã em Nova York quando um avião sequestrado por terroristas integrantes da organização fundamentalista islâmica Al Qaeda, sob o comando do terrorista Osama Bin Laden, chocou-se com uma das torres do World Trade Center (WTC) um dos prédios mais altos do mundo até então.",
              weight: 71.45252615213394
            },
            {
              text: "A princípio, parecia um trágico acidente aéreo.",
              weight: 70.506700694561
            },
            {
              text: "Mas, quando cerca de 20 minutos após o primeiro ataque outro avião colidiu com a segunda torre do WTC, ficando claro que se tratava na verdade de uma ação terrorista.",
              weight: 66.17442059516907
            },
            {
              text: "Alguns minutos depois, um terceiro avião sequestrado por terroristas atingiu o Pentágono, sede do Departamento de Defesa dos Estados Unidos que fica próximo a Washington D.C., capital do país.",
              weight: 59.65012603998184
            },
            {
              text: "Uma quarta aeronave também sequestrada por terroristas caiu em uma área rural no estado da Pensilvânia antes de atingir o seu alvo, após os passageiros tentarem retomar o controle da aeronave sequestrada.",
              weight: 53.921036303043365
            },
            {
              text: "As Investigações apontaram que o plano dos terroristas era jogar o avião contra o Capitólio, casa do poder legislativo Norte-Americano.",
              weight: 50.14686316251755
            },
            {
              text: "Três edifícios do complexo do WTC desmoronaram, incluindo as famosas torres gêmeas.",
              weight: 48.16219902038574
            },
            {
              text: "As cenas de desespero da fumaça tomando conta das ruas de Nova York e de pessoas se jogando pelas janelas para tentar fugir das chamas foram transmitidas pela televisão ao vivo e chocaram o mundo inteiro.",
              weight: 41.75140309333801
            },
            {
              text: "A guerra civil na Líbia começou em 15 de fevereiro de 2011 a 23 de outubro de 2011. o conflito começou a partir da mobilização da sociedade líbia.",
              weight: 49.75809207558632
            },
            {
              text: "Os manifestantes exigiam mais liberdade e democracia, mais respeito pelos direitos humanos, e melhor distribuição da riqueza e a redução da corrupção.",
              weight: 44.044288367033005
            },
            {
              text: "os manifestantes foram violentamente reprimidos pelas tropas de Khadafi, e isso gerou uma revolta generalizada na população Líbia, o que agravou os conflitos.",
              weight: 38.199547201395035
            },
            {
              text: "Essa situação resultou numa mobilização ainda mais intensa dos grupos anti-Khadafi.",
              weight: 36.317420572042465
            }
        ],
        status: 'Complete',
        languageCode: 'pt-BR',
        createdAt:'23:00'
      },
      {
        id: '12122',
        title: 'TesteTitulo',
        content: [
            {
              text: "No dia 11 de setembro de 2001, os Estados Unidos viveram o seu maior ataque terrorista de sua história.",
              weight: 83.08843904733658
            },
            {
              text: "Os ataques terroristas do 11 de setembro de 2001, também foram o estopim para a Guerra do Afeganistão (2001–presente) e a Invasão do Iraque em 2003.",
              weight: 78.2297101020813
            },
            {
              text: "Eram quase 9h da manhã em Nova York quando um avião sequestrado por terroristas integrantes da organização fundamentalista islâmica Al Qaeda, sob o comando do terrorista Osama Bin Laden, chocou-se com uma das torres do World Trade Center (WTC) um dos prédios mais altos do mundo até então.",
              weight: 71.45252615213394
            },
            {
              text: "A princípio, parecia um trágico acidente aéreo.",
              weight: 70.506700694561
            },
            {
              text: "Mas, quando cerca de 20 minutos após o primeiro ataque outro avião colidiu com a segunda torre do WTC, ficando claro que se tratava na verdade de uma ação terrorista.",
              weight: 66.17442059516907
            },
            {
              text: "Alguns minutos depois, um terceiro avião sequestrado por terroristas atingiu o Pentágono, sede do Departamento de Defesa dos Estados Unidos que fica próximo a Washington D.C., capital do país.",
              weight: 59.65012603998184
            },
            {
              text: "Uma quarta aeronave também sequestrada por terroristas caiu em uma área rural no estado da Pensilvânia antes de atingir o seu alvo, após os passageiros tentarem retomar o controle da aeronave sequestrada.",
              weight: 53.921036303043365
            },
            {
              text: "As Investigações apontaram que o plano dos terroristas era jogar o avião contra o Capitólio, casa do poder legislativo Norte-Americano.",
              weight: 50.14686316251755
            },
            {
              text: "Três edifícios do complexo do WTC desmoronaram, incluindo as famosas torres gêmeas.",
              weight: 48.16219902038574
            },
            {
              text: "As cenas de desespero da fumaça tomando conta das ruas de Nova York e de pessoas se jogando pelas janelas para tentar fugir das chamas foram transmitidas pela televisão ao vivo e chocaram o mundo inteiro.",
              weight: 41.75140309333801
            },
            {
              text: "A guerra civil na Líbia começou em 15 de fevereiro de 2011 a 23 de outubro de 2011. o conflito começou a partir da mobilização da sociedade líbia.",
              weight: 49.75809207558632
            },
            {
              text: "Os manifestantes exigiam mais liberdade e democracia, mais respeito pelos direitos humanos, e melhor distribuição da riqueza e a redução da corrupção.",
              weight: 44.044288367033005
            },
            {
              text: "os manifestantes foram violentamente reprimidos pelas tropas de Khadafi, e isso gerou uma revolta generalizada na população Líbia, o que agravou os conflitos.",
              weight: 38.199547201395035
            },
            {
              text: "Essa situação resultou numa mobilização ainda mais intensa dos grupos anti-Khadafi.",
              weight: 36.317420572042465
            }
        ],
        status: 'Complete',
        languageCode: 'pt-BR',
        createdAt:'23:00'
      },
      {
        id: '12122',
        title: 'TesteTitulo',
        content: [
            {
              text: "No dia 11 de setembro de 2001, os Estados Unidos viveram o seu maior ataque terrorista de sua história.",
              weight: 83.08843904733658
            },
            {
              text: "Os ataques terroristas do 11 de setembro de 2001, também foram o estopim para a Guerra do Afeganistão (2001–presente) e a Invasão do Iraque em 2003.",
              weight: 78.2297101020813
            },
            {
              text: "Eram quase 9h da manhã em Nova York quando um avião sequestrado por terroristas integrantes da organização fundamentalista islâmica Al Qaeda, sob o comando do terrorista Osama Bin Laden, chocou-se com uma das torres do World Trade Center (WTC) um dos prédios mais altos do mundo até então.",
              weight: 71.45252615213394
            },
            {
              text: "A princípio, parecia um trágico acidente aéreo.",
              weight: 70.506700694561
            },
            {
              text: "Mas, quando cerca de 20 minutos após o primeiro ataque outro avião colidiu com a segunda torre do WTC, ficando claro que se tratava na verdade de uma ação terrorista.",
              weight: 66.17442059516907
            },
            {
              text: "Alguns minutos depois, um terceiro avião sequestrado por terroristas atingiu o Pentágono, sede do Departamento de Defesa dos Estados Unidos que fica próximo a Washington D.C., capital do país.",
              weight: 59.65012603998184
            },
            {
              text: "Uma quarta aeronave também sequestrada por terroristas caiu em uma área rural no estado da Pensilvânia antes de atingir o seu alvo, após os passageiros tentarem retomar o controle da aeronave sequestrada.",
              weight: 53.921036303043365
            },
            {
              text: "As Investigações apontaram que o plano dos terroristas era jogar o avião contra o Capitólio, casa do poder legislativo Norte-Americano.",
              weight: 50.14686316251755
            },
            {
              text: "Três edifícios do complexo do WTC desmoronaram, incluindo as famosas torres gêmeas.",
              weight: 48.16219902038574
            },
            {
              text: "As cenas de desespero da fumaça tomando conta das ruas de Nova York e de pessoas se jogando pelas janelas para tentar fugir das chamas foram transmitidas pela televisão ao vivo e chocaram o mundo inteiro.",
              weight: 41.75140309333801
            },
            {
              text: "A guerra civil na Líbia começou em 15 de fevereiro de 2011 a 23 de outubro de 2011. o conflito começou a partir da mobilização da sociedade líbia.",
              weight: 49.75809207558632
            },
            {
              text: "Os manifestantes exigiam mais liberdade e democracia, mais respeito pelos direitos humanos, e melhor distribuição da riqueza e a redução da corrupção.",
              weight: 44.044288367033005
            },
            {
              text: "os manifestantes foram violentamente reprimidos pelas tropas de Khadafi, e isso gerou uma revolta generalizada na população Líbia, o que agravou os conflitos.",
              weight: 38.199547201395035
            },
            {
              text: "Essa situação resultou numa mobilização ainda mais intensa dos grupos anti-Khadafi.",
              weight: 36.317420572042465
            }
        ],
        status: 'Complete',
        languageCode: 'pt-BR',
        createdAt:'23:00'
      },
      {
        id: '12122',
        title: 'TesteTitulo',
        content: [
            {
              text: "No dia 11 de setembro de 2001, os Estados Unidos viveram o seu maior ataque terrorista de sua história.",
              weight: 83.08843904733658
            },
            {
              text: "Os ataques terroristas do 11 de setembro de 2001, também foram o estopim para a Guerra do Afeganistão (2001–presente) e a Invasão do Iraque em 2003.",
              weight: 78.2297101020813
            },
            {
              text: "Eram quase 9h da manhã em Nova York quando um avião sequestrado por terroristas integrantes da organização fundamentalista islâmica Al Qaeda, sob o comando do terrorista Osama Bin Laden, chocou-se com uma das torres do World Trade Center (WTC) um dos prédios mais altos do mundo até então.",
              weight: 71.45252615213394
            },
            {
              text: "A princípio, parecia um trágico acidente aéreo.",
              weight: 70.506700694561
            },
            {
              text: "Mas, quando cerca de 20 minutos após o primeiro ataque outro avião colidiu com a segunda torre do WTC, ficando claro que se tratava na verdade de uma ação terrorista.",
              weight: 66.17442059516907
            },
            {
              text: "Alguns minutos depois, um terceiro avião sequestrado por terroristas atingiu o Pentágono, sede do Departamento de Defesa dos Estados Unidos que fica próximo a Washington D.C., capital do país.",
              weight: 59.65012603998184
            },
            {
              text: "Uma quarta aeronave também sequestrada por terroristas caiu em uma área rural no estado da Pensilvânia antes de atingir o seu alvo, após os passageiros tentarem retomar o controle da aeronave sequestrada.",
              weight: 53.921036303043365
            },
            {
              text: "As Investigações apontaram que o plano dos terroristas era jogar o avião contra o Capitólio, casa do poder legislativo Norte-Americano.",
              weight: 50.14686316251755
            },
            {
              text: "Três edifícios do complexo do WTC desmoronaram, incluindo as famosas torres gêmeas.",
              weight: 48.16219902038574
            },
            {
              text: "As cenas de desespero da fumaça tomando conta das ruas de Nova York e de pessoas se jogando pelas janelas para tentar fugir das chamas foram transmitidas pela televisão ao vivo e chocaram o mundo inteiro.",
              weight: 41.75140309333801
            },
            {
              text: "A guerra civil na Líbia começou em 15 de fevereiro de 2011 a 23 de outubro de 2011. o conflito começou a partir da mobilização da sociedade líbia.",
              weight: 49.75809207558632
            },
            {
              text: "Os manifestantes exigiam mais liberdade e democracia, mais respeito pelos direitos humanos, e melhor distribuição da riqueza e a redução da corrupção.",
              weight: 44.044288367033005
            },
            {
              text: "os manifestantes foram violentamente reprimidos pelas tropas de Khadafi, e isso gerou uma revolta generalizada na população Líbia, o que agravou os conflitos.",
              weight: 38.199547201395035
            },
            {
              text: "Essa situação resultou numa mobilização ainda mais intensa dos grupos anti-Khadafi.",
              weight: 36.317420572042465
            }
        ],
        status: 'Complete',
        languageCode: 'pt-BR',
        createdAt:'23:00'
      },
      
    ],
    
  }

  getAllFiles = () => {
    const uploadFiles = this.testeJson.summaries;
    this.setState({uploadFiles});
    
    // axios.get("")
    // .then((response) => {
    //   // handle success
      
    //   //Descomentar quando a api node estiver pronta
    //   //const uploadFiles = response.data.summaries;
    //   //this.setState({uploadFiles});
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
    // .finally(function () {
    //   // always executed
      
    // });
  }

  async componentDidMount() {
    this.getAllFiles();
    console.log(this.testeJson.summaries);
  }

  render() {
    return (
      <div>
      <div id="previewTitleTable">
          <hr></hr>
          <h4>O que podemos traduzir para você hoje?</h4>	
          <h4>Apenas nos diga o arquivo</h4>	
			</div>
      <div className="content">
        <table className="table">
            {this.testeJson.summaries.map(summary => (
              <tr key={uniqueId()}><Resumo uploadFiles={summary}></Resumo></tr>
            )) } 
        </table>
      </div>
    </div>
    );
  }
}