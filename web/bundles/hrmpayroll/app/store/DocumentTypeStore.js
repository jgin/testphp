Ext.define('sisprod.store.DocumentTypeStore', {
    extend: 'Ext.data.Store',
    model: 'sisprod.model.DocumentTypeModel',

    require: [
        'Ext.data.Store', 
        'sisprod.model.DocumentTypeModel'
    ],

    proxy:{
        type: 'ajax',
        
        api: {
            read: 'rest/idt/list.htm',
            destroy: 'rest/idt/delete.htm',
            create: 'rest/idt/register.htm',
            update: 'rest/idt/update.htm',
            activate: 'rest/idt/activate.htm'
        },
//        url:'rest/workCategories/list.htm',

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