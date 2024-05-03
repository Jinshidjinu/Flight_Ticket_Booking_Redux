import { useDispatch, useSelector } from "react-redux"
import { AiFillDelete } from "react-icons/ai";
import { deleteBooking } from "../Redux/actions";

const Table = ()=>{
    const data = useSelector((state)=> state.data)
    const dispatch = useDispatch()

    const handleDelete = (e) =>{
        const id = parseInt   (e.currentTarget.id);
        dispatch(deleteBooking(id))
    }
     console.log(data,"hello")
     return(
      
       <>
        {
            data.length && (
              <div className="max-w-6xl mx-auto mt-5 bg-white ">
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-blue-900">
        <th>DESTINATION FROM</th>
        <th>DESTINATION TO</th>
        <th>JOURNY DATE</th>
        <th>GUESTS</th>
        <th>CLASSNAME</th>
        <th>DELETE</th>
      </tr>
    </thead>
    <tbody>
        {
            data.map((data,index)=>(
                <tr key={index} >
                <td className="datas">{data.from}</td>
                <td className="datas">{data.to}</td>
                <td className="datas">{data.date}</td>
                <td className="datas">{data.guests}</td>
                <td className="datas">{data.TicketClassName}</td>
                <td><button id={`${data.id}`} onClick={(e)=> handleDelete(e)} className="delete"><AiFillDelete /></button></td>
              </tr>

            ))
        }

    </tbody>
  </table>
</div>
 </div>

            )
        }
       
       </>

     )

}

export default Table 