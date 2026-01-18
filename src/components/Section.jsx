export default function Section({ id, children, title }) {

    return (
        <section id={id} className="flex flex-col justify-center py-16 space-y-12 mb-16">
            <div>
                <h2 className="text-2xl font-semibold text-center">
                    {title}
                </h2>
            </div>
            <div className="flex flex-col justify-center items-center">
                {children}
            </div>
        </section>
    )

}