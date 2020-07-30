sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("com.sap.teched.teched.controller.Main", {
        onInit: function() {
            var oView = this.getView();
            var oModel800 = this.getOwnerComponent().getModel("800");
            var oTable = oView.byId("table0");
            oTable.setModel(oModel800);
        },

        onSelectionChange: function(oEvent) {
            var oKey = oEvent.getSource().getSelectedKey();
            switch (oKey) {
                case "300":
                    var oView = this.getView();
                    var oModel300 = this.getOwnerComponent().getModel("300");
                    var oTable = oView.byId("table0");
                    oTable.setModel(oModel300);
                    break;
                case "800":
                    var oView = this.getView();
                    var oModel800 = this.getOwnerComponent().getModel("800");
                    var oTable = oView.byId("table0");
                    oTable.setModel(oModel800);
                    break;
                    break;
            }

        }

    });
});
