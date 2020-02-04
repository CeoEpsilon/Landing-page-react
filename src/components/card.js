import React from 'react';
import './Card.css';
import PropTypes from "prop-types";

function Card(props) {
    return (
        <div className="row" id="cardDiv">
            <div className="col-3">
                <div className="card" >
                    <img src={props.imgLink} alt="html5-640x960" border="0" className="card-img-top"></img>
                    <div className="card-body p-0">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <div className="btnDiv">
                            <a target='blank' href={props.url} className="btn btn-primary">{props.link}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    imgLink: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    url: PropTypes.string,
    link: PropTypes.string
};

export default Card;
/*return (
    <div className="row" id="cardDiv">
        <div className="col-3">
            <div className="card" >
                <img src="https://i.ibb.co/kXDpf91/html5-640x960.jpg" alt="html5-640x960" border="0" className="card-img-top"></img>
                <div className="card-body p-0">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="btnDiv">
                        <a href="www.loquesea.com" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div >
                <div className="card" >
                    <img src="https://i.ibb.co/FhQjL8G/CSS.jpg" alt="CSS" border="0" className="card-img-top"></img>
                    <div className="card-body p-0">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="btnDiv">
                            <a href="www.loquesea.com" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" >
                <img src="https://i.ibb.co/72FRzmT/js-icon-26.png" alt="js-icon-26" border="0" className="card-img-top"></img>
                <div className="card-body p-0">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="btnDiv">
                        <a href="www.loquesea.com" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" >
                <img src="https://i.ibb.co/my3LKgx/react-2.png" alt="react-2" border="0" className="card-img-top"></img>
                <div className="card-body p-0">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="btnDiv">
                        <a href="www.loquesea.com" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}*/
