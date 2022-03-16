import classes from './Header.module.css';
const Header = (props) => {
    const [userDataObj] = props.userData;
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            <img src={userDataObj.picture.thumbnail} alt=""></img>
                            <h2>{userDataObj.name.title} {userDataObj.name.first} {userDataObj.name.last}</h2>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        
    )
}
export default Header;