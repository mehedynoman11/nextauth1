
const Footer = () => {
  return (
    <footer>
        <div className="bg-slate-100 p-10 mt-6 flex flex-col justify-center items-center">
            <h3>&copy;{ new Date().getFullYear() }&nbsp;All Right Reserved.</h3>
            <p>Developed By <span className="text-red-500">ArenaDev</span></p>
        </div>
    </footer>
  )
}

export default Footer