import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                <button onClick={this.props.onStoreResult}>Store Result</button>
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
        ctr: state.counter,
        storedResults: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddValueCounter: value => dispatch({type: 'ADD', value: value}),
        onSubtractValueCounter: value => dispatch({type: 'SUBTRACT', value: value}),
        onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResult: id => dispatch({type: 'DELETE_RESULT', id: id}),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);