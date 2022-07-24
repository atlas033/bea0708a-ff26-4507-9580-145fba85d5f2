import App from "./App";
import Async from "react-async"

export default function Root(){ 

  const loadData = async () => {
    const sourceUrl = "https://tlv-events-app.herokuapp.com/events/uk/london"
    const res = await fetch(sourceUrl);
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
  }
  
  return (
  <Async promiseFn={loadData} >
    {({ data, error, isPending }) => {
      if (isPending) return "Loading..."
      if (error) return `Something went wrong: ${error.message}`
      if (data)
        return (
          <App fetchedData={data}/>
        )
      return null
    }}
  </Async>
)
  }