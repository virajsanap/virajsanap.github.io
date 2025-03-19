import { useState } from 'react'
// import Url from '../components/Url'

function Resume() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <div className="mb-4">
        { isLoading ? <p>Loading... 🔎</p> : <p>In all its black-and-white glory.</p> }
      </div>
      <iframe src="https://drive.google.com/file/d/1PyFGMVNmGntlhdv_xjEI2CAssq6b7x_L/preview" width="640" height="850" allow="autoplay" onLoad={() => setIsLoading(false)} />
    </>
  );
}

export default Resume