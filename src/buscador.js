//import { useState } from "react";
import { Container,Col } from "reactstrap"
import La from "./calculador"
//import {Formnuevatarea} from './formnuevatarea'

export const Buscador = ()=>{
    const calcTime =(gmt,tipo,date)=>{
        //console.log(typeof date,date)
        let d = date?new Date(date):new Date();
        let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        let nd = new Date(utc+(1000*60*60*gmt));
        // console.log(nd.toLocaleString())
        // console.log(nd.toLocaleString().substring(11,19))
        let inicia = 0;if(tipo===2){inicia = 11}
        return nd.toISOString().replace('T',' ').substring(0,19)
    }
    const hora = calcTime(-4,2,new Date())
    const salida =  <>
    <Container >
        <Col>
            <h1>Consulta buses 2.0</h1>
        </Col>
        <Col>
            Consulta hecha a las {hora}
        </Col>
        <Col>
            {/* <Micro/> */}
            <La bus='J18' paradero='PJ231' info='Desde depa'/>
            <La bus='J18' paradero='PJ618' info='Desde San Pablo'/>
            <La bus='418' paradero='PI759' info='Desde pajarito' />
            <La bus='418' paradero='PJ201' info='Desde depa' />
            <La bus='J10' paradero='PJ1569' info='Desde depa' />
        </Col>
    </Container>
    </>

    return salida
}
