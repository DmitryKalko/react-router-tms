import { Link } from "react-router-dom";
import { AppBar, Toolbar, Container, Tabs, Tab } from "@mui/material";

function ResponsiveAppBar() {

	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Tabs>
						<Tab label='Home' value='/' to='/' component={Link} />
						<Tab label='About' value='/About' to='/About' component={Link} />
						<Tab
							label='Contacts'
							value='/Contacts'
							to='/Contacts'
							component={Link}
						/>
					</Tabs>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;
