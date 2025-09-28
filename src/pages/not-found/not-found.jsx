import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
	 <div className='text-center'>
		<h1>404 Not Found</h1>
		<p>
			Your visited page not found. You may go home page.
		</p>
		<Link to={'/'}>
		<button>Back to home page</button>
		</Link>
	 </div>
  )
}

export default NotFound
