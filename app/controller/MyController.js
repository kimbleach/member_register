/*
 * File: app/controller/MyController.js
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

Ext.define('MyApp.controller.MyController', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'addInfo',
            selector: 'wd_add'
        }
    ],

    onButtonClick: function(button, e, eOpts) {
        console.log('sdddddd');

        var pnWindow = this.getAddInfo();

        if(!pnWindow){
            pnWindow = Ext.create('MyApp.view.wd_add');
            pnWindow.show();
        }
    },

    init: function(application) {
        this.control({
            "pn_find #btn_add": {
                click: this.onButtonClick
            }
        });
    }

});
