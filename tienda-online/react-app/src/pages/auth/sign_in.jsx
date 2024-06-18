import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignInPage = ()=>{
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e)=>{

        try{

            e.preventDefault();

            let data = {
                email:email,
                password:password
            }

            sessionStorage.setItem("SESSION",JSON.stringify(data));

            console.log(data);
            return navigate("/");

        }catch(Err){

            alert("ha ocurrido un error");
            console.log(Err);

        }

    }

    return(
        <div className="col-1 col align-center justify-center">

            <form className="row gap-2" onSubmit={handleSubmit}>
                <h1>Login</h1>

                <section className="col-1">
                    <input type="email" name="email" placeholder="Correo" className="p-1 w-full input-forms p-1 shadow-2" onChange={e=>setEmail(e.target.value)}/>
                </section>

                <section>
                    <input type="password" name="password" placeholder="Contraseña" className="p-1 w-full br-2 input-forms p-1 shadow-2" onChange={e=>setPassword(e.target.value)} />
                </section>

                <section>
                    <button type="submit" className="p-2 btn btn-primary br-2" role="send images" >Enviar</button>
                </section>

            </form>
        </div>
    )
}