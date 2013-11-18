Ext.define('sisprod.view.ChemicalTreatment.AddChemicalTreatment', {
    extend: 'sisprod.view.base.BaseDataWindow',
    alias: 'widget.addChemicalTreatment',
    require: [
        'sisprod.view.base.BaseDataWindow'
    ],
    title: 'Add Chemical Treatment',
    messages: {
        labels: {
            well: 'Well',
            chemicalProduct: 'Chemical Product',
            Date: 'Date',
            dosage: 'Dosage',
            dosageMeasureUnit: 'Dosage Measure',
            treatmentTime: 'Treatment Time',
            timeIdMeasureUnit: 'Time Measure',
            chemicalTreatmentProductPanel: 'Detail',
            chemicalTreatmentGoal: 'Goal'
        },
        headers: {
        },
        validations: {
        },
        buttons: {
            addMessage: 'Add',
            deleteMessage: 'Delete'
        },
        chemicalTreatmentsFieldSet: 'Chemical Treatment',
        wellEmptyText: 'Choose a well...'
    },
    modal: true,
    width: 600,
    layout: 'fit',
    initComponent: function() {
        var me = this;
        var formItems = [
            {
                xtype: 'fieldset',
                columnWidth: 0.5,
                title: me.messages.chemicalTreatmentsFieldSet,
                defaultType: 'textfield',
                defaults: {anchor: '100%'},
                layout: 'anchor',
                items: [
                    {
                        xtype: 'sensitivecombocontainer',
                        anchor: '100%',
                        showAddButton: false,
                        sensitiveComboBoxOptions: {
                            hideTrigger: false,
                            name: 'idWell',
                            id: 'idWell',
                            fieldLabel: me.messages.labels.well,
                            labelWidth: 100,
                            store: Ext.create('sisprod.store.WellAll', {}),
                            emptyText: me.messages.wellEmptyText,
                            forceSelection: true,
                            allowBlank: false,
                            valueField: 'idWell',
                            displayField: 'wellName'
                        }
                    },
                    {
                        labelWidth: 100,
                        xtype: 'datefield',
                        allowBlank: false,
                        anchor: '50%',
                        name: 'date',
                        fieldLabel: me.messages.labels.Date
                    }
                ]
            }
        ];
        var panItems = new Array();
        panItems.push({
            xtype: 'hiddenfield',
            name: 'idChemicalTreatmentProduct',
            id: 'idChemicalTreatmentProduct'
        });
        panItems.push({
            xtype: 'combobox',
            name: 'idChemicalProduct',
            id: 'idChemicalProduct',
            anchor: '80%',
            labelWidth: 120,
            store: Ext.create('sisprod.store.ChemicalProductAll'),
            fieldLabel: me.messages.labels.chemicalProduct,
            displayField: 'chemicalProductName',
            valueField: 'idChemicalProduct',
            forceSelection: true,
            editable: false
        });
        panItems.push({
            xtype: 'combobox',
            name: 'idChemicalTreatmentGoal',
            id: 'idChemicalTreatmentGoal',
            anchor: '80%',
            labelWidth: 120,
            store: Ext.create('sisprod.store.ChemicalTreatmentGoalAll'),
            fieldLabel: me.messages.labels.chemicalTreatmentGoal,
            displayField: 'chemicalTreatmentGoalName',
            valueField: 'idChemicalTreatmentGoal',
            forceSelection: true,
            editable: false
        });
        panItems.push({
            labelWidth: 120,
            xtype: 'numberfield',
            minValue: 0,
            anchor: '80%',
            name: 'dosage',
            id: 'dosage',
            fieldLabel: me.messages.labels.dosage
        });
        panItems.push({
            xtype: 'combobox',
            name: 'dosageIdMeasureUnit',
            id: 'dosageIdMeasureUnit',
            anchor: '80%',
            labelWidth: 120,
            store: Ext.create('sisprod.store.MeasureUnitAll'),
            fieldLabel: me.messages.labels.dosageMeasureUnit,
            displayField: 'measureUnitName',
            valueField: 'idMeasureUnit',
            forceSelection: true,
            editable: false
        });
        panItems.push({
            labelWidth: 120,
            xtype: 'numberfield',
            minValue: 0,
            anchor: '80%',
            name: 'treatmentTime',
            id: 'treatmentTime',
            fieldLabel: me.messages.labels.treatmentTime
        });
        panItems.push({
            xtype: 'combobox',
            name: 'timeIdMeasureUnit',
            id: 'timeIdMeasureUnit',
            anchor: '80%',
            labelWidth: 120,
            store: Ext.create('sisprod.store.MeasureUnitAll'),
            fieldLabel: me.messages.labels.timeIdMeasureUnit,
            displayField: 'measureUnitName',
            valueField: 'idMeasureUnit',
            forceSelection: true,
            editable: false
        });
        var chemicalTreatmentProductPanel = Ext.create('Ext.panel.Panel', {
            title: me.messages.labels.chemicalTreatmentProductPanel,
            layout: 'anchor',
            items: panItems,
            tbar: [
                {
                    itemId: 'add',
                    text: me.messages.buttons.addMessage,
                    iconCls: 'add',
                    action: 'addProduct'
                },
                {
                    itemId: 'remove',
                    text: me.messages.buttons.deleteMessage,
                    iconCls: 'remove',
                    action: 'deleteProduct',
                    disabled: true
                }
            ]
        });
        formItems.push(chemicalTreatmentProductPanel, {id: 'buttonPanel'});
        formItems.push(Ext.create('sisprod.view.ChemicalTreatment.ChemicalTreatmentProductGrid', {id: 'addChemicalTreatmentProductsGrid'}));
        me.formOptions = {
            region: 'center',
            labelWidth: 120,
            bodyStyle: 'padding:5px 5px 0',
            layout: 'fit',
            items: [
                {
                    xtype: 'panel',
                    border: false,
                    autoScroll: true,
                    items: formItems
                }
            ]
        };
        me.callParent(arguments);
    }
});