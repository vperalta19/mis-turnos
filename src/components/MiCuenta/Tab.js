import React from 'react';
import './../../assets/css/MiCuenta.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HistorialMedico from './HistorialMedico'
import Receta from './Receta'


const style = {
    background: '#00B1C2',
    color: 'white',
    textDecoration: 'none'
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const historialInfo = {
    fecha : '23/09/2020',
    paciente : 'Juan Manuel Belgrano',
    profesional : 'Dr San Martin',
    medicamentos : ['Paracetamol'],
    estudios : ['Electrograma', 'Radiografia'],
    notas : 'Veniam tempor cupidatat veniam consectetur culpa amet do dolore aliquip cillum mollit. Elit incididunt qui deserunt consectetur. Ad irure tempor commodo eiusmod Lorem laboris Lorem nulla nostrud. Sint laboris do proident aliqua eu occaecat do commodo quis magna ullamco culpa mollit. Commodo incididunt quis sint ea veniam tempor labore consequat exercitation laborum. Reprehenderit nostrud sint tempor commodo exercitation.'
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={style}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          indicatorColor='none'
        >
          <LinkTab style={style} label="HISTORIAL MEDICO" href="/drafts" {...a11yProps(0)} />
          <LinkTab style={style} label="RECETAS" href="/trash" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <HistorialMedico historialInfo = {historialInfo}></HistorialMedico>
        <HistorialMedico historialInfo = {historialInfo}></HistorialMedico>
        <HistorialMedico historialInfo = {historialInfo}></HistorialMedico>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Receta recetaInfo = {historialInfo}></Receta>
        <Receta recetaInfo = {historialInfo}></Receta>
      </TabPanel>
    </div>
  );
}
