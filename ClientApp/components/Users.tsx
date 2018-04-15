import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import { IUser } from '../models/user';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


interface UsersState {
    users: IUser[];
    loading: boolean;
}

export class Users extends React.Component<RouteComponentProps<{}>, UsersState> {
    constructor() {
        super();
        this.state = { users: [], loading: true };

        axios
            .get(`api/user`)
            .then(response => {
                this.setState({ users: response.data, loading: false });
            });
    }

    public render() {
        let usersContent = this.state.loading
            ? <p><em>Loading...</em></p>
            : Users.renderUsersTable(this.state.users);

        return <div>
            <h2>
                <span>Users</span>
                <NavLink className="btn btn-sm btn-success pull-right" to={'/user'}><span className="glyphicon glyphicon-plus"></span> <span>Add New User</span></NavLink>
            </h2>
            {usersContent}
        </div>;
    }

    private static renderUsersTable(users: IUser[]) {
        return <table className="table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user =>
                            <tr key={user.id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>
                                    <NavLink className="btn btn-sm btn-primary" to={`user/${user.id}`}>Select</NavLink>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>;

        //<table className='table'>
        //    <thead>
        //        <tr>
        //            <th>Date</th>
        //            <th>Temp. (C)</th>
        //            <th>Temp. (F)</th>
        //            <th>Summary</th>
        //        </tr>
        //    </thead>
        //    <tbody>
        //        {forecasts.map(forecast =>
        //            <tr key={forecast.dateFormatted}>
        //                <td>{forecast.dateFormatted}</td>
        //                <td>{forecast.temperatureC}</td>
        //                <td>{forecast.temperatureF}</td>
        //                <td>{forecast.summary}</td>
        //            </tr>
        //        )}
        //    </tbody>
        //</table>;
    }
}
