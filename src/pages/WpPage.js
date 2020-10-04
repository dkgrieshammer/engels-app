import React from 'react';
import Page from './Page';


export default function WpPage(props) {
    return (
        <Page title={props.page.slug}>
            <div dangerouslySetInnerHTML={{ __html: props.page.content.rendered }}></div>
        </Page>
    )
}