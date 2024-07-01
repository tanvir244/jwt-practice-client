import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";

// react toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const {login} = useAuth();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // login
        login(email, password)
        .then(result => {
            console.log(result.user);
            toast.success('Login successfull');
            // form reset after login
            form.reset();
        })
        .catch(error => console.log(error.message));

    }

    return (
        <div className="w-[90%] md:w-[35%] mx-auto py-16">
            <h2 className="text-center text-4xl font-bold mb-6">Login Now</h2>
            <div className="bg-[#e0dbd8] rounded-lg">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6 mb-4">
                        <button className="btn bg-gray-600 text-white">Login</button>
                    </div>

                    <p>Dont have an account ? <Link className="text-gray-800 font-bold" to="/register">Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;