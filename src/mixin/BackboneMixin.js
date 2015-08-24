var BackboneMixin = {

    componentDidMount : function() {

        if(this.props.model){
            this.props.model.on('change', function() {
                if(this.isMounted()){
                    this.forceUpdate();
                }
            },this);
        }

        if(this.props.collection){
            this.props.collection.on('add remove reset sort', function(){
                if(this.isMounted()){
                    this.forceUpdate();
                }
            }, this);
        }

    },

    componentWillUnMount: function() {

        if(this.props.model){
            this.props.model.off(null, null, this);
        }

        if(this.props.collection){
            this.props.collection.off(null, null, this);
        }

    }
}

export default BackboneMixin;