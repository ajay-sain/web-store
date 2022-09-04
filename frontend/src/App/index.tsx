import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Person } from '../models/Person';
import List from '../List';

const list: Array<Person> = [
  {
    id: 'a',
    firstname: 'Robin',
    lastname: 'Wieruch',
    year: 1988,
  },
  {
    id: 'b',
    firstname: 'Dave',
    lastname: 'Davidds',
    year: 1990,
  },
];

const App = () => <List list={list} />;

export default App;
