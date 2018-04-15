import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                        <NavLink to={'/'} className="navbar-brand">
                            <span>AspNetCoreReactTsPOC</span>
                        </NavLink>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li>
                            <NavLink to={'/users'}>
                                <span className="'glyphicon glyphicon-user'"></span> Users
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/roles'}>
                                <span className="'glyphicon glyphicon-list'"></span> Roles
                            </NavLink>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" className="divider"></li>
                                <li><a href="#">Separated link</a></li>
                                <li role="separator" className="divider"></li>
                                <li><a href="#">One more separated link</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a>Krishna Veeramachaneni</a></li>
                    </ul>
                </div>
            </div>
        </nav>;



        //<div className='main-nav'>
        //        <div className='navbar navbar-inverse'>
        //        <div className='navbar-header'>
        //            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
        //                <span className='sr-only'>Toggle navigation</span>
        //                <span className='icon-bar'></span>
        //                <span className='icon-bar'></span>
        //                <span className='icon-bar'></span>
        //            </button>
        //            <Link className='navbar-brand' to={ '/' }>AspNetCoreReactTsPOC</Link>
        //        </div>
        //        <div className='clearfix'></div>
        //        <div className='navbar-collapse collapse'>
        //            <ul className='nav navbar-nav'>
        //                <li>
        //                    <NavLink to={ '/' } exact activeClassName='active'>
        //                        <span className='glyphicon glyphicon-home'></span> Home
        //                    </NavLink>
        //                </li>
        //                <li>
        //                    <NavLink to={ '/counter' } activeClassName='active'>
        //                        <span className='glyphicon glyphicon-education'></span> Counter
        //                    </NavLink>
        //                </li>
        //                <li>
        //                    <NavLink to={ '/fetchdata' } activeClassName='active'>
        //                        <span className='glyphicon glyphicon-th-list'></span> Fetch data
        //                    </NavLink>
        //                </li>
        //            </ul>
        //        </div>
        //    </div>
        //</div>;
    }
}
