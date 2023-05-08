import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Cotizar = () => {
    //setear los hooks useState
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")
    const [resultes, setResults] = useState([]);

    //función para traer los datos de la API
    //const URL = 'https://jsonplaceholder.typicode.com/users'//sacar datos de un json
    const URL = [
        {
            "id": 1,
            "patente": 1,
            "sucursal": "cerca",
            "marca": "Bret",
            "modelo": "ESSENCE",
            "reservado": "si"
        },
        {
            "id": 2,
            "patente": 1234,
            "sucursal": "lejos",
            "marca": "way",
            "modelo": "Sincere@april.biz",
            "reservado": "No"
        }
    ]

    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        //console.log(data)
        setUsers(data)
        //
        setResults(data);
    }
    //función de búsqueda
    const searcher = (e) => {
        //----------
        const value = e.target.value.toLowerCase();
        const filteredData = users.filter((user) => {
            return (
                user.sucursal.toLowerCase().includes(value)
            );
        });
        setResults(filteredData);
        //-------
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

    //metodo de filtrado 2   
   const results = !search ? users : users.filter((dato)=> dato.sucursal.toLowerCase().includes(search.toLocaleLowerCase()));
  // const results = !search ? users : users.filter((dato)=> dato.modelo.toLowerCase().includes(search.toLocaleLowerCase()))
  
   useEffect( ()=> {
    showData()
  }, [])

    //renderizamos la vista
    return (
        <>
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
                            {results.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.patente}</td>
                                    <td>{user.sucursal}</td>
                                    <td>{user.marca}</td>
                                    <td>{user.modelo}</td>
                                    <td>{user.reserva}</td>
                                    <Button variant="primary">Cotizar</Button>{' '}
                                </tr>
                            ))}

                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Si</td>
                                <Button variant="primary">Cotizar</Button>{' '}
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>No</td>
                                <Button variant="primary">Cotizar</Button>{' '}
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan={2}>Larry the Bird</td>
                                <td>@twitter</td>
                                <td>Si</td>
                                <Button variant="primary">Cotizar</Button>{' '}
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Cotizar