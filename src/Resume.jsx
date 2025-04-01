import { useState } from 'react'
// import Url from '../components/Url'

function Resume() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <div className="mb-4 flex justify-between items-center">
        <p>{isLoading ? "Loading... 🔎" : "In all its black-and-white glory."}</p>
        <a href="../public/Viraj_Feb_ML.pdf" download="Viraj_Resume.pdf" target="_blank">
          <button className="px-1 py-1 bg-orange-400">[Download Resume]</button>
        </a>
      </div>
      <iframe src="../Viraj_Feb_ML.pdf" width="640" height="850" onLoad={() => setIsLoading(false)} />
      {/* <iframe src="https://drive.google.com/file/d/1PyFGMVNmGntlhdv_xjEI2CAssq6b7x_L/preview" width="640" height="850" allow="autoplay" onLoad={() => setIsLoading(false)} /> */}
    </>
  );
}

export default Resume