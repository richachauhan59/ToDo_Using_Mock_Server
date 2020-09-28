import React from 'react'
import axios from "axios"
import './ToDo.css'
import RenderChild from '../Components/RenderChild'
import {Link } from 'react-router-dom'

export default class ToDo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value: "",
            tasks: []
        }
    }

    handleChange = (e) =>{
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }


    GetAxios = () =>{
        axios({
            method: 'get',
            url: 'http://localhost:3000/tasks'
        })
        .then((res)=>{
            this.setState({
                tasks:res.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    componentDidMount(){
        this.GetAxios()
    }

    addToDo = () => {
        const { value } = this.state
        let data = {
            title : value,
            status : false
        }

        axios({
            method: 'post',
            url: 'http://localhost:3000/tasks',
            data: data
        })
        .then(res => {
            this.GetAxios()
            this.setState(prevState => ({
            tasks: [...prevState.tasks, res],
        }))
    }
        )
        .catch((err)=>{
            console.log(err)
        })
    }

    
    render(){
        const {value, tasks } = this.state
        return(
            <div style={{backgroundImage:"url('https://previews.123rf.com/images/jeastphoto/jeastphoto1001/jeastphoto100100005/6319095-white-paper-to-do-list-pinned-to-a-cork-board-background-.jpg')",
             height:"700px",
             width:"800px",
             marginLeft:"27%",
             backgroundRepeat:"no-repeat",
             backgroundSize:"cover",
             backgroundPosition:"center"
             }}>
                <div style={{padding:"5%"}}>
                    <input
                    class="to-do"
                     value={value}
                     name="value" 
                     onChange={this.handleChange}
                     placeholder="Add Something"
                     />
                     <button class="to-do-button" onClick={this.addToDo}>Add Task</button>
                </div>
                <div>
                    {
                        tasks?.map((item , index)=> (
                            <div>
                                <Link to={`tasks/${item.id}`}> <div class="items">
                                {item.title}
                                    </div></Link>
                            </div>
                          
                        ))
                    }
                </div>
            </div>
        )
    }
}