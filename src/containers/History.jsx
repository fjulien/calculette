import React, { Component } from 'react';
import './History.css';
import { connect } from "react-redux";
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class History extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: false
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div className='History'>
                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>History</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card className='zoom'>
                        <CardBody>
                            <ol>
                                {this.props.affiche.history.map((element, index) =>
                                    <li key={index}>{element}</li>)}
                            </ol>
                        </CardBody>
                    </Card>
                </Collapse>

            </div>
        );
    }
}

function mstp(state) {
    return {
        affiche: state.calcule
    }
}

export default connect(mstp)(History);

