
import React from 'react'; // Importa o pacote de arquivos do React.
//import PropTypes from 'prop-types';
import Time from './Time'; // Importa o caminho da classe.
import Partida from './Partida';
import '../css/Placar.css';

// 3) CRIA O COMPONENTE PRINCIPAL COM OS IMPORTES: 
// COM JSX CRIA O CONCEITO DE CLASSE:

export default class PlacarContainer extends React.Component {
   // function PlacarContainer() {
    
    constructor(props) { // Método que inicializa uma classe.
        super(props); // Método que representa uma classe superior.
        this.state = { // Objeto que define o estado de um componente.
            gols_casa: 0, // Chave com seu valor de estado inicial.
            gols_visitante: 0,
        };
    }

    marcarGolCasa() { // Método para incrementar o valor do estado inicial.
        this.setState({ // Método que modifica o estado de um componente.
            gols_casa: this.state.gols_casa + 1, // chave/valor.
        });
    }

    marcarGolVisitante() {
        this.setState({
            gols_visitante: this.state.gols_visitante + 1,
        });
    }

    render() { // Método para renderização no browser

        //const { partida, casa, visitante } = this.props;
        //const estilo = {float:"left", marginRight: "20px"};

        return ( // Método que recebe o conteúdo a ser renderizado.
        
            <div className='Placar'>
                <div className='Casa'>
                    <h2  className="Casinha">Time da Casa</h2>
                    {/* <Time nome={casa.nome}  */}
                    <Time // Referência ao Componente Time da Casa
                        nome={this.props.casa.nome} // Acessa as Propriedade do objeto
                        gols={this.state.gols_casa}
                        marcarGol={this.marcarGolCasa.bind(this)} // Acessa os Métodos da Classe
                    />
                </div>
                <div className='Partida'>
                    {/*<Partida {...partida*/}
                    <Partida // Referência ao Component Partida.
                        estadio={this.props.partida.estadio}
                        data={this.props.partida.data}
                        horario={this.props.partida.horario} 
                    /> 
                </div>
                <div className='Visitante'>
                    <h2 className="Visite" > Time Visitante</h2>
                    {/*<Time nome={visitante.nome*/} 
                    <Time // Referência ao Componente Time Visitante.
                        nome={this.props.visitante.nome}  
                        gols={this.state.gols_visitante}
                        marcarGol={this.marcarGolVisitante.bind(this)} 
                    />
                </div>
                {/* <div>{this.props.clima}</div> */}
                <div style={{clear: "both"}}></div>
            </div>
        );
    }
}
// Uso da propriedade propTypes: 

/* PlacarContainer.propTypes = {
    clima: React.PropTypes.string, // clima é uma string
    tempo: React.PropTypes.number.isRequired,
}; */
// Valor padrão:
/* PlacarContainer.defaultProps = {
    clima: "Ensolarado",
}; */

// lista de PropTypes
// link: https://facebook.github.io/react/docs...

