import Image from "next/image";
function Header() {
    return (
        <header className="">
            <h1>This is the header</h1>
            {/* Lazy loaded by default */}
            <Image src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
                width={200}
                height={100} />
        </header>
    )
}

export default Header