Ext.define('sisprod.store.AllWorkOrderReasonStore', {
    extend: 'Ext.data.Store',
    model: 'sisprod.model.WorkOrderReasonModel',

    require: [
        'Ext.data.Store', 
        'sisprod.model.WorkOrderReasonModel'
    ],

    proxy:{
        type: 'ajax',
        
        actionMethods: {
            read: 'POST'
        },
        
        api: {
            read: 'rest/workOrderReason/listAll.htm'
        },

        reader: {
            type: 'json',
            useSimpleAccessors: true,
            root: 'data',
            idProperty: 'id',
            totalProperty: 'total',
            messageProperty: 'message'
        }
    }
});