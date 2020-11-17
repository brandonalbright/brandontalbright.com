import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Input from '@material-ui/core/Input';
import MaskedInput from 'react-text-mask';
import fetchAPI from '../api/index'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


function getModalStyle() {

  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '80vw',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ContactModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [contactType, setContactType] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
            <Input 
                placeholder="Name" 
                inputProps={{ 'aria-label': 'description' }} 
                value={name}
                onChange={(event) => {
                    setName(event.target.value)
                }}/>
            <Input 
                placeholder="Address" 
                inputProps={{ 'aria-label': 'description' }} 
                value={address}
                onChange={(event) => {
                    setAddress(event.target.value)
                }}/>
            <MaskedInput
                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                placeholder="Phone Number"
                className="phonenumber"
                value={phoneNumber}
                onChange={(event) => {
                    setPhoneNumber(event.target.value)
                }}/>           
            <Input 
                placeholder="Email"  
                inputProps={{ 'aria-label': 'description' }} 
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value)
                }}/>
            <FormControl component="fieldset">
                <FormLabel component="legend">Contact Type</FormLabel>
                <RadioGroup row >
                    <FormControlLabel value="Work" control={<Radio />} label="Work" 
                    onClick={(event) => {
                        setContactType("Work")
                        console.log(contactType)
                    }}/>
                    <FormControlLabel value="Personal" control={<Radio />} label="Personal" 
                    onClick={(event) => {
                        setContactType("Personal")
                        console.log(contactType)
                    }}/>
                    <FormControlLabel value="Other" control={<Radio />} label="Other" 
                    onClick={(event) => {
                        setContactType("Other")
                        console.log(contactType)
                    }}/>
                </RadioGroup>
            </FormControl>
            
            <button 
                onClick={async (event) => {
                    event.preventDefault();
                    fetchAPI("https://univ-contact-book.herokuapp.com/api/contacts", "POST", {
                    name: name,
                    address: address,
                    phoneNumber: phoneNumber,
                    email: email,
                    contactType: contactType,
                    })
                    .then(console.log)
                    .then(
                        handleClose(),
                        setName(''), 
                        setAddress(''),
                        setPhoneNumber(''),
                        setEmail(''),
                        setContactType(''))
                    .catch(console.error);

                }}
            >Submit</button>
        </form>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        {body}
      </Modal>
    </div>
  );
}