import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import { IUser } from '../models/user';
import { NavLink } from 'react-router-dom';
import { FormEvent } from 'react';
import axios from 'axios';


interface UserState {
    user: IUser;
    loading?: boolean;
}

export class User extends React.Component<RouteComponentProps<any>, UserState> {

    onUserInputChangeHandler: React.FormEventHandler<HTMLInputElement>;
    onSaveUserClickedHandler: React.FormEventHandler<HTMLButtonElement>;

    constructor(props: RouteComponentProps<any>) {
        super(props);

        var userData: any = {};
        const userId = this.props.match.params.id;

        this.state = { user: userData, loading: userId > 0 };

        if (userId) {
            axios.get(`api/User/${userId}`)
                .then(response => {
                    this.setState({ user: response.data, loading: false });
                });
        }

        this.onSaveUserClickedHandler = this.onSaveUserClicked.bind(this);
        this.onUserInputChangeHandler = this.onUserInputChanged.bind(this);
    }

    public render(): JSX.Element {
        let userContent = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.createUserForm();

        const header = this.getUserHeader(this.state.user);

        return (<div>
            <h2>
                {header}
                <NavLink className="btn btn-sm btn-success pull-right" to={'/users'}> <span className="glyphicon glyphicon-arrow-left"></span> <span>Go to Users</span></NavLink>
            </h2>
            {userContent}
        </div>);
    }

    public getUserHeader(user: IUser): JSX.Element {
        if (user.id != 0) {
            return <span>Edit User</span>
        } else {
            return <span>New User</span>
        }
    }

    // Reusable change event handler for Use data change
    public onUserInputChanged(event: React.FormEvent<HTMLInputElement>): void {

        var target: any = event.target;

        // Since react does not allow setting state on a nested object, 
        //we have to create a clone of the object and reset the whole object
        var currentUser: any = { ...this.state.user }
        currentUser[target.name] = target.value;
        this.setState({ user: currentUser });
    }

    public onSaveUserClicked(event: React.FormEvent<HTMLButtonElement>): void {
        axios
            .post(`api/user`, this.state.user)
            .then(response => alert(`Successfully saved data for ${response.data.firstName} - ${response.data.lastName}`))
            .catch(() => alert('Something went wrong :('));
    }

    private createUserForm() {
        return <div>

            <div className="space-5"></div>

            <form className="form-horizontal">
                <div className="form-group">
                    <label className="col-sm-2 control-label">First Name</label>
                    <div className="col-sm-6">
                        <input className="form-control" name="firstName" value={this.state.user.firstName} onChange={this.onUserInputChangeHandler} placeholder="first name" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Last Name</label>
                    <div className="col-sm-6">
                        <input className="form-control" name="lastName" value={this.state.user.lastName} onChange={this.onUserInputChangeHandler} placeholder="last name" />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="button" className="btn btn-primary" onClick={this.onSaveUserClickedHandler}>Save</button>
                    </div>
                </div>
            </form>

        </div>;
    }
}
