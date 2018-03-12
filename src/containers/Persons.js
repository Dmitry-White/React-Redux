import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import { connect } from 'react-redux';
import * as actions from '../store/actions';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.personAddedHandler} />
                {this.props.ppl.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        ppl: state.persons
    }
};

const mapDispatchToProps = dispatch => {
    return {
        personAddedHandler: () => dispatch({type: actions.ADD}),
        personDeletedHandler: personId => dispatch({type: actions.DELETE, id: personId})
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Persons);