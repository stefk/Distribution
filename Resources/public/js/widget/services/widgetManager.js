'use strict';

widgetsApp
    .factory("widgetManager", ["$http", "$q", "widgetFactory", "$filter", function($http, $q, widgetFactory, $filter){
        return {
            widgets: [],
            emptyWidget: [],
            form: [],
            init: function() {
                var deferred = $q.defer();
                var self = this;
                $http.get(Routing.generate("icap_portfolio_internal_widget"))
                    .success(function(data) {
                        var widgets = [];
                        angular.forEach(data, function(rawWidget) {
                            var widget = widgetFactory.getWidget(rawWidget.type);
                            widgets.push(new widget(rawWidget));
                        });
                        self.widgets = widgets;
                        deferred.resolve(widgets);
                    }).error(function(msg, code) {
                        deferred.reject(msg);
                    });
                return deferred.promise;

            },
            create: function(type) {
                var newWidget;
                var widget = widgetFactory.getWidget(type);
                if (this.emptyWidget[type]) {
                    newWidget = new widget(angular.copy(this.emptyWidget[type]));
                    newWidget.id = new Date().getTime();
                    this.edit(newWidget);
                }
                else {
                    newWidget = widget.create();
                    var self = this;
                    newWidget.$promise.then(function() {
                        self.emptyWidget[type] = angular.copy(newWidget);
                        self.edit(newWidget);
                    });
                }

                newWidget.isEditing = true;

                this.widgets.push(newWidget);
            },
            edit: function(widget) {
                widget.copy = angular.copy(widget);
                if (!widget.isEditing) {
                    widget.isEditing  = true;
                    this.loadForm(widget);
                }
            },
            loadForm: function(widget) {
                if (this.form[widget.type]) {
                    widget.setFormView(this.form[widget.type]);
                    return true;
                }
                var self = this;

                return $http.get(widget.getFormUrl()).success(function(formViewData) {
                    widget.setFormView(formViewData.form);
                    self.form[widget.type] = formViewData.form;
                });
            }
        };
    }]);