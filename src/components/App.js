import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import BookContextProvider from '../imports/contexts/BookContext';
import Navbar from '../imports/components/Navbar';
import BookList from '../imports/components/BookList';
import NewBookForm from '../imports/components/NewBookForm';
import '../index.css/'

const Datastore = require('nedb');
const database = new Datastore('database.db');
database.loadDatabase()

class App extends Component {

    render() { 
        return (
            <div> 
                <BookContextProvider>
                    <Navbar></Navbar>
                    <NewBookForm></NewBookForm>
                </BookContextProvider>
            </div>   
        );
    }
}

export default App;

