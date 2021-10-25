const Music = ({ boom }) => {
    return ( 
       <div>
           {boom.fields.category == "music" ? <h3> {boom.fields.opinion}</h3> : null }
       </div>
   )
 }
 
export default Music