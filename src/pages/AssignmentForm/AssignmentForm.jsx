import Swal from "sweetalert2";
import useAuth from "../../hook/useAuth";
import { useLoaderData } from "react-router-dom";


const AssignmentForm = () => {
    const assinData = useLoaderData();
    const { user } = useAuth();
    console.log(assinData);
    const { difficulty_level, image, title, marks } = assinData;

    const handleAssignmentForm = event => {
        event.preventDefault();
        const form = event.target;
        const quickNote = form.quickNote.value;
        const file = form.file.value;
        console.log(quickNote, file);

        const submitAssign = { email: user.email, status: 'pending', title, marks, quickNote, file, image, difficulty_level, examineeName: user.displayName };

        fetch('https://project-server-side-eight.vercel.app/submitted_assignments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(submitAssign)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your assignment successfully submitted!',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            });
    }

    return (
        <div className="w-[90%] md:w-[60%] mx-auto py-16">
            <h2 className="text-center text-4xl font-bold mb-6">My Assignment</h2>
            <div className="bg-[#e0dbd8] rounded-lg">
                <form onSubmit={handleAssignmentForm} className="card-body md:space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold">My Name: <span className="text-red-500">{user.displayName}</span></h2>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Assignment Title</span>
                        </label>
                        <input type="text" defaultValue={title} name="title" placeholder="Enter assignment title" className="input input-bordered font-bold" readOnly />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Assignment Marks</span>
                            </label>
                            <input type="text" name="marks" className="input input-bordered font-bold" defaultValue={marks} readOnly />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Quick note text</span>
                        </label>
                        <textarea name="quickNote" className="rounded-lg p-4" placeholder="Write a description" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="form-control">
                        <input type="file" name="file" className="file-input w-full max-w-xs" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-gray-700 text-white">Submit</button>
                    </div>
                </form>
            </div>
        </div>




        // <div className="w-[90%] md:w-[60%] mx-auto py-16">
        //     <h2 className="text-center text-4xl font-bold mb-6">Submit My Assignment</h2>
        //     <div className="bg-[#e0dbd8] rounded-lg">
        //         <form onSubmit={handleAssignmentForm} className="card-body md:space-y-8">
        //             <div className="form-control">
        //                 <label className="label">
        //                     <span className="label-text font-bold">Quick note text</span>
        //                 </label>
        //                 <textarea name="quickNote" className="rounded-lg p-4" placeholder="Write a description" id="" cols="30" rows="10"></textarea>
        //             </div>
        //             <div className="form-control">
        //                 <input type="file" name="file" className="file-input w-full max-w-xs" />
        //             </div>
        //             <div className="form-control mt-6">
        //                 <button className="btn bg-gray-700 text-white">Submit</button>
        //             </div>
        //         </form>
        //     </div>
        // </div>
    );
};

export default AssignmentForm;
