import React, { useState } from "react"

export default function Main (){
    const [comments,setComments ] = useState([
        {id:1, text:'i think that beatifull site',}
    ])
    return(
     <main>
       {comments.map((comments)=>
        <div className="comments" key={comments.id}>
           {comments.text}
        </div>
       )}
     </main>
    )
}