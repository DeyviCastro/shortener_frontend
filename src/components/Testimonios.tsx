

export const Testimonios = () => {
    return (
        <section className="py-20 max-w-[85rem] mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Confiado por negocios y usuarios</h2>
                <p className="mt-3 text-gray-400">
                    Nuestro acortador ayuda a miles de personas a compartir y medir enlaces de manera rápida y segura.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                    {
                        quote:
                            "Con este acortador puedo organizar mis enlaces de campañas y medir clics fácilmente. Es indispensable.",
                        name: "Andrea Gómez",
                        role: "Marketing Digital | Startup",
                        img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
                    },
                    {
                        quote:
                            "Lo uso para compartir enlaces en redes sociales y me encanta personalizarlos con mi marca.",
                        name: "Luis Fernández",
                        role: "Community Manager | Agencia Creativa",
                        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
                    },
                    {
                        quote:
                            "Es rápido, seguro y me da estadísticas detalladas de cada enlace. Lo recomiendo 100%.",
                        name: "Marta Ruiz",
                        role: "Emprendedora | Usuaria feliz",
                        img: "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
                    },
                ].map((t, i) => (
                    <div
                        key={i}
                        className="bg-white dark:bg-neutral-800 text-gray-900 dark:text-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
                    >
                        <p className="italic">“{t.quote}”</p>
                        <div className="mt-4 flex items-center gap-3">
                            <img
                                src={t.img}
                                alt={t.name}
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <p className="font-semibold">{t.name}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
