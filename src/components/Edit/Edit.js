import classes from './Edit.module.css'
const Edit = (props) => {
    return (
        <h4 className={classes.editBox}>
            <span>{props.dataProps}</span>
            <span className={classes.iconContainer}>
            <ion-icon name="create-outline"></ion-icon>
            </span>
        </h4>
    )
}
export default Edit;