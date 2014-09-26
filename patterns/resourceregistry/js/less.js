/* global alert */

define([
  'jquery',
  'mockup-ui-url/views/base',
  'underscore',
  'mockup-utils',
  'mockup-patterns-resourceregistry-url/js/fields',
], function($, BaseView, _, utils, fields) {
  'use strict';

  var LessVariablesView = BaseView.extend({
    tagName: 'div',
    className: 'tab-pane lessvariables',
    template: _.template(
      '<div class="clearfix">' +
        '<div class="plone-btn-group pull-right">' +
          '<button class="plone-btn plone-btn-default add-variable">Add variable</button>' +
          '<button class="plone-btn plone-btn-default save">save</button>' +
        '</div>' +
      '</div>' +
      '<div class="row clearfix">' +
        '<div class="form col-md-12"></div></div>'),
    events: {
      'click .plone-btn.save': 'saveClicked',
      'click .plone-btn.add-variable': 'addVariable'
    },

    initialize: function(options){
      BaseView.prototype.initialize.apply(this, [options]);
      this.loading = this.options.tabView.loading;
    },

    saveClicked: function(e){
      e.preventDefault();
      var self = this;
      self.options.tabView.loading.show();
      $.ajax({
        url: self.options.data.manageUrl,
        type: 'POST',
        dataType: 'json',
        data: {
          action: 'save-less-variables',
          data: JSON.stringify(self.options.data.lessvariables),
          _authenticator: utils.getAuthenticator()
        },
        success: function(){
          self.options.tabView.loading.hide();
        },
        error: function(){
          self.options.tabView.loading.hide();
          alert('error saving less variables');
        }
      });
    },

    addVariable: function(e){
      e.preventDefault();
      var self = this;
      self.options.data.lessvariables[utils.generateId('new-variable-')] = '';
      self.render();
    },

    inputChanged: function(){
      var self = this;
      var data = {};
      self.$('.form-group').each(function(){
        data[$(this).find('.field-name').val()] = $(this).find('.field-value').val();
      });
     self.options.data.lessvariables = data;
    },

    afterRender: function(){
      var self = this;
      var settings = self.options.data.lessvariables;
      var $form = self.$('.form');
      _.each(_.keys(settings), function(name){
        $form.append((new fields.VariableFieldView({
          registryData: settings,
          title: name,
          name: name,
          value: settings[name],
          onChange: function(){
            self.inputChanged();
          }
         }).render().el));
      });
    }
  });

  return LessVariablesView;

});