import Loader from "react-loader-spinner";
import './App.css';

const Loading= () => {
    return(
        <div className="spinner">
         <Loader type="Oval" color="#ffffff" height={100} width={100} />
        </div>
    );
}


export default Loading