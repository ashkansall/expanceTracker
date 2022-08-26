import { useState } from "react";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({income, expense, addTransaction}) => {
    const [isShow, setIsShow] = useState(false);
    return ( 
        <div>
            <div className="topSection">
                <p>balance : {income - expense}</p>
                <button onClick={() => setIsShow(prevState => !prevState)} className={`btn ${isShow && "cancel"}`}>
                    {isShow ? "cancel" : "add"}
                </button>
            </div>
            {isShow && <TransActionForm addTransaction={addTransaction} setIsShow={setIsShow}/>}
            <div className="resultSection">
                <div className="expenseBox">Expense<span style={{color: "red"}}>{expense}$</span></div>
                <div className="expenseBox">income<span>{income}$</span></div>
            </div>
        </div>
     );
}
 
export default OverViewComponent;

