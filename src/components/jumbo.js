import React from 'react';
import './jumbo.css';

function Jumbo() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">A Warm Welcome</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
            <hr className="my-4"/>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="/#" role="button">Learn more</a>
                </p>
        </div>
            );
        }
    
export default Jumbo;