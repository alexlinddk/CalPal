import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { Outlet, Link } from "react-router-dom";


const Layout = () => {
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar>
                        <Link className="link" to="/">
                            <Typography textAlign="center" variant="h5">Calorie Tracker</Typography>
                        </Link>

                        <Link className="link" to="/weighttracker">
                            <Typography textAlign="center" variant="h5">Weight Tracker</Typography>
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>

            <Outlet />
        </>
    )
};

export default Layout;
