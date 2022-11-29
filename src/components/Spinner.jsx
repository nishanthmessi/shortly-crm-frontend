import spinner from '../img/spinner.gif'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-screen -mt-14'>
      <img width={180} className="text-center mx-auto" src={spinner} alt="loading..." />
    </div>
  )
}

export default Spinner