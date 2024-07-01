import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";

// react toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { createNewUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        // create user
        createNewUser(email, password)
        .then(() => {
            updateUserProfile(name, photo);
            toast.success('Registration successfully complete');
            navigate('/');
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div className="w-[90%] md:w-[35%] mx-auto py-16">
            <h2 className="text-center text-4xl font-bold mb-6">Register Here</h2>
            <div className="bg-[#e0dbd8] rounded-lg">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                    </div>
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter your photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6 mb-4">
                        <button className="btn bg-gray-600 text-white">Register</button>
                    </div>

                    <p>Already have an account ? <Link className="text-gray-800 font-bold" to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;