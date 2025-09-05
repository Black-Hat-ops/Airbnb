import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className="min-h-screen md:max-h-full bg-gray-200 items-center justify-center px-5 md:px-2  flex">
                <form action="" className="  w-full md:max-w-4xl bg-white p-8 md:p-20 rounded-lg shadow-lg ">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-center md:text-4xl md:mb-10 border-gray-200 border-b-2 pb-10  ">Login</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-2 md:mb-5 ">
                            <input type="text" name="" id="" placeholder="Email" className=" w-full border-1 rounded-md py-2 px-3 md:px-2 md:w-full" />
                            <input type="password" name="" id="" placeholder="Password" className=" w-full border-1 rounded-md py-2 px-3 md:px-2 md:w-full" />
                        </div>

                        <div>
                            <button type="submit" className="bg-red-400 w-full text-white rounded-md p-2 hover:bg-red-500 mt-4 md:px-2 md:w-full">Sign Up</button>
                            <p className="mt-5 border-t-2 text-sm md:text-base border-gray-200 pt-4">If you already have an account, <Link to={'/signup'} className="text-red-500">Sign up</Link>.</p>
                        </div>
                    </div>
                </form>
            </div>



        </>

    )
}

export default Login;