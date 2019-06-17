"use strict";

import React from 'react';
import Background from '../../Images/homepagebg.jpg';
import '../../css/background.css';
import MaterialUIAutocomplete from "../../components/Search/MaterialUIAutocomplete";

export class SearchChefView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }

    }

    render() {
        return (  
          <div>
            <div>
            <MaterialUIAutocomplete/>
            </div>
         </div>
        )

    }

}