import React from 'react'
import {Link } from 'react-router-dom'
import axios from "axios"
import '../TODO/ToDo.css'

export default class RenderChild extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id:null,
            title: ""
        }
    }
   
    componentDidMount = () =>{

        console.log(this.props)

        axios({
            method: 'get',
            url: 'http://localhost:3000/tasks/' + this.props.match.params.id
        })
        .then((res)=>{
            console.log(res)
            this.setState({
                title : res.data.title,
                id: res.data.id
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    handleChange = (e) =>{
       this.setState({
           title: e.target.value
       })
    }
    handleClick = (e) => {
        console.log( " clicked"+e.target.name)
        if(e.target.name === "update"){
            // let payload = {
            //     id: this.state.id,
            //     title: this.state.title
            // }
            axios({
                method: 'patch',
                url: 'http://localhost:3000/tasks/' + this.props.match.params.id,
                data:{ id : this.state.id , title:this.state.title},
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    } 
            })
            .then((res)=>{
              this.setState({
                  title:res.data.title
              })
            })
            .catch((err)=>{
                console.log(err)
            })
        }
            // fetch("http://localhost:3000/tasks/" + this.props.match.params.id.toString(), {
            //     method: "PATCH",
            //     body: JSON.stringify(payload),
            //     headers: {
            //     'Content-Type': 'application/json'
            //     },

            //     })
            //     .then(res => res.json())
            //     .then(res => this.setState({ "title": res['title'] }))
            //     .catch(err => console.log('error', err)) 
            //             }
        else if(e.target.name === "delete"){
            axios({
                method: 'delete',
                url: 'http://localhost:3000/tasks/' + this.props.match.params.id
            })
            .then((res)=>{
              this.props.history.push('/')
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }


    render(){

        return(
            <div>
                <div class="item">
                    <h2>Title</h2>
                    <input value={this.state.title} onChange={this.handleChange}  />
                    <button style={{margin:"3px"}} name="update" onClick={this.handleClick}>Update</button>
                    <button name="delete" onClick={this.handleClick}>delete</button>
                  
                </div>
            </div>
        )
    }
    
}