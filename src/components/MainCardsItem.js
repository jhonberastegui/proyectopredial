const MainCardsItem = (props) =>(
    <div className="col-lg-4 mt-4 mt-lg-0">
          <div className="icon-box">
            <i className={ props.className }></i>
            <h3><a href="none">{ props.title }</a></h3>
            <p>{ props.content }</p>
          </div>
        </div>    
)
export default MainCardsItem;