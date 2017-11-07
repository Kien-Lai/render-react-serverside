import React from 'react';
import { connect } from 'react-redux';
import Hello from '../../component/Hello';
import {DEMO}  from '../../action/demo';
import * as action from '../../action/demo';

class Home extends React.PureComponent {

    componentWillMount() {
        this.props.dispatch({type: DEMO});
        this.props.dispatch({type: DEMO});
    }

    render() {
        return(
            <div>
                <Hello />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      demo: state.demo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}  

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);