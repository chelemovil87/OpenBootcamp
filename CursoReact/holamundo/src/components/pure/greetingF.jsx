import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {
   //Breve introduccion a useState
    // const [variable, metodo para actualizarlo] = useState (valor inicial)
    const [age, setage] =useState(29)
   
    const birthday = () => {
        //actualizar el state
        setage(age + 1)
    }

    return (
        <div>
            
                <h1>
                    Hola {props.name } desde componente funcional!
                </h1>
                {/* <h2>
                    Tu edad es de : {this.state.age }
                </h2>
                <div> 
                    <button onClick={this.birthday}>
                        Cumplir Años!!
                    </button>    
                </div> */}
            
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string,
};


export default GreetingF;
