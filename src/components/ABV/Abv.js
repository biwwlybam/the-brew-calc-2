import React from 'react'
import ReactDOM from "react-dom";
import '../../styles/Abv.css'

class Abv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            OG: '',
            FG: '',
            ABV: '0',
            OE: '',
            AE: '',
            RE: '',
            ABW: '',
            AppAtten: ''
        };
        this.handleOGInput = this.handleOGInput.bind(this);
        this.handleFGInput = this.handleFGInput.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleOGInput(e) {
        this.setState({
            OG: e.target.value,
        });
    }

    handleFGInput(e) {
        this.setState({
            FG: e.target.value
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let OG = this.state.OG;
        let FG = this.state.FG;

        let OE = ((135.997*(OG**3))-(630.272*(OG**2))+(1111.14*OG)-(616.868)).toFixed(2);
        let AE = ((135.997*(FG**3))-(630.272*(FG**2))+(1111.14*FG)-(616.868)).toFixed(2);
        let RE = ((0.1808*OE)+(0.8192*AE)).toFixed(2);
        let ABW = ((OE-RE)/(2.0665-(0.010665*OE))).toFixed(2);
        let AppAtten = (((((OG-1)*1000)-((FG-1)*1000))/((OG-1)*1000))*100).toFixed(2);

        let finalABV = ((ABW*(FG/0.794))).toFixed(2);
        this.setState({
            OE: OE
        });
        this.setState({
            AE: AE
        });
        this.setState({
            RE: RE
        });
        this.setState({
            ABW: ABW
        });
        this.setState({
            AppAtten: AppAtten
        });
        this.setState({
            ABV: finalABV
        });
    }

    render() {
        return(
            <div className='abvCalculator'>
                <h1>ABV</h1>
                <form onSubmit={this.handleFormSubmit} className='abvForm'>

                {/*User inputs OG and FG*/}
                    <label className='inputOG'>
                        OG:
                        <input type='text' onChange={this.handleOGInput} value={this.state.OG} required className='userInputOG' />
                    </label>
                    <label className='inputFG'>
                        FG:
                        <input type='text' onChange={this.handleFGInput} value={this.state.FG} required className='userInputFG' />
                    </label>
                    <input type='submit' value="Submit" className='submitButton'></input>
                </form>

                {/*This part of the form shows results from user input.*/}
                <h3 className='abvAnswer'>ABV: {this.state.ABV}%</h3>
                <h4>Additional Data:</h4>
                <p className='addAnswers'>Original Extract: {this.state.OE} °P</p>
                <p className='addAnswers'>Apparent Extract: {this.state.AE} °P</p>
                <p className='addAnswers'>Real Extract: {this.state.RE} °P</p>
                <p className='addAnswers'>ABW: {this.state.ABW}%</p>
                <p className='addAnswers'>Apparent Attenuation: {this.state.AppAtten}%</p>
            </div>
        )
    }
}

ReactDOM.render(
    <Abv />,
    document.getElementById('app')
);

export default Abv;