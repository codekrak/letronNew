import React from "react";

// var modal = document.getElementById('contactModal');
// var modalBtn = document.getElementById('contact');
// var closeBtn = document.getElementById('closebtn');

// Event Listener


// Function to Open Modal

function Hello() {
    return (

        <div className="navStart d-flex">
            
            <div className="title">
                <h1>Letron</h1>
            </div>

            <div className="headLine">
                <h3>Impact Windows and Door Installation</h3>
            </div>

            <div className="faceBook">
                <button className="faceButton">
                <a class="nav-link" href="https://www.facebook.com/letron.pros/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg></a>
                </button>
            </div>

            {/* Modal Button */}
            <div className="contactUs">

                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Contact Us
                    </button>

                    
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Contact Information</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h3>Phone Number:</h3><p>(786)205-8094</p>
                            <h3>Email:</h3><p>letron0316@gmail.com</p>
                        </div>
                        </div>
                    </div>
                    </div>
                
                
            </div>
            

            

        </div>

    );
}

export default Hello;