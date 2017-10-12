// @flow

import React from "react"
import PropTypes from "prop-types"
import {
  ButtonSizes,
  ButtonColors,
  type ButtonColorsUnion,
  type ButtonSizesUnion,
} from "../enums"
import {
  GeneralPropTypes,
  FlexboxPropTypes,
  createClassName,
  generalClassNames,
  removeProps,
  objectKeys,
  objectValues,
} from "../utils"

/**
 * Button property types.
 *
 * @type {Object}
 */
const ButtonPropTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  color: PropTypes.oneOf(objectValues(ButtonColors)),
  size: PropTypes.oneOf(objectValues(ButtonSizes)),
  isHollow: PropTypes.bool,
  isExpanded: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isDropdown: PropTypes.bool,
}

/**
 * Button component.
 * http://foundation.zurb.com/sites/docs/button.html
 *
 * @param {Object} props
 * @returns {Object}
 */

type Props = {
  noDefaultClassName: string,
  className: string,
  size: ButtonSizesUnion,
  color: ButtonColorsUnion,
  isHollow: Boolean,
  isExpanded: Boolean,
  isDisabled: Boolean,
  isDropdown: Boolean,
  isArrowOnly: Boolean,
}

export const Button = (props: Props) => {
  const passProps = removeProps(props, objectKeys(Button.propTypes))

  return <button {...passProps} className={createButtonClassName(props)} />
}

Button.propTypes = ButtonPropTypes

/**
 * Link button component.
 * http://foundation.zurb.com/sites/docs/button.html#basics
 *
 * @param {Object} props
 * @returns {Object}
 */
type LinkProps = {}
export const Link = (props: Props) => {
  const passProps = removeProps(props, objectKeys(Button.propTypes))

  return <a {...passProps} className={createButtonClassName(props)} />
}

Link.propTypes = ButtonPropTypes

/**
 * Creates button class name from the given properties.
 *
 * @param {Object} props
 * @returns {string}
 */
function createButtonClassName(props) {
  return createClassName(
    props.noDefaultClassName ? null : "button",
    props.className,
    props.size,
    props.color,
    {
      hollow: props.isHollow,
      expanded: props.isExpanded,
      disabled: props.isDisabled,
      dropdown: props.isDropdown,
      "arrow-only": props.isArrowOnly,
    },
    generalClassNames(props),
  )
}
