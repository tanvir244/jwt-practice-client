import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Assignments = () => {
    const { user } = useAuth();
    const [createdAssign, setCreatedAssign] = useState([]);

    useEffect(() => {
        fetch('https://project-server-side-eight.vercel.app/create_assignments')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCreatedAssign(data);
            })
    }, [])

    const handleDelete = (email, id) => {
        if (user.email === email) {

            Swal.fire({
                title: "Are you sure you want to Remove?",
                text: "This blog will permanently remove",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#00000",
                confirmButtonText: "Yes, remove it!"
            }).then((result) => {
                if (result.isConfirmed) {

                    fetch(`https://project-server-side-eight.vercel.app/create_assignments/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Assignment has been deleted.",
                                    icon: "success"
                                });
                                const updateStateAfterDelete = createdAssign.filter(assin => assin._id !== id);
                                setCreatedAssign(updateStateAfterDelete);
                            }
                        })
                }
            });
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You didn't make the assignment, you can't delete it!",
            });
        }
    }


    return (
        <div className="w-[92%] md:w-[85%] mx-auto my-12 rounded-lg">
            <h2 className="text-4xl font-bold text-center mb-12">Assignments</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    createdAssign.map(assign => (
                        <div key={assign._id} className="flex flex-col md:h-[220px] md:flex-row border shadow-2xl">
                            <img className="w-full md:w-[40%] object-cover" src={assign.image} alt="" />
                            <div className="w-full md:w-[60%] p-4 flex flex-col">
                                <h2 className="text-lg font-bold mb-2">{assign.title}</h2>
                                <div className="flex gap-4 font-bold mb-2">
                                    <span className="text-sm">Marks: <span className="text-green-700">90</span></span>
                                    <span className="text-sm">Level: <span className="text-red-500">hard</span></span>
                                </div>
                                <div className="flex-grow">
                                    {
                                        assign.description.length > 50 ?
                                            <p className="text-[#626262]">{assign.description.slice(0, 50)} <span className="text-red-500">see more</span></p>
                                            : <p>{assign.description}</p>
                                    }
                                </div>
                                <div className="flex gap-3 mt-4">
                                    <Link to={`/view_details/${assign._id}`}>
                                        <button className="btn btn-sm bg-gray-700 text-white">View</button>
                                    </Link>
                                    <Link to={`/update_assignment/${assign._id}`}>
                                        <button className="btn btn-sm bg-yellow-400">Update</button>
                                    </Link>
                                    <button onClick={() => handleDelete(assign.creatorEmail, assign._id)} className="btn btn-sm bg-red-600 text-white">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Assignments;