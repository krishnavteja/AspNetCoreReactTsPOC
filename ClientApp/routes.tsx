import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { User } from './components/User';
import { Users } from './components/Users';


export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/user/:id?' component={User} />
    <Route path='/users' component={Users} />

</Layout>;
