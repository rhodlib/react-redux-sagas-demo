import React from "react";
import {Row, Col, Typography, Button, Card} from 'antd';
import {connect} from 'react-redux';
import {PlusOutlined, MinusOutlined} from "@ant-design/icons";
import {actionTypes} from '../redux'; 

const Counter = ({counter, increment, decrement}) => {
    return(
        <>
            <Card title="Redux Counter" bordered={false}>

            <Row>
                <Col md={9}/>
                <Col md={2}>
                    <Button size="large" icon={<MinusOutlined/>} shape="circle" onClick={decrement}/>
                </Col>
                <Col md={2}>
                    <span style={{fontSize: '2rem', fontWeight: 'bold'}}>{counter}</span>
                </Col>
                <Col md={2}>
                    <Button size="large" icon={<PlusOutlined/>} shape="circle" onClick={increment}/>
                </Col>
                <Col md={9}/>
            </Row>
            </Card>
        </>
    )
}

const mapStateToProps = state => ({counter: state.counter});

const mapDispatchToProps = dispatch => ({
    increment: () => {dispatch({type: actionTypes.INCREMENT})},
    decrement: () => {dispatch({type: actionTypes.DECREMENT})}
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);