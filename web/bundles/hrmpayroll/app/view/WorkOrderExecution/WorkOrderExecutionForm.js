/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('sisprod.view.WorkOrderExecution.WorkOrderExecutionForm', {
    extend: 'sisprod.view.base.BaseDataWindow',
    
    alias: 'widget.workOrderExecutionForm',
    
    require: [
        'sisprod.view.base.BaseDataWindow'
    ],
    
    title: 'Work Order Execution',
    record: null,
    showWarningBeforeCancel: true,
    messages: {
        labels: {
            workRequestNumber: 'Work Request Number',
            workRequestFullNumber: 'Request Nbr.',
            workOrderDate: 'Work Order Date',
            workOrderNumber: 'Work Order Number',
            workRequestSource: 'Work Request Source',
            generalData: 'General Data',
            manHours: 'Man Hours',
            machineHours: 'Machine Hours',
            locationName: 'Location',
            workRequestSourceName: 'Request Source',
            equipmentName: 'Equipment',
            sectorName: 'Sector',
            taskScheduler: 'Scheduler',
            workCategoryName: 'Work Category',
            workCategoryDetail: 'Work Type',
            attentionMaximumDate: 'Attent. Max. Date',
            description: 'Description',
            workShop: 'Work Shop',
            quadrille: 'Quadrille',
            workShopCoordinator: 'Coordinator',
            scheduledDate: 'Scheduled Date',
            scheduledStartDate: 'Start',
            scheduledEndDate: 'End',
            serviceOrder: 'Is it Service Order?',
            contractor: 'Contractor',
            serviceOrderNumber: 'Service Nbr.',
            scheduling: 'Scheduling',
            workOrderService: 'Order Service',
            plannedHours: 'Planned Hours',
            peformedHours: 'Performed Hours',
            activityTab: 'Activities',
            productTab: 'Materials',
            partialSave: 'Partial Save',
            closeOrder: 'Close Order',
            executeData: 'Execution',
            percentageUseResources: 'Percentage usage resources',
            percentageAdvance: 'Percenge Advance',
            executionDates: 'Execution Dates',
            executionData: 'Execution Data',
            comment: 'Comment',
            responsibleOfInstallation: 'Responsible Of Installation'
        },
        validations: {
            selectSector: 'Select sector first...',
            selectWorkCategory: 'Select work category first...',
            selectWorkShop: 'Select workshop first...'
        },
        loadTemplateText: 'Load Template',
        workRequestData: 'Work Request Data',
        resourcesData: 'Resources',
        messageText: 'Message',
        quadrilleData:'Quadrille',
        evidenceData:'Evidence Files'
    },
    modal: true,
    width: 850,
    layout: 'fit',
    controller: null,
    initComponent: function(){
        var me = this;
        
        var tabItems = new Array();
        
        var mainDataItems = new Array();
        mainDataItems.push(me.getMainDataItems());
        mainDataItems.push(me.getScheduleItems());
        //mainDataItems.push(me.getExecuteItems());
        if(!me.record.data.ownResources){
            mainDataItems.push(me.getWorkServiceItems());
        }
        else{
            this.width = 700;
        }
        
        tabItems.push({
            xtype: 'panel',
            title: me.messages.labels.generalData,
            items: mainDataItems
        });
        
        tabItems.push({
            xtype: 'panel',
            title: me.messages.labels.executionData,
            items: [
                me.getExecuteItems()
            ]
        });
        
        var resourcesTabItems = new Array();
        
        var activityTabs = new Array();
        activityTabs.push(Ext.create('sisprod.view.WorkOrderExecution.ActivityExecutionOtGrid', {id:'activityExecutionOtGrid', controller:this.controller}));
        activityTabs.push(Ext.create('sisprod.view.WorkOrderExecution.NewActivityGrid', {id:'newActivityGrid', controller: this.controller}));
        resourcesTabItems.push({
            xtype: 'tabpanel',
            title: me.messages.labels.activityTab,
            items: activityTabs,
            tabPosition: 'bottom'
        });
        
        var productTabs = new Array();
        productTabs.push(Ext.create('sisprod.view.WorkOrderExecution.WorkOrderScheduledProductGrid'));
        productTabs.push(Ext.create('sisprod.view.WorkOrderExecution.WorkOrderProductGrid'));
        resourcesTabItems.push({
            xtype: 'tabpanel',
            title: me.messages.labels.productTab,
            items: productTabs,
            tabPosition: 'bottom'
        });
        
        var quadrilleGrid=Ext.create('sisprod.view.WorkOrderExecution.QuadrilleEmployeeGrid', {id:'quadrilleEmployeesGrid'});
        var quadrilleEmployeeControls = new Array();
        quadrilleEmployeeControls.push(quadrilleGrid);
        var evidenceFilesGrid=Ext.create('sisprod.view.WorkOrderExecution.EvidenceFilesGrid', {
            id:'evidenceFilesGrid',
            idWorkOrder:me.record.data.idWorkOrder,
            store: Ext.create('sisprod.store.EvidenceFileByWorkOrderStore').load({params:{idWorkOrder:me.record.data.idWorkOrder}})
        });
        
        var evidenceFilesControls = new Array();
        evidenceFilesControls.push(evidenceFilesGrid);
        
        var resourcesTab = Ext.create('Ext.tab.Panel', {
            items: resourcesTabItems
        });
       
        
        tabItems.push({
            xtype: 'panel',
            title: me.messages.resourcesData,
            items: [resourcesTab],
            layou: 'hbox',
            tbar: [
                {
                    xtype: 'fieldset',
                    flex: 1,
                    title: me.messages.labels.plannedHours,
                    margins: '0 0 0 5',
                    items: [
                        {
                            xtype: 'numberfield',
                            id: 'manHours',
                            name: 'manHours',
                            fieldLabel: me.messages.labels.manHours,
                            readOnly:true,
                            allowDecimals: true,
                            decimalSeparator:'.',
                            value:0,
                            minValue:0,
                            flex: 2
                        },
                        {
                            xtype: 'numberfield',
                            id: 'machineHours',
                            name: 'machineHours',
                            fieldLabel: me.messages.labels.machineHours,
                            readOnly:true,
                            allowDecimals: true,
                            decimalSeparator:'.',
                            value:0,
                            minValue:0,
                            flex: 2
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: me.messages.labels.peformedHours,
                    margins: '0 5 0 5',
                    flex: 1,
                    items: [
                        {
                            xtype: 'numberfield',
                            id: 'performedManHours',
                            name: 'performedManHours',
                            fieldLabel: me.messages.labels.manHours,
                            readOnly:true,
                            allowDecimals: true,
                            decimalSeparator:'.',
                            value:0,
                            minValue:0,
                            flex: 2
                        },
                        {
                            xtype: 'numberfield',
                            id: 'performedMachineHours',
                            name: 'performedMachineHours',
                            fieldLabel: me.messages.labels.machineHours,
                            readOnly:true,
                            allowDecimals: true,
                            decimalSeparator:'.',
                            value:0,
                            minValue:0,
                            flex: 2
                        }
                    ]
                }
            ]
        }
        );
            
        if(me.record.data.ownResources){
            var quadrilleGrid=Ext.create('sisprod.view.WorkOrderExecution.QuadrilleEmployeeGrid', {id:'quadrilleEmployeesGrid'});
            var quadrilleEmployeeControls = new Array();
            quadrilleEmployeeControls.push(quadrilleGrid);
            tabItems.push({
                xtype: 'panel',
                title: me.messages.labels.quadrille,
                items: quadrilleEmployeeControls
            });
        }
        
        tabItems.push({
            xtype: 'panel',
            title: me.messages.evidenceData,
            items: evidenceFilesControls,
            layou: 'hbox'
        });
        
        var tabPanel = Ext.create('Ext.tab.Panel', {
            items: tabItems
        });
        
        me.formOptions = {
            region: 'center',
            labelWidth: 120,
            bodyStyle: 'padding:5px 5px 0',
            layout: 'fit',
            buttons: [
                {
                    text: me.messages.labels.closeOrder,
                    action: 'closeOrder',
                    iconCls: 'deleteFile'
                },
                {
                    text: me.messages.labels.partialSave,
                    action: 'partialSave',
                    iconCls: 'save'
                },
                {
                    text: me.windowMessages.closeText,
                    iconCls: 'cancel',
                    action: 'close',
                    handler: function() {
                        var window = me;
                        window.close();
                    }
                }
            ],
            items: [
                {
                    xtype: 'panel',
                    border: false,
                    autoScroll: true,
                    items: tabPanel
                }
            ]
        };
        me.callParent(arguments);
    },
    
    getMainDataItems: function(){
        var me = this;
        var items = {};
        items = {
            xtype:'fieldset',
            columnWidth: 0.5,
            margins: '0 0 0 0',
            title: me.messages.workRequestData + '',
            defaultType: 'textfield',
            defaults: {anchor: '100%'},
            layout: 'anchor',
            items: [
                {
                    id: 'idWorkOrder',
                    name: 'idWorkOrder',
                    xtype: 'hiddenfield'
                },
                {
                    id: 'idQuadrille',
                    name: 'idQuadrille',
                    xtype: 'hiddenfield'
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        padding: '0 10 0 0'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'workRequestFullNumber',
                            id: 'workRequestFullNumber',
                            flex: 1,
                            fieldLabel: me.messages.labels.workRequestFullNumber,
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            name: 'locationName',
                            id: 'locationName',
                            flex: 1,
                            fieldLabel: me.messages.labels.locationName,
                            readOnly: true,
                            margin: '10 0 0 10'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        padding: '0 10 0 0'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'workRequestSourceName',
                            id: 'workRequestSourceName',
                            flex: 1,
                            fieldLabel: me.messages.labels.workRequestSourceName,
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            name: 'equipmentName',
                            id: 'equipmentName',
                            flex: 1,
                            fieldLabel: me.messages.labels.equipmentName,
                            readOnly: true,
                            margin: '0 0 0 10'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'sectorName',
                            id: 'sectorName',
                            flex: 3,
                            fieldLabel: me.messages.labels.sectorName,
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            name: 'taskSchedulerName',
                            fieldLabel: me.messages.labels.taskScheduler,
                            id: 'taslSchedulerName',
                            readOnly: true,
                            flex: 5,
                            margin: '0 0 0 10'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'workCategoryName',
                            id: 'workCategoryName',
                            flex: 1,
                            fieldLabel: me.messages.labels.workCategoryName, 
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            margin: '0 0 0 10',
                            fieldLabel: me.messages.labels.workCategoryDetail,
                            name: 'workCategoryDetailName',
                            id: 'workCategoryDetailName',
                            readOnly: true
                        }
                    ]
                },
                {
                    xtype: 'datefield',
                    name: 'attentionMaximumDate',
                    id: 'attentionMaximumDate',
                    fieldLabel: me.messages.labels.attentionMaximumDate,
                    anchor: '40%',
                    readOnly: true
                },
                {
                    xtype:'fieldset',
                    columnWidth: 0.5,
                    title: me.messages.labels.description,
                    defaultType: 'textfield',
                    defaults: {anchor: '100%'},
                    layout: 'anchor',
                    items: [
                        {
                            xtype: 'textareafield',
                            anchor: '100%',
                            height: 40,
                            name: 'description',
                            id: 'description',
                            allowBlank: false,
                            readOnly: true
                        }
                    ]
                }
            ]
        };
        return items;
    },
    
    getScheduleItems: function(){
        var me = this;
        var items = {};
        items = {
            xtype:'fieldset',
            columnWidth: 0.5,
            margins: '0 0 0 0',
            title: me.messages.labels.scheduling,
            defaultType: 'textfield',
            defaults: {anchor: '100%'},
            layout: 'anchor',
            items: [
                {
                    xtype: 'fieldcontainer',
                    anchor: '100%',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            name: 'workshopName',
                            id: 'workshopName',
                            fieldLabel: me.messages.labels.workShop,
                            readOnly: true  
                        },
                        {
                            xtype: 'textfield',
                            name: 'quadrileName',
                            id: 'quadrileName',
                            flex: 1,
                            fieldLabel: me.messages.labels.quadrille,
                            margin: '0 0 0 10',
                            readOnly: true
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    fieldLabel: me.messages.labels.workShopCoordinator,
                    anchor: '65%',
                    name: 'workshopCoordinatorName',
                    id: 'workshopCoordinatorName',
                    readOnly: true
                },
                {
                    xtype: 'fieldcontainer',
                    fieldLabel: me.messages.labels.scheduledDate,
                    anchor: '60%',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'datefield',
                            name: 'startDate',
                            id: 'startDate',
                            flex: 1,
                            fieldLabel: me.messages.labels.scheduledStartDate,
                            labelWidth: 30,
                            labelSeparator: '',
                            readOnly: true
                        },
                        {
                            xtype: 'datefield',
                            name: 'endDate',
                            id: 'endDate',
                            flex: 1,
                            readOnly: true,
                            labelWidth: 30,
                            labelSeparator: '',
                            fieldLabel: me.messages.labels.scheduledEndDate,
                            margin: '0 0 0 10'
                        }
                    ]
                }
            ]
        };
        return items;
    },
    
    getWorkServiceItems: function(){
        var me = this;
        var items = {};
        items = {
            xtype:'fieldset',
            columnWidth: 0.5,
            id: 'workServicePanel',
            margins: '0 0 0 0',
            title: me.messages.labels.workOrderService,
            defaultType: 'textfield',
            defaults: {anchor: '100%'},
            layout: 'anchor',
            items: [
                {
                    xtype: 'fieldcontainer',
                    anchor: '100%',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 3,
                            hideTrigger: false,
                            name: 'entityName',
                            id: 'entityName',
                            fieldLabel: me.messages.labels.contractor,
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            flex: 2,
                            name: 'serviceOrderNumber',
                            id: 'serviceOrderNumber',
                            fieldLabel: me.messages.labels.serviceOrderNumber,
                            readOnly: true,
                            margin: '0 0 0 10'
                        }
                    ]
                }
            ]
        };
        return items;
    },
            
    getExecuteItems: function(){
        var me = this;
        var items = {};
        items = {
            xtype:'fieldset',
            columnWidth: 0.5,
            id: 'executePanel',
            title: me.messages.labels.executeData,
            defaultType: 'textfield',
            margins: '0 0 0 0',
            fieldDefaults: {anchor: '100%', labelWidth: 170},
            layout: 'anchor',
            items: [
                        {
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'numberfield',
                                    hideTrigger: false,
                                    id: 'percentageUsageResources',
                                    name: 'percentageUsageResources',
                                    minValue: 0,
                                    labelWidth: 120,
                                    fieldLabel: me.messages.labels.percentageUseResources + '(%)',
                                    readOnly: true
                                },
                                {
                                    xtype: 'numberfield',
                                    name: 'percentageAdvance',
                                    id: 'percentageAdvance',
                                    minValue: 0,
                                    maxValue: 100,
                                    labelWidth: 120,
                                    fieldLabel: me.messages.labels.percentageAdvance + '(%)',
                                    margins: '0 0 0 10',
                                    allowBlank: false
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            fieldLabel: me.messages.labels.executionDates,
                            layout: 'hbox',
                            anchor: '80%',
                            labelWidth: 120,
                            items: [
                                {
                                    xtype: 'datefield',
                                    vtype: 'daterange',
                                    name: 'executionStartDate',
                                    id: 'executionStartDate',
                                    fieldLabel: me.messages.labels.scheduledStartDate,
                                    labelWidth: 35,
                                    flex: 1,
                                    labelSeparator: '',
                                    allowBlank: false,
                                    endDateField: 'executionEndDate'
                                },
                                {
                                    xtype: 'datefield',
                                    vtype: 'daterange',
                                    name: 'executionEndDate',
                                    id: 'executionEndDate',
                                    labelWidth: 25,
                                    flex: 1,
                                    labelSeparator: '',
                                    fieldLabel: me.messages.labels.scheduledEndDate,
                                    margin: '0 0 0 10',
                                    startDateField: 'executionStartDate'
                                }
                            ]
                        },
                        { 
                            xtype: 'sensitivecombocontainer', 
                            showAddButton: false, 
                            anchor: '80%', 
                            sensitiveComboBoxOptions:{ 
                                name: 'idResponsibleOfInstallation', 
                                labelWidth: 120, 
                                hideTrigger: false, 
                                fieldLabel: me.messages.labels.responsibleOfInstallation, 
                                store: Ext.create('sisprod.store.EmployeeFromGMP'), 
                                emptyText: me.messages.labels.responsibleOfInstallation, 
                                id: 'idResponsibleOfInstallation', 
                                forceSelection : true, 
                                allowBlank: true, 
                                displayTpl: Ext.create('Ext.XTemplate', 
                                    '<tpl for=".">','{personFullName} ({fullDocumentNumber})','</tpl>'), 
                                valueField: 'idEmployee', 
                                listConfig: { 
                                    getInnerTpl: function() { 
                                        return '{personFullName} ({fullDocumentNumber})'; 
                                    } 
                                } 
                            } 
                        },
                        {
                            xtype:'fieldset',
                            columnWidth: 0.5,
                            title: me.messages.labels.comment,
                            defaultType: 'textfield',
                            defaults: {anchor: '100%'},
                            layout: 'anchor',
                            items: [
                                {
                                    xtype: 'textareafield',
                                    anchor: '100%',
                                    height: 40,
                                    name: 'comment',
                                    id: 'comment'
                                }
                            ]
                        }
            ]
        };
        return items;
    },
            
    getRecord: function(){
        return this.record;
    }
});