import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home/Home";
import CreateAssignments from "../pages/CreateAssignments/CreateAssignments";
import PendingAssignments from "../pages/PendingAssignments/PendingAssignments";
import Assignments from "../pages/Assignments/Assignments";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import UpdateAssignment from "../pages/UpdateAssignment/UpdateAssignment";
import ProtectedRoute from "./ProtectedRoute";
import AssignmentForm from "../pages/AssignmentForm/AssignmentForm";
import MySubmittedAssignment from "../pages/MySubmittedAssignment/MySubmittedAssignment";
import ExaminnerRole from "../pages/ExaminnerRole/ExaminnerRole";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/assignments',
            element: <Assignments></Assignments>
        },
        {
            path: '/create_assignments',
            element: <ProtectedRoute><CreateAssignments></CreateAssignments></ProtectedRoute>
        },
        {
            path: '/pending_assignments',
            element: <PendingAssignments></PendingAssignments>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/view_details/:id',
            element: <ProtectedRoute><ViewDetails></ViewDetails></ProtectedRoute>,
            loader: ({params}) => fetch(`https://project-server-side-eight.vercel.app/create_assignments/${params.id}`)
        },
        {
            path: '/update_assignment/:id',
            element: <UpdateAssignment></UpdateAssignment>,
            loader: ({params}) => fetch(`https://project-server-side-eight.vercel.app/create_assignments/${params.id}`)
        },
        {
            path: '/assignment_form/:id',
            element: <AssignmentForm></AssignmentForm>,
            loader: ({params}) => fetch(`https://project-server-side-eight.vercel.app/create_assignments/${params.id}`)
        },
        {
            path: '/my_submited_assignm',
            element: <MySubmittedAssignment></MySubmittedAssignment>
        },
        {
            path: '/examinner_role/:status/:id',
            element: <ExaminnerRole></ExaminnerRole>,
            loader: ({params}) => fetch(`https://project-server-side-eight.vercel.app/submitted_assignmentsByStatus/${params.status}/${params.id}`)
        }
      ]
    },
  ]);

export default router;