import React from  "react";
import ReactDOM from "react-dom";
import ContactModal from "./components/MODAL"
import Contacts from "./components/CONTACTGRID"
import fetchAPI from "./api/index"


function App() {
    
    fetchAPI("https://univ-contact-book.herokuapp.com/api/contacts")
        .then(function (data) {
        console.log('my contacts', data);
        })
        .catch(function (error) {
        console.error('error fetching contacts', error);
        })
    
    return (
        <>
            <h1>Hello!</h1>
            <ContactModal />
            <Contacts />
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById(`app`)
);
