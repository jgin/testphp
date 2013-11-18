Ext.define('sisprod.controller.SpecialMeasureController', {
    extend: 'sisprod.controller.Base',
    stores: ['SpecialMeasureStore'],
    models: ['SpecialMeasureModel'],
    entityName: 'SpecialMeasure',
    refs: [{ref: 'listSpecialMeasure', selector: 'listSpecialMeasure'}],
    views: ['SpecialMeasure.ListSpecialMeasure'],
    requires: [
        'sisprod.store.SpecialMeasureStore'
    ],
    messages: {
    },
    deleteOptions: {
        deleteKeys: ['idSpecialMeasure'],
        caption: function(data) {
            return data[0];
        }
    },
    init: function() {
        this.control({
            'listSpecialMeasure button[action=activate]': {
                click: this.activate
            },
            'listSpecialMeasure button[action=add]': {
                click: this.showAdd
            },
            'listSpecialMeasure button[action=update]': {
                click: this.showUpdateOnButton
            },
            'listSpecialMeasure dataview': {
                click: this.showUpdate
            },
            'listSpecialMeasure button[action=delete]': {
                click: this.destroy
            },
            'listSpecialMeasure button[action=print]': {
                click: this.showPrint
            },
//            'basePrintWindow button[action=print]': {
//                click: this.onPrint
//            },
            'addSpecialMeasure button[action=save]': {
                click: this.saveEntity
            },
            'addSpecialMeasure': {
                afterrender: this.showAddForm
            },
            'updateSpecialMeasure': {
                afterrender: this.showAddForm
            },
            'updateSpecialMeasure button[action=save]': {
                click: this.saveEntity
            },
            'addSpecialMeasure combobox[id=idWell]': {
                select: this.well_select
            }
        });
        this.callParent(arguments);
    },
    getGridForEntity: function() {
        var tabGrid = this.getListSpecialMeasure();
        return tabGrid.getGridPanel();
    },
    autoMappingFunction: function(grid, window, record) {
        var me = this;
        var formPanel = window.down('form');
        formPanel.down('#idSpecialMeasure').setValue(record.raw['idSpecialMeasure']);
        
        formPanel.loadRecord(record);
        var cmbWell = formPanel.query("[name=idWell]")[0];
        if (Ext.isDefined(cmbWell)) {
            cmbWell.setValue(new Ext.create(sisprod.getApplication().getModelName('WellSwabTemp'), {
                idWell: record.raw.well.idWell,
                wellName: record.raw.well.wellName
            }));
        }
        formPanel.down("[name=idBattery]").setValue(record.raw.battery.idBattery);
        formPanel.down("[name=battery]").setValue(record.raw.battery.batteryName);
    },
    well_select: function(combo, selectedRecords, eOpts) {
        var form = combo.up("form");
        this.showBatteryCode(selectedRecords[0].raw.battery, form);
    },
    showBatteryCode: function(rawBattery, form) {
        this.clearBatteryCode(form);
        form.down("[name=idBattery]").setValue(rawBattery.idBattery);
        form.down("[name=battery]").setValue(rawBattery.batteryName);
    },
    clearBatteryCode: function(form) {
        form.down("[name=idBattery]").setValue("");
        form.down("[name=battery]").setValue("");
    },
    showAddForm: function(form) {
        var me = this;
        // Muestra los valores iniciales de las unidades de medida
        Ext.BaseAjax.request({
            url: 'rest/configParam/getDefaultMeasureUnits.htm',
            method: 'POST',
            success: function(response, options) {
                var objResponse = Ext.decode(response.responseText);
                if (objResponse.success === true) {
                    Ext.getCmp("oil").setFieldLabel(form.messages.labels.oil + " (" + objResponse.defaultMeasureUnit.oil.measureUnitAcronym + ")");
                    Ext.getCmp("oilIdMeasureUnit").setValue(objResponse.defaultMeasureUnit.oil.idMeasureUnit);
                    Ext.getCmp("water").setFieldLabel(form.messages.labels.water + " (" + objResponse.defaultMeasureUnit.water.measureUnitAcronym + ")");
                    Ext.getCmp("waterIdMeasureUnit").setValue(objResponse.defaultMeasureUnit.water.idMeasureUnit);
                }
                else {
                    showAlertMessage(objResponse.message);
                }
            },
            failure: function(response, options) {
            }
        });
    }
});