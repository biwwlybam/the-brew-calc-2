import React from 'react'
import '../styles/Dilution.css'

export class Dilution extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            BeerOneAbv: '',
            BeerTwoAbv: '',
            BeerThreeAbv: '',
            BeerFourAbv: '',
            BeerOneGravity: '',
            BeerTwoGravity: '',
            BeerThreeGravity: '',
            BeerFourGravity: '',
            BeerOneVolume: '',
            BeerTwoVolume: '',
            BeerThreeVolume: '',
            BeerFourVolume: '',
            BeerOnePercent: '',
            BeerTwoPercent: '',
            BeerThreePercent: '',
            BeerFourPercent: '',
            BlendAbv: '',
            BlendGravity: '',
            BlendVolume: ''
        };

        /* Bind ABVs */
        this.handleBeerOneAbvInput = this.handleBeerOneAbvInput.bind(this);
        this.handleBeerTwoAbvInput = this.handleBeerTwoAbvInput.bind(this);
        this.handleBeerThreeAbvInput = this.handleBeerThreeAbvInput.bind(this);
        this.handleBeerFourAbvInput = this.handleBeerFourAbvInput.bind(this);
        /* Bind gravities */
        this.handleBeerOneGravityInput = this.handleBeerOneGravityInput.bind(this);
        this.handleBeerTwoGravityInput = this.handleBeerTwoGravityInput.bind(this);
        this.handleBeerThreeGravityInput = this.handleBeerThreeGravityInput.bind(this);
        this.handleBeerFourGravityInput = this.handleBeerFourGravityInput.bind(this);
        /* Bind volumes */
        this.handleBeerOneVolumeInput = this.handleBeerOneVolumeInput.bind(this);
        this.handleBeerTwoVolumeInput = this.handleBeerTwoVolumeInput.bind(this);
        this.handleBeerThreeVolumeInput = this.handleBeerThreeVolumeInput.bind(this);
        this.handleBeerFourVolumeInput = this.handleBeerFourVolumeInput.bind(this);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleBeerOneAbvInput(e) {
        this.setState({
            BeerOneAbv: e.target.value
        });
    }
    handleBeerTwoAbvInput(e) {
        this.setState({
            BeerTwoAbv: e.target.value
        });
    }
    handleBeerThreeAbvInput(e) {
        this.setState({
            BeerThreeAbv: e.target.value
        });
    }
    handleBeerFourAbvInput(e) {
        this.setState({
            BeerFourAbv: e.target.value
        });
    }

    handleBeerOneGravityInput(e) {
        this.setState({
            BeerOneGravity: e.target.value
        });
    }
    handleBeerTwoGravityInput(e) {
        this.setState({
            BeerTwoGravity: e.target.value
        });
    }
    handleBeerThreeGravityInput(e) {
        this.setState({
            BeerThreeGravity: e.target.value
        });
    }
    handleBeerFourGravityInput(e) {
        this.setState({
            BeerFourGravity: e.target.value
        });
    }

    handleBeerOneVolumeInput(e) {
        this.setState({
            BeerOneVolume: e.target.value
        });
    }
    handleBeerTwoVolumeInput(e) {
        this.setState({
            BeerTwoVolume: e.target.value
        });
    }
    handleBeerThreeVolumeInput(e) {
        this.setState({
            BeerThreeVolume: e.target.value
        });
    }
    handleBeerFourVolumeInput(e) {
        this.setState({
            BeerFourVolume: e.target.value
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        /* Define states as variables for calculations */
        let BeerOneAbv = this.state.BeerOneAbv;
        let BeerTwoAbv = this.state.BeerTwoAbv;
        let BeerThreeAbv = this.state.BeerThreeAbv;
        let BeerFourAbv = this.state.BeerFourAbv;

        let BeerOneGravity = this.state.BeerOneGravity;
        let BeerTwoGravity = this.state.BeerTwoGravity;
        let BeerThreeGravity = this.state.BeerThreeGravity;
        let BeerFourGravity = this.state.BeerFourGravity;

        let BeerOneVolume = this.state.BeerOneVolume;
        let BeerTwoVolume = this.state.BeerTwoVolume;
        let BeerThreeVolume = this.state.BeerThreeVolume;
        let BeerFourVolume = this.state.BeerFourVolume;

        /* Calculating blend volume and individual percents */
        let BlendVolume = +BeerOneVolume + +BeerTwoVolume + +BeerThreeVolume + +BeerFourVolume;
        let BeerOnePercent = ((BeerOneVolume/BlendVolume)*100);
        let BeerTwoPercent = ((BeerTwoVolume/BlendVolume)*100);
        let BeerThreePercent = ((BeerThreeVolume/BlendVolume)*100);
        let BeerFourPercent = ((BeerFourVolume/BlendVolume)*100);

        /* Set state of calculations */
        this.setState({
            BlendVolume: BlendVolume,
            BeerOnePercent: BeerOnePercent,
            BeerTwoPercent: BeerTwoPercent,
            BeerThreePercent: BeerThreePercent,
            BeerFourPercent: BeerFourPercent
        });
    }

    render() {
        return(
            <div className='blendCalculator'>
                <h1>Blend</h1>
                <form onSubmit={this.handleFormSubmit} className='blendForm'>

                {/* User inputs ABV, gravity, and volume */}
                    <label className='inputAbvs'>
                        ABV:
                        <input type='text' onChange={this.handleBeerOneAbvInput} value={this.state.BeerOneAbv} className='userInputBeerOneAbv' />
                    </label>
                    <label className='inputGravities'>
                        Gravity:
                        <input type='text' onChange={this.handleBeerOneGravityInput} value={this.state.BeerOneGravity} className='userInputBeerOneGravity' />
                    </label>
                    <label className='inputVolumes'>
                        Volume:
                        <input type='text' onChange={this.handleBeerOneVolumeInput} value={this.state.BeerOneVolume} className='userInputBeerVolume' />
                        <input type='text' onChange={this.handleBeerTwoVolumeInput} value={this.state.BeerTwoVolume} className='userInputBeerVolume' />
                        <input type='text' onChange={this.handleBeerThreeVolumeInput} value={this.state.BeerThreeVolume} className='userInputBeerVolume' />
                        <input type='text' onChange={this.handleBeerFourVolumeInput} value={this.state.BeerFourVolume} className='userInputBeerVolume' />
                    </label>
                    <input type='submit' value="Submit" className='submitButton'></input>
                </form>

                <h3 className='blendVolume'>Blend Volume: {this.state.BlendVolume}</h3>
            </div>
        )
    }
};