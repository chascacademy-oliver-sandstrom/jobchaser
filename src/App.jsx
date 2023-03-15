import * as React from 'react'
import './css/App.css'

function App() {

  

  return (
    <div className="App">
      <h1>Jobchaser</h1>
      <JobList />
    </div>
  )
}



//Complete list of jobs
function JobList() {  

  const [jobData, setJobData] = React.useState([]);

  React.useEffect(() => {

      async function getData() {
        const response = await fetch("./src/data/data.json")
        .then((response) => {
        return response.json()
        // let data = response.json()
        // console.log(data); 
        // setJobData(data);
      })
      .catch((error) => {
        console.error(error); 
      })

      setJobData(response); 
    }

    getData(); 
    
  }, [])

  console.log("Job data: ", jobData); 
  return(
    <ul>
      {jobData.map((data) => <JobItem data={data} /> )}
      
    </ul>
  )
}


//Separate job list items 
function JobItem(props) {
  return(
    <li>
      <h2 className="" >{props.data.company}</h2>
      <p>{props.data.description}</p>
      <p>{props.data.tags}</p>
    </li>
  )
}

export default App
