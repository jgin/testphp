Ext.define('sisprod.store.WorkRequestStatusAll', {
    extend: 'Ext.data.Store',
    model: 'sisprod.model.WorkRequestStatusModel',

    require: [
        'Ext.data.Store', 
        'sisprod.model.WorkRequestStatusModel'
    ],

    proxy:{
        type: 'ajax',
        api: {
            read:'rest/workRequestStatus/listAll.htm'
        },
        reader: {
            type: 'json',
            root: 'data',
            idProperty: 'idWorkRequestStatus',
            totalProperty: 'total',
            messageProperty: 'message'
        }
    }
});