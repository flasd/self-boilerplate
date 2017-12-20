import React from 'react';
import { Route } from 'react-router';
import { HomeView } from './views';

export default function App() {
    return (
        <div>
            <Route path="/" exact component={HomeView} />
        </div>
    );
}
