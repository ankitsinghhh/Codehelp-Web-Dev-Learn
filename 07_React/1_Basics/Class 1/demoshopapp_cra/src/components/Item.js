
function Item(props){
    const itemName = props.name;
    return (<div>
        <p>{itemName}</p>
        {props.children} // apne component k andar k content ko visible krane k lie 
    </div>)
}

export default Item;