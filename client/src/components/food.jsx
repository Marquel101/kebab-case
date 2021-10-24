const Food = (opinion) => {
   return (
      <div key={opinion._id}>
          <li>{opinion.opinion}</li>
      </div>
  )
}
export default Food