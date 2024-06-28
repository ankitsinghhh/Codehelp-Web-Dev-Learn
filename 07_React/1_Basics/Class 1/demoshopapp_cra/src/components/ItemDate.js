
function ItemDate(props){
    const day = props.day;
    const month = props.month
    const year = props.year
    return (

        <div className = "text-violet-700 bg-purple-300 flex gap-4 ">
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
    )
}

export default ItemDate;