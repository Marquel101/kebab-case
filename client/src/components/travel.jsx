const Travel = ({ boom }) => {
    return ( 
       <div>
           {boom.fields.category === "travel" ? <h3> {boom.fields.opinion}</h3> : null }
       </div>
   )
 }
 
export default Travel