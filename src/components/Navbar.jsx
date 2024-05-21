export default function Navbar() {
    return (
        <section>
            <header class="p-3">
                <div class="container">
                    <div
                        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
                    >
                        <ul
                            class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
                        >
                            <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
                            <li>
                                <a href="#" class="nav-link px-2 text-white">Skills</a>
                            </li>
                            <li><a href="#" class="nav-link px-2 text-white">Projects</a></li>
                            <li><a href="#" class="nav-link px-2 text-white">About</a></li>
                            <li><a href="#" class="nav-link px-2 text-white">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </section>
    )
}