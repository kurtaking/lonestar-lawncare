import {
  Container,
  Divider,
  Toolbar,
  Typography,
  AppBar,
  Paper,
  Card,
  CardContent,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";

const pages = ["Products"];

const SecondTry = () => {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LONESTAR LAWNCARE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Typography>LONESTAR LAWNCARE</Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Typography>111-111-1111</Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default function Home() {
  return (
    <>
      <SecondTry />
      <Container sx={{ mt: 12 }}>
        <Card sx={{ mt: 5 }}>
          <CardContent>
            <Typography variant="h6">
              Jaxson Brown <br />
            </Typography>
            <Typography variant="body2">
              111-111-1111 <br />
              Corsicana, Texas 75110
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
