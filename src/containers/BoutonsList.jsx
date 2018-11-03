import React from 'react';
import './BoutonsList.css'
import { Row, Col, Button } from 'reactstrap';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getNumber, valeur, result } from "../actions";

const BoutonsList = ({ getNumber, valeur, result }) => {
    return (
        <div className='BoutonsList'>
            <Row className='ligne'>
                <Col xs="3"><Button onClick={() => getNumber(7)} color="dark" className='boutons'>7</Button></Col>
                <Col xs="3"><Button onClick={() => getNumber(8)} color="dark" className='boutons'>8</Button></Col>
                <Col xs="3"><Button onClick={() => getNumber(9)} color="dark" className='boutons'>9</Button></Col>
                <Col xs="3"><Button onClick={() => valeur('/')} color="dark" className='boutons'>/</Button></Col>
            </Row>
            <Row className='ligne'>
                <Col xs="3"><Button onClick={() => getNumber(4)} color="dark" className='boutons'>4</Button></Col>
                <Col xs="3"><Button onClick={() => getNumber(5)} color="dark" className='boutons'>5</Button></Col>
                <Col xs="3"><Button onClick={() => getNumber(6)} color="dark" className='boutons'>6</Button></Col>
                <Col xs="3"><Button onClick={() => valeur('*')} color="dark" className='boutons'>x</Button></Col>
            </Row>
            <Row className='ligne'>
                <Col xs="3"><Button onClick={() => getNumber(1)} color="dark" className='boutons'>1</Button></Col>
                <Col xs="3"><Button onClick={() => getNumber(2)} color="dark" className='boutons'>2</Button></Col>
                <Col xs="3"><Button onClick={() => getNumber(3)} color="dark" className='boutons'>3</Button></Col>
                <Col xs="3"><Button onClick={() => valeur('-')} color="dark" className='boutons'>-</Button></Col>
            </Row>
            <Row className='ligne'>
                <Col xs="3"><Button onClick={() => getNumber(0)} color="dark" className='boutons'>0</Button></Col>
                <Col xs="3"><Button onClick={() => getNumber(".")} color="dark" className='boutons'>.</Button></Col>
                <Col xs="3"><Button onClick={() => result()} color="dark" className='boutons'>=</Button></Col>
                <Col xs="3"><Button onClick={() => valeur('+')} color="dark" className='boutons'>+</Button></Col>
            </Row>
        </div>
    );
}

function mstp(state) {
    return {
        nombre: state.nombre
    }
}

function mdtp(dispatch) {
    return bindActionCreators({ getNumber, valeur, result }, dispatch);
}
export default connect(mstp, mdtp)(BoutonsList);