import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { useForm } from "react-hook-form";
import type { LoginForm } from "../types";
import { isAxiosError } from "axios";
import api from "../config/axios";
import { toast } from "sonner";

export const LoginView = () => {

    const navigate = useNavigate();

    const initialValues:LoginForm = {
        email: "",
        password: ""
    }

    const handleLogin= async (formData:LoginForm) => {

        try {
            const {data} = await api.post("/api/auth/login", formData)
            
            console.log(data)
            localStorage.setItem("token", data.token)
            navigate("/acortadorURL")
        } catch(error)  {
            if(isAxiosError(error) && error.response){
                toast.error(error.response.data.error)
            }
        }


    }
    const { register, handleSubmit ,formState:{errors} } = useForm({defaultValues: initialValues})

    return (
        <>
            <div className="max-w-md mx-auto ">
                <h1 className="text-4xl text-white font-semibold text-center">Iniciar Sesion</h1>

                <form
                    onSubmit={handleSubmit(handleLogin)}
                    className="bg-white px-5 py-20  space-y-10 mt-10"
                >

                    <div className="grid grid-cols-1 space-y-3">
                        <label htmlFor="email" className="text-2xl text-slate-500">E-mail</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email de Registro"
                            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                            {...register('email', {
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
                            {...register('password', {
                                required: "El password es obligatorio",
                                minLength: {
                                    value: 4,
                                    message: "El password debe tener al menos 4 caracteres"
                                }
                            })}
                        />
                        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

                    </div>


                    <input
                        type="submit"
                        className="bg-indigo-700 p-3 text-lg w-full uppercase text-white font-semibold cursor-pointer"
                        value='Inicar Sesion'
                    />
                    <button className="block mx-auto text-slate-400">
                        <Link to={"/auth/register"}>¿Aun no tienes una cuenta? Registrate</Link>
                    </button>
 
                </form>
            </div>
        </>
    )
}
