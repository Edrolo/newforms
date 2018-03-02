'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var object = require('isomorph/object')

var ErrorObject = require('./ErrorObject')
var Form = require('./Form')
var FormRow = require('./FormRow')
// var ProgressMixin = require('./ProgressMixin')

var $__0=  require('./constants'),NON_FIELD_ERRORS=$__0.NON_FIELD_ERRORS
var $__1=   require('./util'),autoIdChecker=$__1.autoIdChecker,getProps=$__1.getProps

var formProps = {
  autoId: autoIdChecker
, controlled: PropTypes.bool
, data: PropTypes.object
, emptyPermitted: PropTypes.bool
, errorConstructor: PropTypes.func
, errors: PropTypes.instanceOf(ErrorObject)
, files: PropTypes.object
, initial: PropTypes.object
, labelSuffix: PropTypes.string
, onChange: PropTypes.func
, prefix: PropTypes.string
, validation: PropTypes.oneOfType([
    PropTypes.string
  , PropTypes.object
  ])
}

/**
 * Renders a Form. A form instance or constructor can be given. If a constructor
 * is given, an instance will be created when the component is mounted, and any
 * additional props will be passed to the constructor as options.
 */

 var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){RenderForm[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;RenderForm.prototype=Object.create(____SuperProtoOf____Class1);RenderForm.prototype.constructor=RenderForm;RenderForm.__superConstructor__=____Class1;function RenderForm(){if(____Class1!==null){____Class1.apply(this,arguments);}}
  // mixins: [ProgressMixin],

  Object.defineProperty(RenderForm.prototype,"getChildContext",{writable:true,configurable:true,value:function() {
    return {form: this.form}
  }});

  Object.defineProperty(RenderForm.prototype,"getDefaultProps",{writable:true,configurable:true,value:function() {
    return {
      component: 'div'
    , row: FormRow
    , rowComponent: 'div'
    }
  }});

  Object.defineProperty(RenderForm.prototype,"componentWillMount",{writable:true,configurable:true,value:function() {
    if (this.props.form instanceof Form) {
      this.form = this.props.form
    }
    else {
      this.form = new this.props.form(object.extend({
        onChange: this.forceUpdate.bind(this)
      }, getProps(this.props, Object.keys(formProps))))
    }
  }});

  Object.defineProperty(RenderForm.prototype,"getForm",{writable:true,configurable:true,value:function() {
    return this.form
  }});

  Object.defineProperty(RenderForm.prototype,"render",{writable:true,configurable:true,value:function() {
    // Allow a single child to be passed for custom rendering - passing any more
    // will throw an error.
    if (React.Children.count(this.props.children) !== 0) {
      // Pass a form prop to the child, which will also be available via context
      return React.cloneElement(React.Children.only(this.props.children), {form: this.form})
    }

    // Default rendering
    var $__0=   this,form=$__0.form,props=$__0.props
    var attrs = {}
    if (this.props.className) {
      attrs.className = props.className
    }
    var topErrors = form.nonFieldErrors()
    var hiddenFields = form.hiddenFields().map(function(bf)  {
      var errors = bf.errors()
      if (errors.isPopulated) {
        topErrors.extend(errors.messages().map(function(error)  {
          return '(Hidden field ' + bf.name + ') ' + error
        }))
      }
      return bf.render()
    })

    return React.createElement(props.component, React.__spread({},  attrs), 
      topErrors.isPopulated() && React.createElement(props.row, {
        className: form.errorCssClass, 
        component: props.rowComponent, 
        content: topErrors.render(), 
        key: form.addPrefix(NON_FIELD_ERRORS)}
      ), 
      form.visibleFields().map(function(bf)  {return React.createElement(props.row, {
        bf: bf, 
        className: bf.cssClasses(), 
        component: props.rowComponent, 
        key: bf.htmlName, 
        progress: props.progress}
      );}), 
      form.nonFieldPending() && React.createElement(props.row, {
        className: form.pendingRowCssClass, 
        component: props.rowComponent, 
        content: this.renderProgress(), 
        key: form.addPrefix('__pending__')}
      ), 
      hiddenFields.length > 0 && React.createElement(props.row, {
        className: form.hiddenFieldRowCssClass, 
        component: props.rowComponent, 
        content: hiddenFields, 
        hidden: true, 
        key: form.addPrefix('__hidden__')}
      )
    )
  }});


RenderForm.propTypes = object.extend({}, formProps, {
  className: PropTypes.string      // Class for the component wrapping all rows
, component: PropTypes.any         // Component to wrap all rows
, form: PropTypes.oneOfType([      // Form instance or constructor
    PropTypes.func,
    PropTypes.instanceOf(Form)
  ]).isRequired
, row: PropTypes.any               // Component to render form rows
, rowComponent: PropTypes.any      // Component to wrap each row
});

RenderForm.childContextTypes = {
  form: PropTypes.instanceOf(Form)
};

module.exports = RenderForm
