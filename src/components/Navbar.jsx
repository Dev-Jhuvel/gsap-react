import { useGSAP } from "@gsap/react";
import { navLinks, appDetails } from "../../constants";
import gsap from "gsap";

const Navbar = () =>{
    useGSAP(()=>{
        const navTween = gsap.timeline({
            scrollTrigger: 'nav',
            start: 'bottom top',
        });

        navTween.fromTo('nav', 
        {
            backGroundColor: 'transparent',
        }, 
        {
            backgroundColor: '#000000050',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power.inOut',
        })
    }, []);
    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src={appDetails.logo} alt="logo" />
                    <p>{appDetails.name}</p>
                </a>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;