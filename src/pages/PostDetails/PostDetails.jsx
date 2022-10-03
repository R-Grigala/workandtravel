
import React, {useEffect, useState} from 'react'
import {useParams } from 'react-router-dom'
import "./PostDetails.css"

import { blog } from "../../assets/data/data"
import Navbar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer'

const PostDetails = () => {
    const { id } = useParams()
    const [bloges, setBlogs] = useState(null)

    useEffect(() => {
        let blogs = blog.find((blogs) => blogs.id === parseInt(id))
        if (blogs) {
            setBlogs(blogs)
        }
    },[id])

    return (
        <>
            {bloges ? (
                <div>
                    <Navbar />
                    <div className="hero-details">
                        <div className="mask-details">
                            <img className="details-img"
                            src={bloges.cover} alt="IntroImg"/>
                        </div>
                        <div className="content">
                            <h1>{bloges.title}</h1>
                            <p>{bloges.desc}</p>
                            <h4>author:{bloges.author}</h4>
                        </div>
                        <Footer/>
                    </div>
                    
                </div>
            ) : null }
        </>
  )
}

export default PostDetails