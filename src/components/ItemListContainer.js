import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Card } from 'reactstrap';
import { CardGroup } from 'reactstrap';
import { CardBody } from 'reactstrap';
import { CardImg } from 'reactstrap';
import { CardTitle } from 'reactstrap';
import { CardSubtitle } from 'reactstrap';
import { CardText } from 'reactstrap';

function ItemListContainer(){
<CardGroup>
<Card>
    <CardImg alt="Card image cap" src="'/imagenes/buzo.jpg'"
    top
    width="100%" 
/>
    <CardBody>
    <CardTitle tag="h5">
        Buzo
    </CardTitle>
    <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
    >
        $3500
    </CardSubtitle>
    <CardText>
        Buzo de frisa para invierno
    </CardText>
    <Button>
        Comprar
    </Button>
    </CardBody>
</Card>
<Card>
    <CardImg
    alt="Card image cap"
    src="'/imagenes/maya.jpg'"
    top
    width="100%"
    />
    <CardBody>
    <CardTitle tag="h5">
        Malla
    </CardTitle>
    <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
    >
        $5000
    </CardSubtitle>
    <CardText>
        Las mejores mallas para este verano
    </CardText>
    <Button>
        Comprar
    </Button>
    </CardBody>
</Card>
<Card>
    <CardImg
    alt="Card image cap"
    src="'/imagenes/pulover.jpg'"
    top
    width="100%"
    />
    <CardBody>
    <CardTitle tag="h5">
        Pulover
    </CardTitle>
    <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
    >
        $6000
    </CardSubtitle>
    <CardText>
        Pulovers para este invierno en promocion
    </CardText>
    <Button>
        Comprar
    </Button>
    </CardBody>
</Card>
</CardGroup>
}
export default ItemListContainer;