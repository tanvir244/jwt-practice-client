import { useEffect, useState } from "react";
// import useAuth from "../../hook/useAuth";
import { Link } from "react-router-dom";

const PendingAssignments = () => {
    // const {user} = useAuth();
    const status = "pending";
    const [mySubmittedAssin, setMySubmittedAssign] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://project-server-side-eight.vercel.app/submitted_assignmentsByStatus/${status}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMySubmittedAssign(data);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <p>Wait...</p>
    }


    return (
        <div className="w-[92%] md:w-[85%] mx-auto my-12 rounded-lg">
            <h2 className="text-4xl font-bold text-center mb-12">Pending Assignments</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    mySubmittedAssin.map(assign => (
                        <div key={assign._id} className="flex flex-col md:h-[220px] md:flex-row border shadow-2xl">
                            <img className="w-full md:w-[40%] object-cover" src={assign.image} alt="" />
                            <div className="w-full md:w-[60%] p-4 flex flex-col">
                                <h2 className="text-lg font-bold mb-4">{assign.title}</h2>
                                <div className="flex flex-col gap-1 font-bold mb-2">
                                    <span className="text-base text-red-500">Examinee Name: <span className="text-black">{assign.examineeName}</span></span>
                                    <div className="flex gap-4">
                                        <span className="text-base">Marks: <span className="text-green-700">{assign.marks}</span></span>
                                        <span className="text-base">level: <span className="text-yellow-400">{assign.difficulty_level}</span></span>
                                    </div>
                                </div>
                                <div className="flex gap-3 mt-3">
                                    <Link to={`/examinner_role/${assign.status}/${assign._id}`}>
                                        <button className="btn bg-[#f7cb73] text-black font-bold px-8">Give Mark</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PendingAssignments;