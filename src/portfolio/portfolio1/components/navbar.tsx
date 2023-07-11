import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Text from '@mui/material/Typography';
import Button from '@mui/material/Button';
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const navItems = ['home', 'about', 'services', 'skills', 'contact'];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const nav = React.useRef<HTMLInputElement>(null);
  const lio = React.useRef<HTMLInputElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  React.useEffect(() => {
    ScrollTrigger.create({
      trigger: 'body',
      start: '15 top',
      onEnter: () => {
        if (nav.current && lio.current) {
          nav.current.style.background = 'crimson';
          nav.current.style.padding = '10px 4%';
          lio.current.style.color = 'white';
        }
      },
      onLeaveBack: () => {
        if (nav.current && lio.current) {
          nav.current.style.background = 'transparent';
          nav.current.style.padding = '25px 4%';
          lio.current.style.color = 'crimson';
        }
      },
    });
  }, []);

  const drawer = (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <IconButton
        onClick={handleDrawerToggle}
        sx={{ mx: 4, my: 1, alignSelf: 'end' }}
      >
        <CloseRoundedIcon fontSize="large" sx={{ color: '#fff' }} />
      </IconButton>
      <Divider sx={{ borderColor: '#aaa', width: '100%' }} />
      <List sx={{ width: '100%' }}>
        {navItems.map((item) => (
          <ListItem key={item}>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => {
                handleDrawerToggle();
                gsap.to(window, {
                  delay: 0.2,
                  duration: 0.5,
                  scrollTo: `#${item}`,
                });
              }}
            >
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  textTransform: 'capitalize',
                  fontSize: '2rem',
                  color: '#ccc',
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          padding: '25px 4%',
          background: 'transparent',
          transition: 'all 0.3s ease',
          boxShadow: 'none',
        }}
        ref={nav}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Text variant="h4" sx={{ fontWeight: 700 }}>
              Portfo
              <Text
                variant="h4"
                component="span"
                ref={lio}
                sx={{ fontWeight: 700, color: 'crimson' }}
              >
                lio.
              </Text>
            </Text>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: '#fff',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                  fontSize: '1.8rem',
                  padding: '6px 16px',
                }}
                onClick={() =>
                  gsap.to(window, { duration: 0.5, scrollTo: `#${item}` })
                }
              >
                {item}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '100%',
              backgroundColor: '#111',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
