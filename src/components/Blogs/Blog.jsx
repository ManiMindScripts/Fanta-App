import React from 'react'
import img1 from '../../assets/Blogs/1.jpg'
import img2 from '../../assets/Blogs/2.jpg'
import img3 from '../../assets/Blogs/3.jpg'
import img4 from '../../assets/Blogs/4.jpg'
import { UpdateFollower } from 'react-mouse-follower'

const BlogData = [
    {
        id: 1,
        title: "Lorem ipsum, dolor sit amet adipisicing elit.!",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In dignissimos voluptatibus rerum ipsa tempore ea praesentium harum mollitia, quas ratione?",
        link: "#",
        imga: img1,
    },
    {
        id: 2,
        title: "Lorem ipsum, dolor sit amet adipisicing elit!",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In dignissimos voluptatibus rerum ipsa tempore ea praesentium harum mollitia, quas ratione?",
        link: "#",
        imga: img2,
    },
    {
        id: 3,
        title: "Lorem ipsum, dolor sit amet adipisicing elit!",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In dignissimos voluptatibus rerum ipsa tempore ea praesentium harum mollitia, quas ratione?",
        link: "#",
        imga: img3,
    },
    {
        id: 4,
        title: "Lorem ipsum, dolor sit amet adipisicing elit!",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In dignissimos voluptatibus rerum ipsa tempore ea praesentium harum mollitia, quas ratione?",
        link: "#",
        imga: img4,
    },
]


const Blog = () => {
    return (
        <section className="bg-gray-50">
            <div className='container py-14'>
                <h1 className="text-3xl text-center font-bold pb-8">Blogs</h1>
                {/* Card Section */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        BlogData.map((item) => {
                            return (
                                <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: "black",
                                        zIndex: 999,
                                        followSpeed: 1.5,
                                        text: "read",
                                        textFontSize: "3px",
                                        scale: 5,
                                    }}
                                >
                                    <div key={item.id} className="flex flex-col items-center justify-center gap-6 p-2 md:p-5 max-w-[300px]
                        mx-auto shadow-lg rounded-md bg-white hover:translate-y-2 duration-300">
                                        <img src={item.imga} alt='' />
                                        <div className="space-y-2">
                                            <h1 className="text-xl font-bold line-calmp-2">{item.title}</h1>
                                            <p className="line-calmp-2">{item.desc}</p>
                                        </div>
                                    </div>
                                </UpdateFollower>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Blog