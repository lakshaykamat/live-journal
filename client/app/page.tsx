import Card from "./components/Card"
import { data } from "@/data"
const Home = () => {
  const cards = data.map((item)=>{
    return <Card key={item.id} id={item.id} title={item.title ? item.title: "Untitled"} date={item.date} content={item.body}/>
  })
  return (
    <>
    <div className="max-w-5xl mx-auto gap-5 place-items-center  my-12  grid grid-cols-2">
      {cards}
    </div>
    </>
  )
}

export default Home