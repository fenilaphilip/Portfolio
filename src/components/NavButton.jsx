export default function NavButton({ link, buttonName }) {
    return <li><a href={link} className="nav-link px-2 text-white">{buttonName}</a></li>
}