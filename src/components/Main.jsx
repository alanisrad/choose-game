import React from 'react';
import data from '../resources/data.json';
import Historia from './Historia';
import Opciones from './Opciones';
import Recordatorio from './Recordatorio';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            data: data, seleccionAnterior: ""
        };
    }

    componentWillUnmount = () => {
        alert("Has llegado al fin!");
    }

    historial = () => {
        if (this.state.index > 0) {
            document.getElementById('lista').innerHTML +=
                `<li>${this.state.seleccionAnterior}</li>`
        }
    }

    updateIfOptionA = () => {
        if (this.state.index > 6) {
            this.componentWillUnmount();
        }
        else if (this.state.index === 0) {
            this.setState({ index: 1 })
            this.historial();
            this.setState({ seleccionAnterior: "A" })
        }
        else if (this.state.index % 2 === 0) {
            this.setState({ index: this.state.index + 1 })
            this.historial();
            this.setState({ seleccionAnterior: "A" })
        } else {
            this.setState({ index: this.state.index + 2 })
            this.historial();
            this.setState({ seleccionAnterior: "A" })
        }

        console.log("Actualización");
    }

    updateIfOptionB = () => {
        if (this.state.index > 6) {
            this.componentWillUnmount();
        }
        else if (this.state.index % 2 === 0) {
            this.setState({ index: this.state.index + 2 })
            this.historial();
            this.setState({ seleccionAnterior: "B" })
        } else {
            this.setState({ index: this.state.index + 3 })
            this.historial();
            this.setState({ seleccionAnterior: "B" })
        }

        console.log("Actualización");
    }

    render() {
        let indice = this.state.data[this.state.index];
        return (
            <div className='App'>
                <div className='layout'>
                    <Historia historia={indice.historia}/>
                    <Opciones handleClickA={this.updateIfOptionA} opcionA={indice.opciones.a} 
                    handleClickB={this.updateIfOptionB} opcionB={indice.opciones.b}/>
                    <Recordatorio seleccionAnterior={this.seleccionAnterior}/>
                </div>
            </div>
        );
    }
}