

Ext.define('sisprod.view.CompressorStopReason.AddCompressorStopReason', {
    extend: 'sisprod.view.base.BaseDataWindow',
    alias: 'widget.addCompressorStopReason',
    require: [
        'sisprod.view.base.BaseDataWindow'
    ],
    
    messages:{
        compressorStopReasonNameLabel:"Name",
        compressorStopReasonAcronymLabel:"Acronym",
        discountedLabel:"Is Discounted"
    },
    title: 'Add Compressor Stop Reason',
    modal: true,
    width: 400,
    initComponent:function(){
        var me =this;
        me.formOptions= {
            bodyPadding: 2,
            items: [
                {
                    xtype: 'textfield',
                    grow: true,
                    name: 'compressorStopReasonName',
                    fieldLabel:me.messages.compressorStopReasonNameLabel,
                    fieldStyle: {
                        textTransform: 'uppercase'
                    },
                    anchor: '100%',
                    allowBlank: false,
                    maxLength: 150
                },
                {
                    xtype: 'textfield',
                    grow: true,
                    name: 'compressorStopReasonAcronym',
                    fieldLabel:me.messages.compressorStopReasonAcronymLabel,
                    fieldStyle: {
                        textTransform: 'uppercase'
                    },
                    anchor: '100%',
                    allowBlank: false,
                    maxLength: 20
                },
                {
                    xtype: 'checkboxfield',
                    grow: true,
                    name: 'discounted',
                    labelWidth:100,
                    fieldLabel:me.messages.discountedLabel,
                    anchor: '100%',
                    allowBlank: false
                }
            ]
        };
        me.callParent(arguments);
    }
});