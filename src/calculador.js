import { useEffect, useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table} from 'reactstrap';

//import { env } from 'process';
const api = 'https://api.xor.cl/red/bus-stop'
//tareas

const La = (props)=>{
    const mtsxseg = 10
    const {paradero,bus,info} = props
    const [Cargando,setCarga] = useState(true)
    const [buses,setBuses] = useState(null)
    const [falla,setFalla] = useState(null)


    useEffect(()=>{
        console.log(buses)
        if(Cargando){
            const llamarapi = async()=>{
                try{
                const data = await fetch(`${api}/${paradero}`)
                console.log(data)
                
                if(data.ok){
                    const tareasApi = await data.json()
                    //console.log(tareasApi)
                    const busutil = tareasApi.services.filter(item=>item.id===bus)
                    setBuses(busutil[0].buses)
                    setCarga(false)  
                           
                }
                }catch{
                    setFalla('Falló el llamado a la API del transantiago')
                }
            }
            llamarapi()
        }
    },[Cargando])

    if(Cargando){
        return <h1>Cargando {bus}...</h1>
    }else if(falla){
        return <h1>{falla}</h1>
    }else{
        if(!buses){
            return <h1>No hay buses por ahora compa</h1>
        }else{
            return <Table dark style={{marginTop:"15px"}}>
            <thead>
                <tr>
                    <th>Bus {bus} {info}</th>
                    <th> distancia</th>
                    <th>Tiempo aprox s</th>
                </tr>
            </thead>
            <tbody>
                {buses.map((item,index)=>{
                    return <tr> 
                                <td>{item.id}</td>
                                <td>{item.meters_distance}</td>
                                <td>{parseInt(item.meters_distance/mtsxseg/60)}:{parseInt(item.meters_distance/5%60)<10?"0"+parseInt(item.meters_distance/mtsxseg%60):parseInt(item.meters_distance/mtsxseg%60)}</td></tr>
                })}
            </tbody>
        </Table>
        }
        
    }
}


export default La