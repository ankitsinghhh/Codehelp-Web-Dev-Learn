import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { buyCourse } from '../services/operations/studentFeaturesAPI';
import { fetchCourseDetails } from '../services/operations/courseDetailsAPI';
import { setCourse } from '../slices/courseSlice';
import GetAvgRating from '../utils/avgRating';
import Error from "./Error"
import ConfirmationModal from "../components/common/ConfirmationModal"
import RatingStars from "../components/common/RatingStars"
import { formatDate } from '../services/formatDate';

// import CourseDetailsCard from '../components/core/Course/CourseDetailsCard';
const CourseDetails = () => {

    const {user} = useSelector((state)=>state.profile); 
    const {token} = useSelector((state)=>state.auth);
    const {loading} = useSelector((state) => state.profile);
    const {paymentLoading} = useSelector((state)=> state.course);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {courseId}  = useParams();

    const [courseData , setCourseData] = useState(null);
    const [confirmationModal, setConfirmationModal] = useState(null);

    const handleBuyCourse = () =>{
        if(token){
            buyCourse(token , [courseId], user , navigate , dispatch);
            return
        }
    }


    return (
        <div className='flex items-center '>

            <button
            className='bg-yellow-50 p-6 mt-10'
            onClick={()=>handleBuyCourse()}
            >Buy Now</button>

        </div>
    )
}

export default CourseDetails
