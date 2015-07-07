'use strict';

angular.module('flickrNgSpaApp')
.factory("sharedScope", function() {
    var data={
        Filter:''
    };
    return{
        getFilter: function(){
            return data.Filter;
        },
        setFilter:function(filter){
            data.Filter=filter;
        }
    };
    
    });