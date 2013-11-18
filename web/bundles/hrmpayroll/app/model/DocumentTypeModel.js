Ext.define('sisprod.model.DocumentTypeModel', {
    extend: 'Ext.data.Model',

    require: [
        'Ext.data.Model'
    ],

    fields:[
        {name: 'idDocumentType', type: 'int', visible: false, mapping:'id'}, // Ext.data.Types.FLOAT
        {name: 'externalId', type: 'int', visible: false},
        {name: 'documentTypeName', type: 'string', visible: true, mapping:'name'},
        {name: 'documentTypeAcronym', type: 'string', visible: true, mapping:'acronym'}
    ],

    idProperty: 'idDocumentType'
});