import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import type { RegisterForm } from "../types";
import { ErrorMessage } from "../components/ErrorMessage";
import { toast } from "sonner";
import api from "../config/axios";

export const RegisterView = () => {

    const navigate = useNavigate();

    const initialValues:RegisterForm = {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    }



    const { register, handleSubmit, watch ,formState:{errors} } = useForm({defaultValues: initialValues})
    
    const handleRegister = async(formData:RegisterForm) => {

        const {data} = await api.post("/auth/register", formData)
        toast.success(data)

        navigate("/auth/login")

    }

    return (
        <>
            <div className="max-w-md mx-auto ">
                <h1 className="text-4xl text-white font-semibold text-center">Registrarse</h1>
                <form
                    onSubmit={handleSubmit(handleRegister)}
                    className="bg-white px-5 py-20  space-y-10 mt-10"
                >
                    <div className="grid grid-cols-1 space-y-3">
                        <label htmlFor="name" className="text-2xl text-slate-500">Nombre</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Tu Nombre"
                            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                            {...register('name',{
                                required: "El nombre es obligatorio"
                            })}
                        />
                        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                    </div>
                    <div className="grid grid-cols-1 space-y-3">
                        <label htmlFor="email" className="text-2xl text-slate-500">E-mail</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email de Registro"
                            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                            {...register('email',{
                                required: "El email es obligatorio",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "El email no es válido"
                                }
                            })}
                        />
                        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

                    </div>

                    <div className="grid grid-cols-1 space-y-3">
                        <label htmlFor="password" className="text-2xl text-slate-500">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password de Registro"
                            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                            {...register('password',{
                                required: "El password es obligatorio",
                                minLength:{
                                    value:4,
                                    message:"El password debe tener al menos 4 caracteres"
                                }
                            })}
                        />
                        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

                    </div>

                    <div className="grid grid-cols-1 space-y-3">
                        <label htmlFor="password_confirmation" className="text-2xl text-slate-500">Repetir Password</label>
                        <input
                            id="password_confirmation"
                            type="password"
                            placeholder="Repetir Password"
                            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                            {...register('confirmPassword',{
                                required: "El password es obligatorio",
                                validate: (value) => value === watch('password') || "Las contraseñas no son iguales"
                            })}
                        />
                        {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}

                    </div>

                    <input
                        type="submit"
                        className="bg-indigo-700 p-3 text-lg w-full uppercase text-white font-semibold cursor-pointer"
                        value='Crear Cuenta'
                    />
                    <button className="block mx-auto text-slate-400">
                        <Link to={"/auth/login"}>¿Ya tienes una cuenta? Inicia sesion</Link>
                    </button>
                </form>
            </div>
        </>
    )
}
