//Lib
import React from 'react';

//Mixin
import BackboneMixin from '../../mixin/BackboneMixin';

var Header = React.createClass({

    Mixin : [BackboneMixin],

    render: function() {

        var statement = this.props.model.get('statement');

        return (
            <div className="header">
                <h2 className="logo">Sky</h2>
                <p><em>This statement is for the period of {statement.period.from} to {statement.period.to}.</em></p>
            </div>
        );
    }

});

export default Header;