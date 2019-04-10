'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var BoundField = require('./BoundField')
// var ProgressMixin = require('./ProgressMixin')

/**
 * Renders a "row" in a form. This can contain manually provided contents, or
 * if a BoundField is given, it will be used to display a field's label, widget,
 * error message(s), help text and async pending indicator.
 */

var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){FormRow[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;FormRow.prototype=Object.create(____SuperProtoOf____Class0);FormRow.prototype.constructor=FormRow;FormRow.__superConstructor__=____Class0;function FormRow(){if(____Class0!==null){____Class0.apply(this,arguments);}}
  // mixins: [ProgressMixin],


  Object.defineProperty(FormRow.prototype,"render",{writable:true,configurable:true,value:function() {
    var attrs = {}
    if (this.props.className) {
      attrs.className = this.props.className
    }
    if (this.props.hidden) {
      attrs.style = {display: 'none'}
    }
    // If content was given, use it
    if (this.props.content) {
      return React.createElement(this.props.component, React.__spread({},  attrs), this.props.content)
    }
    // Otherwise render a BoundField
    var bf = this.props.bf
    var isPending = bf.isPending()
    return React.createElement(this.props.component, React.__spread({},  attrs), 
      bf.label && bf.labelTag(), " ", bf.render(), 
      isPending && ' ', 
      isPending && this.renderProgress(), 
      bf.errors().render(), 
      bf.helpText && ' ', 
      bf.helpTextTag()
    )
  }});


FormRow.defaultProps = {
  component: 'div'
};

FormRow.propTypes = {
  bf: PropTypes.instanceOf(BoundField)
, className: PropTypes.string
, component: PropTypes.any
, content: PropTypes.any
, hidden: PropTypes.bool
};

module.exports = FormRow
