import React from "react";
import {Row, Col, Button, Card} from 'antd';
import {PlusOutlined, MinusOutlined} from "@ant-design/icons";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators as counterActions, selector as counterSelector} from '../features/counter'; 

const Counter = ({counter, counterActions}) => {

    return(
        <>
            <Card title="Redux Counter" bordered={false}>

            <Row>
                <Col md={9}/>
                <Col md={2}>
                    <Button size="large" icon={<MinusOutlined/>} shape="circle" onClick={counterActions.decrement}/>
                </Col>
                <Col md={2}>
                    <span style={{fontSize: '2rem', fontWeight: 'bold'}}>{counter.value}</span>
                </Col>
                <Col md={2}>
                    <Button size="large" icon={<PlusOutlined/>} shape="circle" onClick={counterActions.increment}/>
                </Col>
                <Col md={9}/>
            </Row>
            </Card>
        </>
    )
}

const mapStateToProps = (state) => ({...counterSelector(state)});
const mapDispatchToProps = (dispatch) => ({counterActions: bindActionCreators(counterActions, dispatch)})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);