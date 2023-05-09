import React, { useState, useEffect, useContext } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

/*agrego*/
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { AccordionContext } from 'react-bootstrap';


/*----Agregue esto---- */
function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);//(AccordionContext);

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <Button variant="primary"
            //type="button"
            style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
            onClick={decoratedOnClick}
        >
            {children}
            </Button>
    );
}
/*---------------- */


const Cotizar = () => {
    //setear los hooks useState
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")//valores del input

    //función para traer los datos de la API
    const URL = 'https://jsonplaceholder.typicode.com/users'//sacar datos de un json
    const localData = [
        {
            "id": 1,
            "patente": 1,
            "sucursal": "cerca",
            "marca": "Bret",
            "modelo": "ESSENCE",
            "reserva": "si"
        },
        {
            "id": 2,
            "patente": 1234,
            "sucursal": "lejos",
            "marca": "way",
            "modelo": "Sincere@april.biz",
            "reserva": "No"
        }
    ]

    //datos que traemos
    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        //console.log(data)
        setUsers(data)
    }
    //función de búsqueda
    const searcher = (e) => {
        setSearch(e.target.value)
    }
    //metodo de filtrado 1 
    /*  let results = []
    if(!search)
    {
        results = users
    }else{
         results = users.filter( (dato) =>
         dato.name.toLowerCase().includes(search.toLocaleLowerCase())
     )
    } */

    //metodo de filtrado 2   -recomendado- filtra por modelo o marca
    // const results = !search ? users : users.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
    const results = !search ? users : users.filter((dato) => dato.modelo.toLowerCase().includes(search.toLocaleLowerCase()) || dato.marca.toLowerCase().includes(search.toLocaleLowerCase()))

    //pruebo useEffect de abajo
    /*useEffect( ()=> {
     showData()
   }, [])*/
    useEffect(() => {
        //mostrar datos locales
        setUsers(localData);
        //mostrar datos desde API
        //showData()
    }, [])

    //renderizamos la vista
    return (
        <>
        <h1 id="titulo-formulario">Cotizar Vehículos</h1>
            {/* filtro */}
            <div><input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control' />

                {/* tabla */}
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Patente</th>
                                <th>Sucursal</th>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Vehículo reservado</th>
                                <th>Cotizar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* { results.map( (user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                    </tr>                    
                ))}*/}
                            {results.map((user) => (
                              <tr key={user.id}>
                                    <td>{user.patente}</td>
                                    <td>{user.sucursal}</td>
                                    <td>{user.marca}</td>
                                    <td>{user.modelo}</td>
                                    <td>{user.reserva}</td>
                                    <Link to="/nueva-pagina">

                                    {/*---------- Agrego consegui patente  -------*/}
                                    
                                   <Button variant="primary">Cotizar </Button>{''}
                                   {/*-------- ---------------*/}

                                    </Link>
                                    
                                   {/*<Accordion defaultActiveKey="0">
                  
                                        <ContextAwareToggle eventKey="0">Cotizar</ContextAwareToggle>
                                    
                                        <Accordion.Collapse eventKey="0">
                                        <td colSpan={2}>Hello! I'm the body</td>
                                        </Accordion.Collapse>
                                    </Accordion>*/}
                            </tr>
                            ))}

                            {/* paga tener 2 datos en uno
                            <tr>
                                <td>3</td>
                                <td colSpan={2}>Larry the Bird</td>
                                <td>@twitter</td>
                                <td>Si</td>
                                <Button variant="primary">Cotizar</Button>{' '}
                            </tr> */}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Cotizar