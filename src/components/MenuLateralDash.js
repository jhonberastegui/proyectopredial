import '../estiloMenuLateral.css'
const MenuLateralDash = () => (

    <div>
      
        <div className="l-navbar" id="nav-bar">
            <nav className="nav">
                <div> 
                    <div className="nav_list">
                        <a href="none" className="nav_link_side_menu active">
                            <i className="bx bx-grid-alt nav_icon" />
                            <span className="nav_name">Dashboard</span>
                        </a> <a href="none" className="nav_link_side_menu">
                            <i className="bx bx-user nav_icon" />
                            <span className="nav_name">Users</span>
                        </a> <a href="none" className="nav_link_side_menu">
                            <i className="bx bx-message-square-detail nav_icon" />
                            <span className="nav_name">Messages</span>
                        </a>
                        <a href="none" className="nav_link_side_menu">
                            <i className="bx bx-bookmark nav_icon" />
                            <span className="nav_name">Bookmark</span>
                        </a> <a href="none" className="nav_link_side_menu">
                            <i className="bx bx-folder nav_icon" />
                            <span className="nav_name">Files</span>
                        </a>
                        <a href="none" className="nav_link_side_menu">
                            <i className="bx bx-bar-chart-alt-2 nav_icon" />
                            <span className="nav_name">Stats</span>
                        </a>
                    </div>
                </div> <a href="none" className="nav_link_side_menu"> <i className="bx bx-log-out nav_icon" /> <span className="nav_name">SignOut</span> </a>
            </nav>
       </div>     
    </div>


)
export default MenuLateralDash;