import React from "react";
import {Row, Col, Button, Card} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {PlusOutlined, MinusOutlined} from "@ant-design/icons";
import {actionTypes} from '../redux'; 

const Counter = () => {
    const counter = useSelector( state => state.counter);
    const dispatch = useDispatch();
    const increment = () => dispatch({type: actionTypes.INCREMENT});
    const decrement = () => dispatch({type: actionTypes.DECREMENT});

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

export default Counter;