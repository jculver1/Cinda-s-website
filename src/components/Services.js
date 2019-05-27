import React from 'react'
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const Services = () => {
    return(
        <div>
           <Admin dataProvider={dataProvider} />
        </div>
    )
}

export default Services 