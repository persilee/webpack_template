
import React from 'react';
import ReactDOM from 'react-dom';
import style from './main.css';
import 'font-awesome/css/font-awesome.css';
console.log({style});
ReactDOM.render(
    <div >
        <img src={require('./common/img/dogs.jpg')} alt=""/>
        <i className="fa fa-rocket"></i>
        <div className={style.ot}>
            <label>Holle webpack </label>
            <input type='text' name='test' /> 
        </div>
    </div>,
    document.getElementById('root')
);
