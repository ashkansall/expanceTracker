import { useEffect, useState } from "react";

const TransActionComponent = ({ transaction }) => {

    const [searchItem, setSearchItem] = useState("");
    const [filteredTnx, setFilteredTnx] = useState(transaction);

    const filterTransactions = (search) => {
        if (!search || search === "") {
            setFilteredTnx(transaction);
            return;
        }
        const filtered = transaction.filter((t) => t.desc.toLowerCase().includes(search.toLowerCase()));
        setFilteredTnx(filtered);
    }

    const changeHandler = (e) => {
        setSearchItem(e.target.value);
        // we want to filter the search, so we need a copy of the original state
        filterTransactions(e.target.value);
    }

    useEffect(() => {
        filterTransactions(searchItem);
    },[transaction])

    if (!transaction.length) {
        return <h3>add some tnx</h3>
    }

    return ( 
        <section>
            <input type="text" value={searchItem} onChange={changeHandler} placeholder="search for tnx..." className="search"/>

            {filteredTnx.length ? filteredTnx.map((t) => (
                <div key={t.id} className="transaction" style={{borderRight: t.type === "expense" && "4px solid red"}}>
                    <span>{t.desc}</span>
                    <span>${t.amount}</span>
                </div>
            )) : "no matched item"}
        </section>
     );
}
 
export default TransActionComponent;