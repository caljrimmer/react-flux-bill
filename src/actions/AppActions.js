import AppDispatcher from '../dispatcher/AppDispatcher';
import $ from 'jquery';

var actions = {

    getBill: function(url){
        $.ajax({
            url: url,
            success: function (data) {
                AppDispatcher.dispatch({
                    actionType: 'get-bill',
                    value: data
                });
            }
        });
    }

};

export default actions
