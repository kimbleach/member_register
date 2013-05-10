/*
 * File: app/view/MyGridPanel.js
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

Ext.define('MyApp.view.MyGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mygridpanel',

    height: 174,
    title: 'ตารางข้อมูลสมาชิก',
    store: 'member',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'id',
                    text: 'Id'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'code',
                    text: 'Code'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'group',
                    text: 'Group'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'name',
                    text: 'Name'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'branch',
                    text: 'Branch'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'type',
                    text: 'Type'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'date_start',
                    text: 'Date_start'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'share_first',
                    text: 'Share_first'
                }
            ]
        });

        me.callParent(arguments);
    }

});