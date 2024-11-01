

const Footer = ({ length }) =>{
    const date = new Date()


    return(
        <footer className="bg-teal-700 absolute
        w-full bottom-0 text-center text-white">
            {/* <p className="text-xl">
         Copyright   &copy; {date.getFullYear()} All right reserved.
            </p> */}
            {length} List {length === 0? "Item" : "Items"}
            

        </footer>
    )
}
export default Footer