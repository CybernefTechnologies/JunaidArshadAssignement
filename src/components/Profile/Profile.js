import classes from './Profile.module.css';
import Card from './../Ui/Card';
import Edit from '../Edit/Edit';
let id = 0;
const Profile = (props) => {
    const [userDataObj] = props.userData;
    
    const userDataObjKeys = Object.keys(userDataObj);
    const filterFunc = (el) => {
        
        if(el === 'email' || el === 'phone' || el === 'username' || el === 'login' || el === 'name' || el === 'dob') {
            
            return true;
        }
         
    }
    const filterKeys = userDataObjKeys.filter(filterFunc);
    
    const dataGenerator = (el) => {
        let data;
        if(typeof userDataObj[el] === 'object') {
            if(userDataObj[el].username) {
                
                data = userDataObj[el].username;
            }
            else if (userDataObj[el].title) {
                
                data = `${userDataObj[el].title} ${userDataObj[el].first} ${userDataObj[el].last}`;
                
            }
            else if(userDataObj[el].phone) {
                
                data = userDataObj[el].phone;
            }
            else if (userDataObj[el].date) {
                data = `${userDataObj[el].date} ${userDataObj[el].age}`
            }
        }
        else {
            data = userDataObj[el];
        }
        
        return <Edit key={`el${id++}`} dataProps={data} />
    }
    const editData = filterKeys.map(dataGenerator);

    return (
        <div className={classes.container}>
            <Card>
                <div className={classes.box}>
                    <img src={userDataObj.picture.large} alt=""></img>
                    <h4>{userDataObj.name.title} {userDataObj.name.first} {userDataObj.name.last}</h4>
                </div>
                
            </Card>
            <Card>
                {editData}
            </Card>
        </div>
    )
}
export default Profile;