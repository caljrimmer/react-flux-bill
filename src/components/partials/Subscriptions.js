//Lib
import React from 'react';

//Mixin
import BackboneMixin from '../../mixin/BackboneMixin';

var Subscriptions = React.createClass({

    Mixin : [BackboneMixin],

    render: function() {

        var total = this.props.model.get('package').total;
        var subscriptions = this.props.model.get('package').subscriptions;

        var SubscriptionsRows = subscriptions.map(function(sub){
            return (
                <tr>
                    <td>{sub.type}</td>
                    <td>{sub.name}</td>
                    <td>{sub.cost}</td>
                </tr>
            )
        });

        return (
            <div className="box">
                <h2>Subscriptions</h2>
                <table id="subscriptions">
                    <tbody>
                        <tr>
                            <th>Type</th>
                            <th>Name</th>
                            <th>Cost</th>
                        </tr>
                        {SubscriptionsRows}
                        <tr>
                            <td colSpan="2"></td>
                            <td className="total">{total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

});

export default Subscriptions;