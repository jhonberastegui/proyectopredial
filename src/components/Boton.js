const Boton = (props)=>(
    <button type="button" onClick={props.myOnClick} className={ props.clase}>{ props.title }</button>
)
export default Boton;