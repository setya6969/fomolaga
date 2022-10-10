import './_app'
import 'tailwindcss/tailwind.css'

export default function login(){
    return(
       <>
            <div className='bg-orange-500 h-screen flex items-center justify-center px-2 py-24 md:px-96 md:py-20'>
                <div className="register-container px-4 md:px-16 bg-white rounded-2xl sm:w-96">
                    <img className=" pt-10 px-28 md:px-48 md:pt-14" src='/Group 30.png'></img>
                    <div className=' pt-14'>
                        <p className=' uppercase font-bold text-2xl'>Masuk.</p>
                        <p className=' pt-2'>Silahkan melengkapi form dibawah untuk menggunakan </p>
                    </div>
                    <form action='#' method='POST'>
                        <div className=' mt-5'>
                            <label for='email'>Email</label><br />
                            <input type='text' name='email' id='email'></input>
                        </div>
                        <div className=' mt-5'>
                            <label for='password'>Password</label><br />
                            <input type='text' name='password' id='password'></input>
                        </div>
                        <button type='sumbit' className='text-xl'>Masuk</button>
                    </form>
                    <div className=' text-center py-10'>
                        Belum punya akun ?<a href='#' className=' pl-1 font-bold text-orange-400'>Daftar</a>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .register-container{
                    width: 706px;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                }
                label{
                    font-weight: 500;
                }
                input{
                    width: 100%;
                    height: 50px;
                    border-radius: 4px;
                    border: 1px solid #BDBDBD;
                    margin-top: 8px;
                }

                button{
                    width: 100%;
                    background-color: #0E393A;
                    border-radius: 12px;
                    height: 50px;
                    color: white;
                    margin-top: 33px;
                }

                @media (min-width:700px){
                    button{
                        height: 76px;
                    }
                }
            `}   
            </style>
       </> 
    )
}