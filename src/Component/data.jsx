import {} from 'react'
import Fetch from '../Custom/useFetch'   
function data() {
    const {data} = Fetch('https://jsonplaceholder.typicode.com/posts')
    console.log(data)
  return (
   <>
   </>
  )
}

export default data