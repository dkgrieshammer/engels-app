import { GridContainer } from 'Components/Container/Container';
import React from 'react';


export default function Page(props) {
  return (
    <GridContainer>
      <div className="row">
        <div className="col-md-12">
          <div>{props.title}</div>
          <div>
            {props.children}
          </div>
        </div>
      </div>
    </GridContainer>
  )
}