// These components will be making separate API calls from the app
// component to serve specific data about a given album
import { useState } from 'react'
import { useParams } from 'react-router-dom'


const AlbumView = () => {
    const { id } = useParams()
    const [ albumData, setalbumData ] = useState([])

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Album Data Goes Here!</p>
        </div>
    )
}

export default AlbumView