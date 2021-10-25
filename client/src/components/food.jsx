const Food = ({ boom }) => {
    return ( 
       <div>
           ({boom.fields.category == "food" ? <h3> {boom.fields.opinion}</h3> : null })
       </div>
   )
 }
 
export default Food