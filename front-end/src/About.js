import { useState, useEffect } from 'react'
import axios from 'axios'
import './About.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
const [about, setAbout] = useState(null)
const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
      .then(response => {
        setAbout(response.data)
      })
      .catch(err => {
        const errMsg = JSON.stringify(err, null, 2) // convert error object to a string so we can simply dump it to the screen
        setError(errMsg)
      })
  }, [])

  if (error) return <p className="MessageForm-error">{error}</p>;
  if (!about) return <p>No data found, loading...</p>;
  
  return (
    <>
      <h1>About Us</h1>
      <img 
        src={about.imageUrl} 
        alt={about.name}
        style={{
          width: '250px',
          height: '250px',
          objectFit: 'scale-down',
          borderRadius: '10px'
        }}
      />
      <h2>{about.name}</h2>
      {about.description.map((description, i) => (
        <p key={i}>{description}</p>
      ))}
      {error && <p className="MessageForm-error">{error}</p>}
    </>
  )
}

// make this component available to be imported into any other file
export default About
