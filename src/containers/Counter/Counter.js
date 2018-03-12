import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    value = 5;

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label={"Add " + this.value} clicked={() => this.props.onAddValueCounter(this.value)}  />
                <CounterControl label={"Subtract " + this.value} clicked={() => this.props.onSubtractValueCounter(this.value)}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddValueCounter: value => dispatch({type: actionTypes.ADD, value: value}),
        onSubtractValueCounter: value => dispatch({type: actionTypes.SUBTRACT, value: value}),
        onStoreResult: result => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: id => dispatch({type: actionTypes.DELETE_RESULT, id: id}),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);