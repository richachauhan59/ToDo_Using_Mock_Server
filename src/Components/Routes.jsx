
import React, { Component } from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import ToDo from '../TODO/ToDo'
import RenderChild from './RenderChild'
import '../TODO/ToDo.css'

export default class Routes extends Component {
    render() {
        return (
            <div>
                <div class="header" style={{
                border:"2px solid black",
                width:"47.6%",
                marginLeft: "27%",
                textAlign: "end",
                height: "50px",
                background:"#7C6C61"
            }}> 
                    <Link style={{margin:"20px 10px 5px 5px", color:"white"}} to='/'  > Home </Link>
                    <Link style={{margin:"10px", color:"white"}} to='/tasks/1'  > Items </Link>
                </div>
                <Switch>
                    <Route path='/' exact render = { () => <ToDo/> } />
                    <Route path='/tasks/:id' render = { (props) => <RenderChild {...props} /> } />
                </Switch>
            </div>
        )
    }
}
