/**
 * @description
 * @author Yash
 * @since 8/12/18
 * @version 1.0
 */

import React from 'react'
import { Popper, Paper, IconButton, ClickAwayListener } from '@material-ui/core';
// import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow'

/**
 * @description Class Component to get color selection process done
 * @exports exporting class component
 */
export default class ColorSection extends React.Component {

    constructor() {
        super();
        this.state = {
            anchorEl: null,
            open: false,
            placement: null,
            defaultColor: "rgb(255, 255, 255)"
        }
        this.handleShowColorPopper = this.handleShowColorPopper.bind(this);
        this.handleColorClick = this.handleColorClick.bind(this);
    }


    handleShowColorPopper = event => {
        const { currentTarget } = event;
        this.setState(state => ({
            anchorEl: currentTarget,
            open: !state.open,

        }));
    }

    handleColorPopperOnOutsideClick = () => {
        this.setState({
            open: false
        })
    }

    handleColorClick = (colorCodeSelected) => {

        this.setState({
            open: false
        })

        if (colorCodeSelected === "") {
            this.props.getColor(this.state.defaultColor, this.props.noteSelected);
        }
        else {
            this.props.getColor(colorCodeSelected, this.props.noteSelected);
        }
    };

    render() {

        /**
         * @description Array of object of color and its details
         */
        const colorPaletteClassName = [
            {
                colorCode: "rgb(255, 255, 255)",
                colorName: "White"
            },
            {
                colorCode: "rgb(242, 139, 130)",
                colorName: "Red"
            },
            {
                colorCode: "rgb(215, 174, 251)",
                colorName: "Purple"
            },
            {
                colorCode: "rgb(255, 192, 203)",
                colorName: "Pink"
            },
            {
                colorCode: "rgb(167, 255, 235)",
                colorName: "Teal"
            },
            {
                colorCode: "rgb(251, 188, 4)",
                colorName: "Orange"
            },
            {
                colorCode: "rgb(174, 203, 250)",
                colorName: "Dark Blue"
            },
            {
                colorCode: "rgb(232, 234, 237)",
                colorName: "Gray"
            },
            {
                colorCode: "rgb(203, 240, 248)",
                colorName: "Blue"
            },
            {
                colorCode: "rgb(230, 201, 168)",
                colorName: "Brown"
            },
            {
                colorCode: "rgb(255, 255, 0)",
                colorName: "Yellow"
            },
            {
                colorCode: "rgb(204, 255, 144)",
                colorName: "Green"
            }
        ]

        return (
            <div>

                <ClickAwayListener onClickAway={this.handleColorPopperOnOutsideClick} >
                    <div>

                        <img onClick={this.handleShowColorPopper}
                            className="noteAddFeatureImages"
                            src={require('../assets/images/color.svg')}
                            alt="color"
                        />

                        <Popper
                            className='reminderPopper'
                            open={this.state.open}
                            anchorEl={this.state.anchorEl}
                            placement='bottom'
                            transition disablePortal
                        >
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper   >
                                        <Paper className="colorSelectionPopperNoteAddCard"  >
                                            <div >
                                                {colorPaletteClassName.map((option, index) => (
                                                    <IconButton className="colorPalette" style={{ backgroundColor: option.colorCode }}
                                                        key={index}
                                                        title={option.colorName}
                                                        onClick={() => this.handleColorClick(option.colorCode)}
                                                    ></IconButton>
                                                ))}
                                            </div>
                                        </Paper>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>
                    {/* <Popper className='reminderPopper' 
                 open={this.state.open} anchorEl={this.state.anchorEl} placement={this.state.placement} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper className="colorSelectionPopperNoteAddCard"  >
                                <div >
                                    {colorPaletteClassName.map((option, index) => (
                                        <IconButton className="colorPalette" style={{backgroundColor:option.colorCode}}
                                        key = {index}
                                            title={option.colorName}
                                            onClick={() => this.handleColorClick(option.colorCode)}
                                        ></IconButton>
                                    ))}
                                </div>
                            </Paper>
                        </Fade>
                    )}
                </Popper> */}
                </ClickAwayListener>
            </div>
        )
    }
}