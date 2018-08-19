import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PageWrapper, HeaderTitle, FlexResult, FlexBoxRev } from '../../molecules/StyledComponents';
import PropTypes from 'prop-types'

const renderButton = {
    backgroundColor: '#00539f',
    color: 'white',
    border: '2px solid #00539f',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '1.6rem',
    fontWeight: '600',
    height: '40px',
    minWidth: '200px',
    padding: '0 48px',
    transition: 'box-shadow .3s',
    fontFamily: 'inherit',
    marginLeft: '4px',
    marginTop: '10px'
}

class ResultPage extends Component {
    render() {
        let congratMessage, statusMessage, timeTakenMessage, linkButton;
        if(this.props.findData.status === "false"){
            congratMessage = <HeaderTitle>Failure! Not able to find Falcone. King Shan is not pleased.</HeaderTitle>
            timeTakenMessage = <HeaderTitle small topMargin>Time Taken: {this.props.timeData}</HeaderTitle>
            statusMessage = '';
            linkButton = <Link to="/" style={ renderButton }>Start Again</Link>
        } else if(this.props.findData.status === "success"){
            congratMessage = <HeaderTitle>Success! Congratulations on finding Falcone. King Shan is mighty pleased.</HeaderTitle>
            timeTakenMessage = <HeaderTitle small topMargin>Time Taken: {this.props.timeData}</HeaderTitle>
            statusMessage = <HeaderTitle small>Planet Found: {this.props.findData.planet_name}</HeaderTitle>
            linkButton = <Link to="/" style={ renderButton }>Start Again</Link>
        }

        return (
            <PageWrapper wider>
                <FlexResult>
                    <FlexBoxRev toCenter noRightMargin>
                        { congratMessage }
                        { timeTakenMessage }
                        { statusMessage }
                        { linkButton }
                    </FlexBoxRev>
                </FlexResult>
            </PageWrapper>
        );
    }

}

ResultPage.propTypes = {
    timeData: PropTypes.number,
    findData: PropTypes.object,

}

const mapStateToProps = ({ dataReducer }) => ({
    findData: dataReducer.findData,
    timeData: dataReducer.timeData
});

export default connect(mapStateToProps, null)(ResultPage);