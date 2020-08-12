import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div className="about">
                <h2>Company: ThoughtWorks Local</h2>
                <h2>Location: Shenzhen</h2><br/>
                <h2>For more Information, please</h2>
                <h2>view our <Link to="/">website</Link></h2>
            </div>
        )
    };
}

export default About;