import React from 'react';
import { Person } from '../models/Person';

const ListItem = ({ item }: { item: Person}) => (
    <li>
    <div>{item.id}</div>
    <div>{item.firstname}</div>
    <div>{item.lastname}</div>
    <div>{item.year}</div>
    </li>
);

export default ListItem;
