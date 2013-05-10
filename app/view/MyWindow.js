/*
 * File: app/view/MyWindow.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.wd_add',

    height: 265,
    id: 'wd_add',
    width: 581,
    title: 'เพิ่มข้อมูลสมาชิก',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    height: 234,
                    id: 'f_addMember',
                    width: 569,
                    layout: {
                        type: 'absolute'
                    },
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'textfield',
                            x: 370,
                            y: 20,
                            id: 'group',
                            fieldLabel: 'กลุ่ม',
                            labelWidth: 30
                        },
                        {
                            xtype: 'textfield',
                            x: 40,
                            y: 20,
                            id: 'code',
                            fieldLabel: 'รหัสสมาชิก',
                            labelWidth: 75
                        },
                        {
                            xtype: 'textfield',
                            x: 40,
                            y: 60,
                            id: 'name',
                            fieldLabel: 'ชื่อสมาชิก',
                            labelWidth: 75
                        },
                        {
                            xtype: 'textfield',
                            x: 40,
                            y: 100,
                            id: 'branch',
                            fieldLabel: 'สาขา:',
                            labelWidth: 75
                        },
                        {
                            xtype: 'radiogroup',
                            anchor: '-200',
                            x: 40,
                            y: 140,
                            id: 'type',
                            fieldLabel: 'ประเภทสมาชิก',
                            labelWidth: 90,
                            items: [
                                {
                                    xtype: 'radiofield',
                                    id: 'associate',
                                    labelWidth: 50,
                                    inputId: 'associate',
                                    boxLabel: 'สมาชิกสมทบ'
                                },
                                {
                                    xtype: 'radiofield',
                                    id: 'ordinary',
                                    labelWidth: 50,
                                    inputId: 'ordinary',
                                    boxLabel: 'สมาชิกสามัญ'
                                }
                            ]
                        },
                        {
                            xtype: 'datefield',
                            x: 40,
                            y: 180,
                            id: 'dateEstablish',
                            fieldLabel: 'วันจัดตั้งกลุ่ม',
                            labelWidth: 75
                        },
                        {
                            xtype: 'numberfield',
                            x: 290,
                            y: 180,
                            id: 'firstShare',
                            fieldLabel: 'จำนวนหุ้นถือครั้งแรก',
                            labelWidth: 110
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});