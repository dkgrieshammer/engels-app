import React, { useEffect, useRef, useState } from 'react';


export default function WpPage(props) {
    return (
        <div className="container main-container">
            <div className="row">
                <div className="col-md-12">
                    <div>{props.page.slug}</div>
                    <div dangerouslySetInnerHTML={{ __html: props.page.content.rendered }}></div>
                </div>
            </div>
        </div>
    )
}