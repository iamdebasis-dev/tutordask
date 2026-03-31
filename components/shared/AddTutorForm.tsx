"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const AddTutorForm=(props:{create:any})=>{
    const router = useRouter()
    const[title , setTitle]=useState("")
    const[image, setImage]=useState("")
    const[subject , setSubject]=useState("")
    const[language , setLanguage]=useState("")
    const[amount, setAmount]=useState("")
    const[description, setDescription]=useState("")
    const handleCreate=async()=>{
        await props.create({
            title,
            image,
            description,
            language,
            amount: parseFloat(amount),
            subject
          })
        router.push("/tutor")
    }

    return(
        <form onSubmit={handleCreate} className="space-y-4">
  
          <input type="text" placeholder="Tutor Name" className="border w-full p-2" value={title} onChange={(e)=>setTitle(e.target.value)} />
  
          <input type="text" value={subject} onChange={(e)=>setSubject(e.target.value)} />
            <input type="text" value={language} onChange={(e)=>setLanguage(e.target.value)} />
          <input type="number" placeholder="Price" className="border w-full p-2" value={amount} onChange={(e)=>setAmount(e.target.value)} />
          <input
            type="text"
            placeholder="Image URL"
            className="border w-full p-2"
            value={image}
            onChange={(e)=>setImage(e.target.value)}
          />
  
          <textarea
            placeholder="Description"
            className="border w-full p-2"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />
  
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Create Room
          </button>
  
        </form>
 
    )
}
export default AddTutorForm