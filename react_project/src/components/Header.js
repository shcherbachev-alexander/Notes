import { NavLink } from 'react-router-dom';
import {createStyles, makeStyles} from "@mui/styles";

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            maxWidth: 1200,
            margin: '0 auto',
        },
        header: {
            backgroundColor: '#2b3036',
            height: 50
        },
        headerList: {
           display: 'flex',
           paddingTop: 15
        },
        headerLink: {
            textDecoration: 'none',
            color: '#757a80',
            fontSize: 20,
            transition: '0.3s ease',
            marginRight: 15,
            "&.active": {
                color:'#fff',
            },
            "&:hover": {
                color:'#fff',
            },
        },
    })
)

function Header() {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <ul className={classes.headerList}>
                    <li><NavLink exact className={classes.headerLink} to="/">Home</NavLink></li>
                    <li><NavLink className={classes.headerLink} to="/Note">Note</NavLink></li>
                    <li><NavLink className={classes.headerLink} to="/Create">Create</NavLink></li>
                    <li><NavLink className={classes.headerLink} to="/About">About</NavLink></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
