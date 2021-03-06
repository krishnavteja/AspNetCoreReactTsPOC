import * as React from 'react';
import { NavMenu } from './NavMenu';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div id="app" className="container-fluid">
            <div className="row">
                <NavMenu />
            </div>
            <div className="row">
                <div className="col-sm-12">
                    {this.props.children}
                </div>
            </div>
        </div>;

        //<div className='container-fluid'>
        //    <div className='row'>
        //        <div className='col-sm-3'>
        //            <NavMenu />
        //        </div>
        //        <div className='col-sm-9'>
        //            { this.props.children }
        //        </div>
        //    </div>
        //</div>;
    }
}
