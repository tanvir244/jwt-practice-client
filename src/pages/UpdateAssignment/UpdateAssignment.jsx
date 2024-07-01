import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateAssignment = () => {
    const data = useLoaderData();
    const { _id, creatorEmail, title, marks, difficulty_level, description, image, date } = data;
    const navigate = useNavigate();

    const handleUpdateAssignment = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const marks = form.marks.value;
        const difficulty_level = form.difficulty_level.value;
        const description = form.description.value;
        const image = form.image.value;
        const date = form.date.value;
        const updatedAssignment = { title, marks, difficulty_level, description, image, date };

        console.log(updatedAssignment);

        // now it's time to send data to database 
        fetch(`https://project-server-side-eight.vercel.app/create_assignments/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedAssignment)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your assignment successfully updated',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
                  .then(() => {
                    // redirect to the assignment page after updating
                    navigate('/assignments');
                  })
            }
        })
    }

    return (
        <div className="w-[90%] md:w-[60%] mx-auto py-16">
            <h2 className="text-center text-4xl font-bold mb-6">Update Assignment</h2>
            <div className="bg-[#e0dbd8] rounded-lg">
                <form onSubmit={handleUpdateAssignment} className="card-body md:space-y-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Title</span>
                            </label>
                            <input type="text" name="title" className="input input-bordered" defaultValue={title} required />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Marks</span>
                            </label>
                            <input type="text" name="marks" className="input input-bordered" defaultValue={marks} required />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={creatorEmail} className="input input-bordered" readOnly />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="mb-2 font-bold text-base" htmlFor="defficulty_level">Difficulty Level</label>
                            <select name="difficulty_level" id="" className="p-3 rounded-lg" defaultValue={difficulty_level}>
                                <option value="easy">easy</option>
                                <option value="medium">medium</option>
                                <option value="hard">hard</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-bold">Date</span>
                        </label>
                        <input type="date" className="px-4 py-2 rounded-lg" name="date" id="" defaultValue={date} required/>
                    </div>
                    <div className="space-y-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Description</span>
                            </label>
                            <textarea name="description" className="rounded-lg p-4" id="" cols="30" rows="10" defaultValue={description} required></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Assignemnt Thumbnail Image</span>
                            </label>
                            <input type="text" name="image" className="input input-bordered" defaultValue={image} required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-gray-700 text-white">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateAssignment;