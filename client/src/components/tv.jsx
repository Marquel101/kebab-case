const TV = ({ boom }) => {
    return ( 
       <div>
           {boom.fields.category == "tv" ? <h3> {boom.fields.opinion}</h3> : null }
       </div>
   )
 }
 
export default TV