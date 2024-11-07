

const Footer = ({ length }) =>{
    const date = new Date();

    return(
        <footer className="bg-teal-700 
        w-full  text-center text-white">
            {length} List {length === 0? "Item" : "Items"}
            <p className="text-xl">
         Copyright   &copy; {date.getFullYear()} All right reserved.
            </p>
            

        </footer>
    )
}
export default Footer