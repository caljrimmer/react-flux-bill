//Lib
import React from 'react';

//Mixin
import BackboneMixin from '../../mixin/BackboneMixin';

var Calls = React.createClass({

    Mixin : [BackboneMixin],

    render: function() {

        var total = this.props.model.get('callCharges').total;
        var calls = this.props.model.get('callCharges').calls;

        var CallRows = calls.map(function(call){
            return (
                <tr>
                    <td>{call.called}</td>
                    <td>{call.duration}</td>
                    <td>{call.cost}</td>
                </tr>
            )
        });

        return (
            <div className="box">
                <h2>Calls</h2>
                <table id="calls">
                    <tbody>
                        <tr>
                            <th>Number</th>
                            <th>Duration</th>
                            <th>Cost</th>
                        </tr>
                        {CallRows}
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

export default Calls;