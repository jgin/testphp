Ext.define('sisprod.model.WorkShopCoordinatorModel', {
    extend: 'Ext.data.Model',

    require: [
        'Ext.data.Model'
    ],

    fields:[
        {name: 'idWorkShopCoordinator', type: 'int'},
        {name: 'idEmployee', type: 'int', mapping: 'employee.idEmployee'},
        {name: 'personFullName', type: 'string', mapping: 'employee.person.personFullName'},
        {name: 'fullDocumentNumber', type: 'string', mapping: 'employee.person.fullDocumentNumber'},
        {name: 'dependencyName', type: 'string', mapping: 'employee.dependency.dependencyName'}
    ],

    idProperty: 'idTaskScheduler'
});