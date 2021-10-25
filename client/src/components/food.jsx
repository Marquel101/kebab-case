const Food = ({ boom }) => {
    return (
        
       <div>
           ({boom.fields.category === "food" ? <h5> {boom.fields.opinion}</h5> : null})
       </div>
   )
 }
 
export default Food