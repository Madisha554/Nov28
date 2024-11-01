
const Header = ({ title}) =>{


    return(
        <header className="bg-teal-700 text-white sticky top-0 z-10">
            <section className="flex max-w-4xl mx-auto p-4 justify-between items-center">
                <h1 className="text-3xl font-medium">
                    {title}
                </h1>
                <div className="right-0">
                    <nav className="hidden md:block space-x-8 text-2xl sm:text-xl" aria-label="main">
                        <a href="#rockets" class="hover:opacity-90">Docs</a>
                        <a href="#testimonials" class="hover:opacity-90">About Us</a>
                        <a href="#testimonials" class="hover:opacity-90">Services</a>
                        <a href="#contact" class="hover:opacity-90">Contact Us</a>
                    </nav>
                </div>
            </section>
        </header>
    )
}
Header.default = {
    title: "Default Header!"
}


export default Header
