
function Todolist({ list, handleCheck, handleDelete }) {
    return (
        <div>
            {(list.length) ? (
                <ul className="contact-ul">
                    {list.map((item, index) => {
                        return (
                            <li id={index} key={index} className="contact-list">
                                <input
                                    type="checkbox"
                                    checked={item.checked}
                                    onChange={() => handleCheck(index)}
                                />
                                <label
                                    style={item.checked ? { textDecoration: 'line-through' } : null}
                                    onClick={() => handleCheck(index)}>
                                    {item.Label}
                                </label>
                                <button className="btn" onClick={() => handleDelete(index)}>Delete</button>
                            </li>
                        );
                    })}
                </ul>
            ) : (<p>Empty</p>)}
        </div>
    );
}

export default Todolist;
