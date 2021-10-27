const Society = ({ boom }) => {
    return ( 
       <div>
           {boom.category === "society" ? <h3> {boom.opinion}</h3> : null }
       </div>
   )
 }
 
export default Society