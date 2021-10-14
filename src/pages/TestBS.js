// import React from 'react';
// import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Button, Alert} from react-bootstrap; 
// import { className } from 'postcss-selector-parser';

// function App(){
//     return(
//         <div className="">
//             <Button>This is Button</Button>
//         </div>
//     );
// }

// export default App;



import React from 'react';
import './Home.css';
import 'react-awesome-slider/dist/styles.css';

import { Button, Breadcrumb, Card } from 'react-bootstrap';
// import { Card } from '@material-ui/core';




function Home() {
	return (
		<div>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
			<Breadcrumb>
				<Breadcrumb.Item>Test</Breadcrumb.Item>
				<Breadcrumb.Item>Test1</Breadcrumb.Item>
				<Breadcrumb.Item>Test2</Breadcrumb.Item>
				<Breadcrumb.Item active>Test3</Breadcrumb.Item>
			</Breadcrumb>
			<Button>This is btn</Button>
		</div>
	);
}

export default Home;

