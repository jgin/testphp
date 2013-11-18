Ext.define('sisprod.model.ChemicalTreatmentModel', {
    extend: 'Ext.data.Model',
    require:[
        'Ext.data.Model'
    ],
    fields:[
        {name: 'idChemicalTreatment', type: 'int', visible: false},
        {name: 'chemicalTreatmentDate', type: 'date', visible: true, dateFormat: 'Y-m-d'},
        {name: 'well.idWell', type: 'int', visible: false, mapping:'well.idWell'},
        {name: 'well.wellName', type: 'string', visible: true, mapping:'well.wellName'}
    ],
    idProperty: 'idChemicalTreatment'
});