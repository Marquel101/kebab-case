const Society = ({ boom }) => {
    return ( 
       <div>
           {boom.fields.category === "society" ? <h3> {boom.fields.opinion}</h3> : null }
       </div>
   )
 }
 
export default Society