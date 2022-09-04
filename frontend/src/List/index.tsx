import React from 'react';
import ListItem from '../ListItem';
import { Person } from '../models/Person';

const List = ({ list }: { list: Array<Person>}) => (
    <ul>
    {list.map((item: Person) => (
        <ListItem key={item.id} item={item} />
    ))}
    </ul>
);

export default List;
