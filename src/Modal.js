
export default function Modal({setIsVisible}){
    function handleClick(){
        setIsVisible(false);
    }
    return(
    <div className="modal">
        <div className="btn_container">
    <button className="close_btn" onClick={handleClick}>close</button>
    </div>
     <h1>Welcome</h1>
    </div>
    )
}