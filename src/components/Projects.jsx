import Website from "./Website";

export default function Projects() {
    return (
        <section>
            <div class="container px-4 py-5">
                <h2 class="pb-2 ">PROJECTS</h2>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3 py-5">
                    <Website />
                    <Website />
                    <Website />
                    <Website />
                </div>
            </div>
            <div class="d-flex justify-content-center  align-items-center">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-light">See more</button>
                </div>
            </div>
        </section>
    )
}