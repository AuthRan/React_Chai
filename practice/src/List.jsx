function List (props) {
    let list = ["apple", "banana", "pineapple", "pea"];
    let listItems = list.map(list => <ul>{list}</ul>)
    return(<ul>{listItems}</ul>);
}

export default List;