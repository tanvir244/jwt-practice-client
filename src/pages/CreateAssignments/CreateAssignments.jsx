import Swal from "sweetalert2";
import useAuth from "../../hook/useAuth";

const CreateAssignments = () => {
    const { user } = useAuth();

    const handleCreateAssignment = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const marks = form.marks.value;
        const email = form.email.value;
        const difficulty_level = form.difficulty_level.value;
        const description = form.description.value;
        const image = form.image.value;
        const date = form.date.value;
        const newAssignment = { creatorEmail: email, whoCreated: user.displayName, title, marks, difficulty_level, description, image, date };

        console.log(newAssignment);

        // now it's time to send data to database 
        fetch('https://project-server-side-eight.vercel.app/create_assignments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your assignment has been created",
                        showConfirmButton: false,
                        timer: 1500
                    })
                        .then(() => {
                            form.reset();
                        })
                }
            })
    }

    return (
        <div className="w-[90%] md:w-[60%] mx-auto py-16">
            <h2 className="text-center text-4xl font-bold mb-6">Create Assignment</h2>
            <div className="bg-[#e0dbd8] rounded-lg">
                <form onSubmit={handleCreateAssignment} className="card-body md:space-y-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Title</span>
                            </label>
                            <input type="text" name="title" placeholder="Enter assignment title" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Marks</span>
                            </label>
                            <input type="text" name="marks" placeholder="Enter Assignment Marks" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user.email} placeholder="email" className="input input-bordered" readOnly />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="mb-2 font-bold text-base" htmlFor="defficulty_level">Difficulty Level</label>
                            <select name="difficulty_level" id="" className="p-3 rounded-lg">
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
                        <input type="date" className="px-4 py-2 rounded-lg" name="date" id="" />
                    </div>
                    <div className="space-y-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Description</span>
                            </label>
                            <textarea name="description" className="rounded-lg p-4" placeholder="Write a description" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Assignemnt Thumbnail Image</span>
                            </label>
                            <input type="text" name="image" placeholder="Enter Thumbnail URL" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-gray-700 text-white">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateAssignments;