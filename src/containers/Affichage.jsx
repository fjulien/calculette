import React from 'react';
import './Affichage.css'
import { Col, Form, FormGroup, Input, Button } from 'reactstrap';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { clear } from "../actions";

const Affichage = ({ affiche, clear }) => {
    return (
        <div className='Affichage'>
            <Form>
                <FormGroup row>
                    <Col sm={6}>
                        <Input className='input' type="text" value={affiche.affichage} />
                    </Col>
                    <Col sm={3}>
                        <Input className='input' type="text" value={affiche.signe} />
                    </Col>
                    <Col sm={3}>
                        <Button onClick={() => clear()} className='clear' color='dark'>Clear</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    );
}

function mstp(state) {
    return {
        affiche: state.calcule
    }
}

function mdtp(dispatch) {
    return bindActionCreators({ clear }, dispatch);
}

export default connect(mstp, mdtp)(Affichage);