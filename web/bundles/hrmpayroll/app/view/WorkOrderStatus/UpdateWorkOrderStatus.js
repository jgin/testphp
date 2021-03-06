/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('sisprod.view.WorkOrderStatus.UpdateWorkOrderStatus', {
    extend: 'sisprod.view.base.BaseDataWindow',
    
    alias: 'widget.updateWorkOrderStatus',
    
    require: [
        'sisprod.view.base.BaseDataWindow'
    ],
    
    title: 'Edit Order Status',
    messages: {
        labels: {
            workOrderStatusName: 'Name',
            hasCause: 'Has Reasons'
        }
    },
    modal: true,
    width: 400,
    layout: 'fit',
    
    initComponent: function(){
        var me = this;
        
        var formItems = [
            {
                xtype: 'hiddenfield',
                name: 'idWorkOrderStatus'
            },
            {
                xtype: 'textfield',
                name: 'workOrderStatusName',
                fieldLabel: me.messages.labels.workOrderStatusName,
                anchor: '100%',
                allowBlank: false,
                maxLength: 100,
                fieldStyle: {textTransform: 'uppercase'}
            },
            {
                xtype: 'checkboxfield',
                name: 'hasCause',
                id: 'hasCause',
                fieldLabel: me.messages.labels.hasCause,
                anchor: '40%',
                inputValue: true
            },
            {
                xtype: 'colorpickercombo',
                name: 'workOrderStatusColor',
                anchor: '50%',
//                value: '#FFFFFF',
                allowBlank: false
            }
        ];
        formItems.push(Ext.create('sisprod.view.WorkOrderStatus.OrderStatusReasonGrid', {
            id:'updateOrderStatusReasonGrid'
        }));
        
        me.formOptions = {
            bodyPadding: 2,
            items: formItems
        };
        
        me.callParent(arguments);
    }
});