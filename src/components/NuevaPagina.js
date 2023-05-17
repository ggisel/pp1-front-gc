import React, { useState, useContext } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link,useNavigate, useParams } from 'react-router-dom';
import {products} from './products';


import { AppContext } from './AppContext';
/*
cuanto presion el boton cotizar pongo un input donde tiene que rellenar esto datos 
*Sucursal : String ---> (se obtiene del auto logrado)
* DniCliente : String --> (esto identifiqué que se tiene que pedir, porque como vimos, un auto puede estar 
    reservado pero otra persona puede ir físicamente y comprarlo)
* Patente : String --> auto
* IdVendedor : String --> usuario logeado
* Garantía extendida : boleean --> con un check


de aca la sucursal la saca del auto que filtro en la tabla. el dni ese que le pedimos obligatorio, la 
patente del auto que se filtro, el id del vendedor lo consultamos por la sesion que tiene iniciada el usuario, 
y la garantia extendida del check que tenemos que hacer

*/

const NuevaPagina = () => {

    const  idVendedor="Id del Vendedor";

    const { updateDni, updateEmail,updatePatente } = useContext(AppContext);
  const [dni, setDni] = useState('');
  const [email, setEmail] = useState('');
const navigate = useNavigate();

    /*lo llamo de la misma manera que en app.js osea productId y lo desectructuramos*/
    /*consumo desde los parametro las variantes del objeto y lo desestructuro el objeto */
    let {productId}= useParams();
    /*dentro de mi erreglo de productos busco 
    el producto que en su propiedad id sea igual al productId que viene de los params
    en este caso product.id tiraba error, entonces TIENE que ser string ya que productId es string*/

    let productSelected= products.find(product => product.id === productId)

    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
        event.preventDefault();// para que no se actualice la pantalla al hacer clic

        /*primero valida formulario */
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        }
        else{
            

            /* Aquí puedes utilizar los valores de dni y email para realizar las acciones que necesites
            tiene que estar adentro del handleSubmit, no anda por el Link
            aca afuera tira error*/
            /*agrego- 16-05 */
        updateDni(dni);
        updateEmail(email);
        updatePatente(productSelected.patente);
    /*no hace fata darle clic,x eso uso navigate() */
    navigate("/boleta-cotizacion");

        }   
    };

    return (

        <div >
            <h1 id="titulo-formulario">Cotización</h1>

            <Form id="formulario" noValidate validated={validated} onSubmit={handleSubmit}>
                {/* me fijo */}
                {/* -----Sucursal------ */}
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextSucursal">
                    <Form.Label column sm="2">
                        Sucursal:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue="Surcusal del vendedor" />
                    </Col>
                </Form.Group>
                {/*<Form.Group as={Row} md="6" controlId="validationCustom03">
                    <Form.Label column >Sucursal:</Form.Label>
                    <div class="alert alert-primary mt-2 mb-4" role="alert">
                        Agrego datos <span id="totalPago" class="align-middle"></span>
                    </div>
                </Form.Group> */}

                {/* -----DNI del Cliente------ */}
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextDNI">
                    <Form.Label column sm="2">
                        DNI del Cliente:
                    </Form.Label>
                    <Col sm="10">
                        {/*<Form.Control type="text" placeholder="Agregue el DNI sin puntos" required />*/}
                        
                        {/*agrego- 16-05 */}
                        <Form.Control type="text" placeholder="Agregue el DNI sin puntos" value={dni} 
                        onChange={(event) => setDni(event.target.value)} required/>  {/*Agrega la propiedad isValid*/}
                       
                       
                       
                        <Form.Control.Feedback type="invalid">
                            Por favor, proporcione un DNI válido.
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                {/* -----Mail del Cliente------ */}
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Mail del Cliente:
                    </Form.Label>
                    <Col sm="10">
                        {/*<Form.Control type="mail" placeholder="Agregue el mail del cliente" required />*/}
                        
                        {/*agrego- 16-05 */}
                        <Form.Control type="mail" placeholder="Agregue el mail del cliente" value={email}
            onChange={(event) => setEmail(event.target.value)} required/>


                        <Form.Control.Feedback type="invalid">
                            Por favor, proporcione un Email válido.
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                {/*<Form.Group as={Row} md="6" controlId="validationCustom03">
                    <Form.Label column sm={2}>DNI del Cliente</Form.Label>
                    <Form.Control type="text" placeholder="Agregue el DNI sin puntos" required />
                    <Form.Control.Feedback type="invalid">
                        Por favor, proporcione un DNI válido.
                    </Form.Control.Feedback>
                </Form.Group>*/}

                {/* -----Patente------ */}
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPatente">
                    <Form.Label column sm="2">
                        Patente:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue={productSelected.patente} />
                    </Col>
                </Form.Group>
                {/*    <Form.Group as={Row} md="6" controlId="validationCustom04">
                    <Form.Label column>Patente</Form.Label>
                    <Form.Control type="text" placeholder="Patente" required />
                    <Form.Control.Feedback type="invalid">
                        Por favor, proporcione una Patente válida.
                    </Form.Control.Feedback>
            </Form.Group>*/}

                {/* -----IdVendedor------ */}
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextIdv">
                    <Form.Label column sm="2">
                        IdVendedor:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue="Id del Vendedor" />
                    </Col>
                </Form.Group>
                {/* <Form.Group as={Row} className="mb-3" md="6" controlId="validationCustom05">
                    <Form.Label as={Col} >IdVendedor</Form.Label>
                    <Form.Control type="text" placeholder="IdVendedor" required />
                    <Form.Control.Feedback type="invalid">
                        Por favor, proporcione un IdVendedor válido.
                    </Form.Control.Feedback>
        </Form.Group>*/}

                {/* -----Garantía extendida------ */}
                <Form.Group className="mb-3" controlId="checkGarantia">
                    <Form.Check
                        label="Garantía extendida"
                    //feedback="You must agree before submitting."
                    // feedbackType="invalid"
                    />
                </Form.Group>

                {/* -----Asi me pide validar------ */}
                <Button type="submit">Finalizar</Button>

                {/* -----Asi no me valida- 16-05------ 
                <Link to="/boleta-cotizacion">
                <Button type="submit" >Finalizar</Button>
                </Link>*/}
                
            </Form>
        </div>
    )
}

export default NuevaPagina;