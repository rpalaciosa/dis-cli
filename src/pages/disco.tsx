import { useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import Badge from 'react-bootstrap/Badge';

import ListGroup from 'react-bootstrap/ListGroup';

import { getDiscos } from '../controller/disco';
import { Disco } from '../models/disco.m';

const ListaDiscos=() => {

    const [discos , setDiscos ] = useState<Disco[]>([]);

    useEffect (()=> { 
        const obtenerTodos =async () => {
            const allDiscos= await getDiscos();
            setDiscos(allDiscos);
        }
        obtenerTodos();


    });

    return (
        <>
        <h1> Listado Discos </h1>
        
        <div className='content-raper'>
            <div className='content'>
                <div className='row gap-3'>

                    {discos?.slice(0,800).map((disco) => (
                        
                        <Card className="mx-auto" style={{ width: '18rem' }}>
                            <Figure>
                                <Figure.Image
                                    width={100}
                                    height={80}
                                    alt="100x80"
                                    src={disco.id}
                                />
                                </Figure>
                            <Card.Body>
                                <Card.Title><strong> {disco.nombre} </strong></Card.Title>
                                <Card.Header>  
                                        {disco.tipo}
                                    
                                </Card.Header>
                                <Card.Text>
                                
                                </Card.Text>
                                <ListGroup variant="flush">
                                    <ListGroup.Item> <strong>hp</strong> : {disco.year} </ListGroup.Item>
                                </ListGroup>

                                
                            </Card.Body>
                        </Card>
                    )) }
                </div>    
            </div>    
        </div>
        </>

        )
 }   


 export default ListaDiscos;