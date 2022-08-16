import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline"

function Header() {
    return (
        <header className="">
            <div>
                <HeaderItem title='HOME' Icon={HomeIcon}
                />
            </div>
            {/* Lazy loaded by default */}
            <Image
                className="object-contain"
                src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
                width={200}
                height={100} />
        </header>
    )
}

export default Header