import React from 'react';

import BotaoGol from './BotaoGol';

// Cria a classe Time e componentes no JSX:S
export default class Time extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.nome}</h1>
                <h2 className="Gol">{this.props.gols}</h2>
                <BotaoGol marcarGol={this.props.marcarGol} />
            </div>
        );
    }
}