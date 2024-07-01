import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const data = useLoaderData();
    const { _id, date, image, marks, difficulty_level, whoCreated, title, description } = data;
    console.log(data);

    return (
        <div className="w-[90%] md:w-[70%] mx-auto my-20 bg-[#e0dbd8] p-8 rounded-md">
            <div className="w-full h-[520px]">
                <img className="w-full h-full object-cover" src={image} alt="" />
            </div>
            <div className="mt-4">
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 font-bold">
                    <span>Level: <span className="text-red-500">{difficulty_level}</span></span>
                    <span>Created: <span className="text-green-700">{date}</span></span>
                    <span>Marks: <span className="text-green-700">{marks}</span></span>
                    <span>Released by: <span className="text-red-500">{whoCreated}</span></span>
                </div>
                <h2 className="text-3xl font-bold mt-6 mb-4">{title}</h2>
                <p>{description}</p>
            </div>
            <Link to={`/assignment_form/${_id}`}>
                <button className="btn btn-lg mt-12 bg-gray-600 text-white">Take Assignment</button>
            </Link>
        </div>
    );
};

export default ViewDetails;