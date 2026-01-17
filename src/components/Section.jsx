export default function Section({ id, children, title }) {

    return (
        <section id={id} className="flex flex-col justify-center items-center py-16 space-y-12">
            <div>
                <h2 className="text-2xl">
                    {title}
                </h2>
            </div>
            <div className="flex flex-col justify-center items-center">
                {children}
            </div>
        </section>
    )

}