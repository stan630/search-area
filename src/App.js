import {useState} from "react"
import Data from './Data.json'

export default function App () {
    const [query, setQuery] = useState("")
    
    return (
        <div className="flex flex-col justify-center items-center">
            <input placeholder="Enter seach here" onChange={event => setQuery(event.target.value)
            }/>
        
            {
                Data.filter(post => {
                    if (query === '') {
                        return post
                    } else if (post.first_name.toLowerCase().includes(query.toLocaleLowerCase())) {
                       return post
                    }
                }).map((post, index) => (
                <div className="border-2 border-black  w-64 text-center rounded-md m-3 p-2" key={index}>
                    <p>{post.first_name}</p>
                    <p>{post.last_name}</p>
                    <p>{post.email}</p>
                    <p>{post.gender}</p>
                </div>
                ))
            }
        </div>
    )
}
            
        
        
    
    

 