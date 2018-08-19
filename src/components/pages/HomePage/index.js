import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as findingAction from '../../../actions/findingActions';
import PropTypes from 'prop-types'
import { PageWrapper, GridHome, GridDest, HeaderTitle, GridRow } from '../../molecules/StyledComponents';
import RadioGroup from '../../molecules/RadioGroup';
import Select from '../../molecules/Select';
import { withRouter } from 'react-router-dom';

const renderButton = {
    backgroundColor: '#f5f5f5',
    color: 'black',
    border: '2px solid #f5f5f5',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '1.6rem',
    fontWeight: '600',
    height: '40px',
    minWidth: '200px',
    padding: '0 24px',
    transition: 'box-shadow .3s',
    fontFamily: 'inherit',
    marginLeft: '4px'
}

const renderButtonDisabled = {
    backgroundColor: '#c4c4c4',
    color: 'grey',
    cursor: 'no-drop',
    border: '2px solid #c4c4c4',
    borderRadius: '20px',
    fontSize: '1.6rem',
    fontWeight: '600',
    height: '40px',
    minWidth: '200px',
    padding: '0 24px',
    transition: 'box-shadow .3s',
    fontFamily: 'inherit',
    marginLeft: '4px'
}

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planetArray: [],
            vehicleArray: [],
            selectedVehicle1: [],
            selectedVehicle2: [],
            selectedVehicle3: [],
            selectedVehicle4: [],
            tokenObj: {},
            findObj: {},
            selectedPlanet1: '',
            selectedPlanet2: '',
            selectedPlanet3: '',
            selectedPlanet4: '',
            totalTime: 0
        }
        this.getInitialData();
    }

    componentDidMount() {
        const values = '';
        this.props.initialToken(values);
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
        if(this.props.planetData !== nextProps.planetData) {
            this.setState({
                planetArray: nextProps.planetData.map(obj => obj.name)
            })
        }
        if(this.props.vehicleData !== nextProps.vehicleData) {
            this.setState({
                vehicleArray: nextProps.vehicleData
            })
        }
        if(this.props.tokenData !== nextProps.tokenData) {
            this.setState({
                tokenObj: nextProps.tokenData
            })
        }
        if(this.props.findData !== nextProps.findData) {
            this.props.history.push("/result");
        }
    }

    getInitialData() {
        this.props.initialData();
    }

    calculateMaxDistance(planetData, vehicleData, selectedPlanet, selectedVehicle) {
        let distanceToPlanet = 0, vehicleMaxDistance = 0;
        planetData.forEach(obj => {
            if(obj.name === selectedPlanet){
                distanceToPlanet = obj.distance
            }
        })
        vehicleData.forEach(obj => {
            if(obj.name === selectedVehicle){
                vehicleMaxDistance = obj.max_distance
            }
        })
        if(distanceToPlanet > vehicleMaxDistance) {
            alert(`${ selectedVehicle } max distance is ${ vehicleMaxDistance } and planet distance is ${ distanceToPlanet }. Choose other vehicle.`);
            return true;
        }
        return false;
    }

    calculateTimeTaken(planetData, vehicleData, selectedPlanet, selectedVehicle) {
        let distanceToPlanet = 0, vehicleSpeed = 0;
        planetData.forEach(obj => {
            if(obj.name === selectedPlanet){
                distanceToPlanet = obj.distance
            }
        })
        vehicleData.forEach(obj => {
            if(obj.name === selectedVehicle){
                vehicleSpeed = obj.speed
            }
        })

        return this.state.totalTime + (distanceToPlanet/vehicleSpeed);
    }

    handlePlanet1Change = (event) => {
        
        this.setState({
            selectedPlanet1: event.target.value
        })
    }

    handleVehicle1Selection = (event) => {
        if(this.state.selectedPlanet1 && this.props.planetData && this.props.vehicleData) {
            if(this.calculateMaxDistance(this.props.planetData, this.props.vehicleData, this.state.selectedPlanet1, event.target.value)) {
                return;
            }
            else {
                this.setState({
                    selectedVehicle1: [ event.target.value ],
                    vehicleArray: this.state.vehicleArray.map(obj => (obj.name === event.target.value && obj.total_no > 0) ? ({ ...obj, total_no: obj.total_no-1  }): obj),
                    totalTime: this.calculateTimeTaken(this.props.planetData, this.props.vehicleData, this.state.selectedPlanet1, event.target.value)
                })
            }
        }

    }

    handlePlanet2Change = (event) => {

        this.setState({
            selectedPlanet2: event.target.value
        })
    }

    handleVehicle2Selection = (event) => {
        if(this.state.selectedPlanet2 && this.props.planetData && this.props.vehicleData) {
            if(this.calculateMaxDistance(this.props.planetData, this.props.vehicleData, this.state.selectedPlanet2, event.target.value)) {
                return;
            }
            else {
                this.setState({
                    selectedVehicle2: [ event.target.value ],
                    vehicleArray: this.state.vehicleArray.map(obj => (obj.name === event.target.value && obj.total_no > 0) ? ({ ...obj, total_no: obj.total_no-1  }): obj),
                    totalTime: this.calculateTimeTaken(this.props.planetData, this.props.vehicleData, this.state.selectedPlanet2, event.target.value)
                })
            }

        }
    }

    handlePlanet3Change = (event) => {
        this.setState({
            selectedPlanet3: event.target.value
        })
    }

    handleVehicle3Selection = (event) => {
        if(this.state.selectedPlanet3 && this.props.planetData && this.props.vehicleData) {
            if(this.calculateMaxDistance(this.props.planetData, this.props.vehicleData, this.state.selectedPlanet3, event.target.value)) {
                return;
            }
            else {
                this.setState({
                    selectedVehicle3: [ event.target.value ],
                    vehicleArray: this.state.vehicleArray.map(obj => (obj.name === event.target.value && obj.total_no > 0) ? ({ ...obj, total_no: obj.total_no-1  }): obj),
                    totalTime: this.calculateTimeTaken(this.props.planetData, this.props.vehicleData, this.state.selectedPlanet3, event.target.value)
                })
            }
        }
    }

    handlePlanet4Change = (event) => {
        this.setState({
            selectedPlanet4: event.target.value
        })
    }

    handleVehicle4Selection = (event) => {
        if(this.state.selectedPlanet4 && this.props.planetData && this.props.vehicleData) {
            if(this.calculateMaxDistance(this.props.planetData, this.props.vehicleData, this.state.selectedPlanet4, event.target.value)) {
                return;
            }
            else {
                this.setState({
                    selectedVehicle4: [ event.target.value ],
                    vehicleArray: this.state.vehicleArray.map(obj => (obj.name === event.target.value && obj.total_no > 0) ? ({ ...obj, total_no: obj.total_no-1  }): obj),
                    totalTime: this.calculateTimeTaken(this.props.planetData, this.props.vehicleData, this.state.selectedPlanet4, event.target.value)
                })
            }
        }
    }

    handleFormSubmit = () => {
        const submitObj = {};

        submitObj[ 'token' ] = this.state.tokenObj.token;
        submitObj[ 'planet_names' ] = [ this.state.selectedPlanet1, this.state.selectedPlanet2, this.state.selectedPlanet3, this.state.selectedPlanet4 ];
        submitObj[ 'vehicle_names' ] = [ this.state.selectedVehicle1[ 0 ], this.state.selectedVehicle2[ 0 ], this.state.selectedVehicle3[ 0 ], this.state.selectedVehicle4[ 0 ] ];

        this.props.totalTimeTaken(this.state.totalTime);
        this.props.onFormSubmit(JSON.stringify(submitObj));
    }

    render() {

        return (
            <PageWrapper wider>
                <GridHome>
                    <HeaderTitle toCenter>Select Planets you want to search in: </HeaderTitle>
                    <div className="grid__item">
                        <GridDest>
                            <GridRow>
                                <div>Destination 1 </div>
                                {this.state.planetArray &&
                                    <Select
                                        name={ 'planet1' }
                                        placeholder={ 'Select' }
                                        controlFunc={ this.handlePlanet1Change }
                                        options={ this.state.planetArray }
                                        selectedOption={ this.state.selectedPlanet1 } 
                                    />
                                }
                                {this.state.selectedPlanet1 &&
                                <RadioGroup
                                    setName={ 'planet1Vehicle' }
                                    type={ 'radio' }
                                    controlFunc={ this.handleVehicle1Selection }
                                    options={ this.state.vehicleArray }
                                    selectedOptions={ this.state.selectedVehicle1 }
                                />
                                }
                            </GridRow>
                            <GridRow>
                                <div>Destination 2 </div>
                                {this.state.planetArray &&
                                    <Select
                                            name={ 'planet2' }
                                            placeholder={ 'Select' }
                                            controlFunc={ this.handlePlanet2Change }
                                            options={ this.state.planetArray }
                                            selectedOption={ this.state.selectedPlanet2 } 
                                    />
                                }
                                {this.state.selectedPlanet2 &&
                                <RadioGroup
                                    setName={ 'planet2Vehicle' }
                                    type={ 'radio' }
                                    controlFunc={ this.handleVehicle2Selection }
                                    options={ this.state.vehicleArray }
                                    selectedOptions={ this.state.selectedVehicle2 }
                                />
                                }
                            </GridRow>
                            <GridRow>
                                <div>Destination 3 </div>
                                {this.state.planetArray &&
                                    <Select
                                        name={ 'planet3' }
                                        placeholder={ 'Select' }
                                        controlFunc={ this.handlePlanet3Change }
                                        options={ this.state.planetArray }
                                        selectedOption={ this.state.selectedPlanet3 } 
                                    />
                                }
                                {this.state.selectedPlanet3 &&
                                <RadioGroup
                                    setName={ 'planet3Vehicle' }
                                    type={ 'radio' }
                                    controlFunc={ this.handleVehicle3Selection }
                                    options={ this.state.vehicleArray }
                                    selectedOptions={ this.state.selectedVehicle3 }
                                />
                                }

                            </GridRow>
                            <GridRow>
                                <div>Destination 4 </div>
                                {this.state.planetArray &&
                                    <Select
                                        name={ 'planet4' }
                                        placeholder={ 'Select' }
                                        controlFunc={ this.handlePlanet4Change }
                                        options={ this.state.planetArray }
                                        selectedOption={ this.state.selectedPlanet4 } 
                                    />
                                }
                                {this.state.selectedPlanet4 &&
                                <RadioGroup
                                    setName={ 'planet4Vehicle' }
                                    type={ 'radio' }
                                    controlFunc={ this.handleVehicle4Selection }
                                    options={ this.state.vehicleArray }
                                    selectedOptions={ this.state.selectedVehicle4 }
                                />
                                }

                            </GridRow>
                            <GridRow>
                                <div></div>
                                <div>Time Taken: {this.state.totalTime}</div>
                                <div></div>
                            </GridRow>

                        </GridDest>
                    </div>
                    <div className="grid__item" style={ { textAlign: 'center' } }>
                        {this.state.selectedVehicle4.length === 0 ? 
                            <input type="button" style={ renderButtonDisabled } onClick={ this.handleFormSubmit } disabled value="Submit" />                            
                            :
                            <input type="button" style={ renderButton } onClick={ this.handleFormSubmit } value="Submit" />                        
                        }
                       
                    </div>
                </GridHome>
            </PageWrapper>
        );
    }

}

HomePage.propTypes = {
    planetData: PropTypes.array,
    vehicleData: PropTypes.array,
    initialData: PropTypes.func,
    initialToken: PropTypes.func,
    totalTimeTaken: PropTypes.func,
    onFormSubmit: PropTypes.func,
    history: PropTypes.object
}

const mapStateToProps = ({ dataReducer }) => ({
    planetData: dataReducer.planetData,
    vehicleData: dataReducer.vehicleData,
    tokenData: dataReducer.tokenData,
    findData: dataReducer.findData
});

const mapDispatchToProps = dispatch => ({
    initialData: () => {
        dispatch(findingAction.getPlanetData());
        dispatch(findingAction.getVehicleData());
    },
    initialToken: values => {
      dispatch(findingAction.getToken(values));
    },
    totalTimeTaken: values => {
        dispatch(findingAction.totalTimeTaken(values));
    },
    onFormSubmit: values => {
      dispatch(findingAction.findFalcone(values));
    }
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage));