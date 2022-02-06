import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { AppState } from '../../../../app/root-reducer'
import { MenuButton } from '../components'
import * as MenuButtonActions from '../store/menu-button.actions'
import { MenuButtonState } from '../store/menu-button.reducer'
import { MenuButtonDispatch, MenuButtonProps } from '../store/menu-button.types'

const mapStateToProps = (state: AppState): MenuButtonState => ({
  toggled: state.menuButton.toggled,
})

const mapDispatchToProps = (
  dispatch: Dispatch<MenuButtonActions.Actions>
): MenuButtonDispatch => {
  return {
    turnOn: () => dispatch(MenuButtonActions.turnOn()),
    turnOff: () => dispatch(MenuButtonActions.turnOff()),
  }
}

class MenuButtonContainer extends React.Component<
  MenuButtonProps,
  MenuButtonState
> {
  render() {
    return (
      <MenuButton
        turnOn={this.props.turnOn}
        turnOff={this.props.turnOff}
        toggled={this.props.toggled}
        onClick={this.props.onClick}
      ></MenuButton>
    )
  }
}

export default connect<MenuButtonState, MenuButtonDispatch>(
  mapStateToProps,
  mapDispatchToProps
)(MenuButtonContainer)
