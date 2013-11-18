Ext.define('sisprod.view.SpecialMeasure.AddSpecialMeasure', {
    extend: 'sisprod.view.base.BaseDataWindow',
    alias: 'widget.addSpecialMeasure',
    require: [
        'sisprod.view.base.BaseDataWindow'
    ],
    title: 'Add Special Measure',
    messages: {
        labels: {
            well: 'Well',
            wellEmptyText: 'You have to select an well...',
            oil: 'Oil',
            oilMeasureUnit: 'Oil Measure Unit',
            battery: 'Battery',
            water: 'Water',
            waterMeasureUnit: 'Water Measure Unit',
            totalHours: 'Total Hours',
            observation: 'Observation'
        }
    },
    modal: true,
    width: 550,
    initComponent: function() {
        var me = this;
        var formItems = [
            {
                xtype: 'sensitivecombocontainer',
                showAddButton: false,
                sensitiveComboBoxOptions: {
                    hideTrigger: false,
                    anchor: '100%',
                    name: 'idWell',
                    id: 'idWell',
                    fieldLabel: me.messages.labels.well,
                    labelWidth: 110,
                    store: Ext.create('sisprod.store.WellAll', {}),
                    emptyText: me.messages.wellEmptyText,
                    forceSelection: true,
                    allowBlank: false,
                    valueField: 'idWell',
                    displayField: 'wellName'
                }
            },
            {
                xtype: 'hiddenfield',
                name: 'idBattery',
                id: 'idBattery'
            },
            {
                labelWidth: 110,
                anchor: '100%',
                xtype: 'textfield',
                name: 'battery',
                id: 'battery',
                fieldLabel: me.messages.labels.battery,
                readOnly: true
            },
            {
                xtype: 'fieldcontainer',
                layout: 'hbox',
                items: [
                    {
                        labelWidth: 110,
                        xtype: 'numberfield',
                        minValue: 0,
                        allowBlank: false,
                        name: 'oil',
                        id: 'oil',
                        fieldLabel: me.messages.labels.oil
                    },
                    {
                        xtype: 'hiddenfield',
                        name: 'oilIdMeasureUnit',
                        id: 'oilIdMeasureUnit'
                    },
                    {
                        margins: '0 0 0 10',
                        labelWidth: 110,
                        xtype: 'numberfield',
                        minValue: 0,
                        allowBlank: false,
                        name: 'water',
                        id: 'water',
                        fieldLabel: me.messages.labels.water
                    },
                    {
                        xtype: 'hiddenfield',
                        name: 'waterIdMeasureUnit',
                        id: 'waterIdMeasureUnit'
                    }
                ]
            },
            {
                labelWidth: 110,
                anchor: '50%',
                xtype: 'numberfield',
                minValue: 0,
                allowBlank: false,
                name: 'totalHours',
                id: 'totalHours',
                fieldLabel: me.messages.labels.totalHours
            },
            {
                labelWidth: 110,
                anchor: '100%',
                xtype: 'textareafield',
                name: 'observation',
                id: 'observation',
                fieldLabel: me.messages.labels.observation
            }
        ];
        me.formOptions = {
            region: 'center',
            labelWidth: 100,
            layout: 'fit',
            bodyStyle: 'padding:5px 5px 0',
            items: [
                {
                    xtype: 'panel',
                    layout: 'anchor',
                    border: false,
                    autoScroll: true,
                    items: formItems
                }
            ]
        };
        me.callParent(arguments);
    }
});