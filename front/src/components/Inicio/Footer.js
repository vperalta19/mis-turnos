import React from 'react';
import './../../assets/css/components.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
    return(
        <footer>
            <div className="copy-right_text">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <p className="copy_right text-center">
                                Copyright ©<script>document.write(new Date().getFullYear());</script> All rights reserved to MisTurnos.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}