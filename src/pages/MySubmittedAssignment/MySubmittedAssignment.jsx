import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
// import { Link } from "react-router-dom";

const MySubmittedAssignment = () => {
    const { user } = useAuth();
    const [mySubmittedAssin, setMySubmittedAssign] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(user.email);

    useEffect(() => {
        fetch(`https://project-server-side-eight.vercel.app/submitted_assignmentsByEmail/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMySubmittedAssign(data);
                setLoading(false);
            })
    }, [user.email])

    if (loading) {
        return <p>Wait...</p>
    }


    return (
        <div className="w-[92%] md:w-[70%] mx-auto my-12 rounded-lg">
            <h2 className="text-4xl font-bold text-center mb-12">My Assignments</h2>
            <div className="grid grid-cols-1 gap-6">
                {
                    mySubmittedAssin.map(assign => (
                        <div key={assign._id} className="flex flex-col md:h-[250px] md:flex-row border shadow-2xl">
                            <img className="w-full md:w-[40%] object-cover" src={assign.image} alt="" />
                            <div className="w-full md:w-[60%] p-4 flex flex-col">
                                <h2 className="text-lg font-bold mb-6">{assign.title}</h2>
                                <div className="flex flex-col gap-1 font-bold mb-2">
                                    <span className="text-sm">Marks: <span className="text-green-700">{assign.marks}</span></span>
                                    <div className="flex gap-4">
                                        <span>Level: <span className="text-red-500">{assign.difficulty_level}</span></span>
                                        <span>status: <span className="text-teal-500">{assign.status}</span></span>
                                    </div>
                                </div>
                                <div>
                                    {assign.status === 'completed' ? (
                                        <div>
                                            <h3 className="text-lg font-bold mb-2">Obtained marks: <span className="text-green-400">{assign.marks}</span></h3>
                                            <p>{assign.quickNote.slice(0, 150)}</p>
                                        </div>
                                    ) : <></>}
                                </div>

                                {/* <div className="flex gap-4 font-bold mb-2">
                                    <span className="text-sm">Marks: <span className="text-green-700">{assign.marks}</span></span>
                                    <span className="text-sm">Level: <span className="text-red-500">{assign.difficulty_level}</span></span>
                                    <span className="text-sm">status: <span className="text-teal-500">{assign.status}</span></span>
                                </div> */}
                                {/* <div className="flex-grow">
                                    {
                                        assign.description.length > 70 ?
                                            <p className="text-[#626262]">{assign.description.slice(0, 70)} <span className="text-red-500">see more</span></p>
                                            : <p>{assign.description}</p>
                                    }
                                </div> */}
                                {/* <div className="flex gap-3 mt-4">
                                    <Link to={`/view_details/${assign._id}`}>
                                        <button className="btn btn-sm bg-gray-700 text-white">View</button>
                                    </Link>
                                    <Link to={`/update_assignment/${assign._id}`}>
                                        <button className="btn btn-sm bg-yellow-400">Update</button>
                                    </Link>
                                    <button className="btn btn-sm bg-red-600 text-white">Delete</button>
                                </div> */}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>







    );
};

export default MySubmittedAssignment;