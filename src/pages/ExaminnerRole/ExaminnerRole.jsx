import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";


const ExaminnerRole = () => {
    const data = useLoaderData();
    const status = 'pending';
    const {user} = useAuth();
    const {_id, title, file, quickNote, marks} = data;
    console.log(data);
    
    const handleExaminnerRole = event => {
        event.preventDefault();
        const form = event.target;
        const examinnerFeedback = form.feedback.value;

        const updatedStatus = {status: 'completed', quickNote: examinnerFeedback}

        fetch(`https://project-server-side-eight.vercel.app/submitted_assignmentsByStatus/${status}/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedStatus)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Marked by Examinner complete',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
                //   .then(() => {
                //     // redirect to the assignment page after updating
                //     navigate('/assignments');
                //   })
            }
        })

    }

    return (
        <div className="w-[90%] md:w-[60%] mx-auto py-16">
            <h2 className="text-center text-4xl font-bold mb-6">Examinner Role</h2>
            <div className="bg-[#e0dbd8] rounded-lg">
                <form onSubmit={handleExaminnerRole} className="card-body md:space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold">Examiner Name: <span className="text-red-500">{user.displayName}</span></h2>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Assignment Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Enter assignment title" className="input input-bordered font-bold" defaultValue={title} readOnly />
                    </div>
                    <div>
                        <p className="text-[0000F7]"><span className="text-lg font-bold">File link:</span><span className="text-red-500 ml-2"><Link className="" to={file}>{file}</Link></span></p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Assignment Marks</span>
                            </label>
                            <input type="text" name="marks" className="input input-bordered font-bold" defaultValue={marks} readOnly />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Marks by Examiner</span>
                            </label>
                            <input type="text" name="marks" placeholder="Give mark what " className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Quick Note by Examinne</span>
                        </label>
                        <textarea name="quickNote" className="rounded-lg p-4" defaultValue={quickNote} id="" cols="30" rows="10" readOnly></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Examiner Feedback</span>
                        </label>
                        <textarea name="feedback" className="rounded-lg p-4" placeholder="Examinner feedback" id="" cols="30" rows="10"></textarea>
                    </div>
                    {/* <div className="form-control">
                        <input type="file" name="file" className="file-input w-full max-w-xs" />
                    </div> */}
                    <div className="form-control mt-6">
                        <button className="btn bg-gray-700 text-white">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ExaminnerRole;