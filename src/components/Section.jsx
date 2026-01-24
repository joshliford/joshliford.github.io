export default function Section({ id, children, title }) {

    return (
        <section id={id} className="py-16 space-y-12 mb-40">
            <div>
                <h2 className="text-2xl font-semibold text-center text-slate-100">
                    {title}
                </h2>
            </div>
            <div className="flex flex-col justify-center items-center">
                {children}
            </div>
        </section>
    )

}