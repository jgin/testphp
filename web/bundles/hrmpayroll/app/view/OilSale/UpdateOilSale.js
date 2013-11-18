Ext.define('sisprod.view.OilSale.UpdateOilSale', {
    extend: 'sisprod.view.base.BaseDataWindow',
    alias: 'widget.addOilSale',
    require: [
        'sisprod.view.base.BaseDataWindow'
    ],
    messages: {
        tankLabel: 'Tank',
        quantityLabel: 'Quantity'
    },
    title: 'Update Oil Sale',
    modale: true,
    width: 400,
    initComponent: function() {
        var me = this;
        me.formOptions = {
            bodyPadding: 2,
            fieldDefaults: {
                labelWidth: 120
            },
            items: [
                {
                    xtype: 'hiddenfield',
                    id: 'idOilSale',
                    name: 'idOilSale'
                },
                {
                    xtype: 'combofieldcontainer',
                    anchor: '100%',
                    name: 'idTank',
                    showButtons: false,
                    comboBoxOptions: {
                        xtype: 'combobox',
                        anchor: '100%',
                        fieldLabel: me.messages.tankLabel,
                        labelWidth: 120,
                        store: Ext.create('sisprod.store.TankAll').load(),
                        displayField: 'tankName',
                        valueField: 'idTank',
                        name: 'idTank',
                        id: 'idTank',
                        forceSelection: true,
                        allowBlank: false,
                        readOnly: false
                    }
                },
                {
                    xtype: 'numberfield',
                    minValue: 0,
                    grow: true,
                    name: 'quantity',
                    id: 'quantity',
                    fieldLabel: me.messages.quantityLabel,
                    anchor: '100%',
                    allowBlank: false
                },
                {
                    xtype: 'hiddenfield',
                    name: 'idMeasureUnit',
                    id: 'idMeasureUnit'
                }
            ]
        };
        me.callParent(arguments);
    }
});