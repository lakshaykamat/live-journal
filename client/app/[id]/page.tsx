import { data } from "@/data"
import { formatDate } from "@/utils/formatDate"

const Result = ({params}:any) => {
    const {id} = params

    const journal = data.find((data)=>{
        return data.id == parseInt(id)
    })

  return (
    <>
    <div className="max-w-3xl mx-auto my-12 prose">
        <h1>{journal && journal.title || "Loaing..."}</h1>
        <span>{journal ? formatDate(journal.date) : "Loaing..."}</span>
        <p className="text-xl leading-relaxed">{journal ? journal.body : "Loading..."}</p>
    </div>
    </>
  )
}

export default Result