import { useState, useEffect } from "react"
import { Link } from "react-router-dom"



export const Aboutpage = () => {

    const styleLink = {
        textDecoration: 'none',
        color: 'black',
    }


    const [posts, setPosts] = useState([
        {
            id: '',
            name: '',
            username: '',
            email: '',
            address: {
                city: '',
                street: '',
                zipcode: ''
            }
        }
    ])

    console.log(posts)
    const [resources, setResources] = useState<string>('')

    useEffect(() => {
        console.log('render')
        fetch(`https://jsonplaceholder.typicode.com/${resources}/1`)
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [resources])



    return (
        <div>
            <div>
                <button onClick={() => { setResources('todos') }}>get todos</button>
                <button onClick={() => { setResources('posts') }}>posts</button>
                <button onClick={() => { setResources('users') }}>users</button>
            </div>
            <p>{
                posts.map(item =>
                    <p>{item.name}</p>
                )
            }</p>
            <h2>About page</h2>
            <span>Call us </span>
            <a style={styleLink} href="tel:+123456">+375291234567</a>
        </div>
    )
}