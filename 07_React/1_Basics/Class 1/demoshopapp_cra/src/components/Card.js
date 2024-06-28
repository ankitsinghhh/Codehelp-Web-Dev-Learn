
function Card(props){
    return(
        <div>
            {props.children} // by default component k andar content daalte h toh visible nhi hota isilye props.children likhna pdta h taaki visible kra skte agr us components k andar kch likhe toh 
        </div>
    )
}

export default Card