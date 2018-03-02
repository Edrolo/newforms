'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var object = require('isomorph/object')

var FormRow = require('./FormRow')
var FormSet = require('./FormSet')
// var ProgressMixin = require('./ProgressMixin')
var RenderForm = require('./RenderForm')

var $__0=  require('./constants'),NON_FIELD_ERRORS=$__0.NON_FIELD_ERRORS
var $__1=   require('./util'),autoIdChecker=$__1.autoIdChecker,getProps=$__1.getProps

var formsetProps = {
  canDelete: PropTypes.bool
, canOrder: PropTypes.bool
, extra: PropTypes.number
, form: PropTypes.func
, maxNum: PropTypes.number
, minNum: PropTypes.number
, validateMax: PropTypes.bool
, validateMin: PropTypes.bool

, autoId: autoIdChecker
, controlled: PropTypes.bool
, data: PropTypes.object
, errorConstructor: PropTypes.func
, files: PropTypes.object
, initial: PropTypes.object
, onChange: PropTypes.func
, prefix: PropTypes.string
, validation: PropTypes.oneOfType([
    PropTypes.string
  , PropTypes.object
  ])
}

/**
 * Renders a Formset. A formset instance or constructor can be given. If a
 * constructor is given, an instance will be created when the component is
 * mounted, and any additional props will be passed to the constructor as
 * options.
 */

var ____Class2=React.Component;for(var ____Class2____Key in ____Class2){if(____Class2.hasOwnProperty(____Class2____Key)){RenderFormSet[____Class2____Key]=____Class2[____Class2____Key];}}var ____SuperProtoOf____Class2=____Class2===null?null:____Class2.prototype;RenderFormSet.prototype=Object.create(____SuperProtoOf____Class2);RenderFormSet.prototype.constructor=RenderFormSet;RenderFormSet.__superConstructor__=____Class2;function RenderFormSet(){if(____Class2!==null){____Class2.apply(this,arguments);}}
  // mixins: [ProgressMixin],

  Object.defineProperty(RenderFormSet.prototype,"componentWillMount",{writable:true,configurable:true,value:function() {
    if (this.props.formset instanceof FormSet) {
      this.formset = this.props.formset
    }
    else {
      this.formset = new this.props.formset(object.extend({
        onChange: this.forceUpdate.bind(this)
      }, getProps(this.props, Object.keys(formsetProps))))
    }
  }});

  Object.defineProperty(RenderFormSet.prototype,"getFormset",{writable:true,configurable:true,value:function() {
    return this.formset
  }});

  Object.defineProperty(RenderFormSet.prototype,"render",{writable:true,configurable:true,value:function() {
    var $__0=   this,formset=$__0.formset,props=$__0.props
    var attrs = {}
    if (this.props.className) {
      attrs.className = props.className
    }
    var topErrors = formset.nonFormErrors()

    return React.createElement(props.component, React.__spread({},  attrs), 
      topErrors.isPopulated() && React.createElement(props.row, {
        className: formset.errorCssClass, 
        content: topErrors.render(), 
        key: formset.addPrefix(NON_FIELD_ERRORS), 
        rowComponent: props.rowComponent}
      ), 
      formset.forms().map(function(form)  {return React.createElement(RenderForm, {
        form: form, 
        formComponent: props.formComponent, 
        progress: props.progress, 
        row: props.row, 
        rowComponent: props.rowComponent}
      );}), 
      formset.nonFormPending() && React.createElement(props.row, {
        className: formset.pendingRowCssClass, 
        content: this.renderProgress(), 
        key: formset.addPrefix('__pending__'), 
        rowComponent: props.rowComponent}
      ), 
      props.useManagementForm && React.createElement(RenderForm, {
        form: formset.managementForm(), 
        formComponent: props.formComponent, 
        row: props.row, 
        rowComponent: props.rowComponent}
      )
    )
  }});


RenderFormSet.propTypes = object.extend({}, formsetProps, {
  className: PropTypes.string         // Class for the component wrapping all forms
, component: PropTypes.any            // Component to wrap all forms
, formComponent: PropTypes.any        // Component to wrap each form
, formset: PropTypes.oneOfType([      // Formset instance or constructor
    PropTypes.func,
    PropTypes.instanceOf(FormSet)
  ])
, row: PropTypes.any                  // Component to render form rows
, rowComponent: PropTypes.any         // Component to wrap each form row
, useManagementForm: PropTypes.bool   // Should ManagementForm hidden fields be rendered?
});

RenderFormSet.defaultProps = {
  component: 'div'
, formComponent: 'div'
, formset: FormSet
, row: FormRow
, rowComponent: 'div'
, useManagementForm: false
};

module.exports = RenderFormSet