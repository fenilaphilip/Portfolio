export default function NavButton({ itemId, link, children }) {
    return (
        <li key={itemId}>
            <a href={link} className="nav-link px-2 text-white">
                {children}
            </a>
        </li>
    );
}