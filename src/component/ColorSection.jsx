/**
 * @description
 * @author Yash
 * @since 8/12/18
 * @version 1.0
 */

import React from 'react'
import { Popper, Paper, IconButton, ClickAwayListener } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';

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


    handleShowColorPopper = placement => event => {
        const { currentTarget } = event;
        this.setState(state => ({
            anchorEl: currentTarget,
            open: state.placement !== placement || !state.open,
            placement,
        }));
    }

    handleColorPopperOnOutsideClick = () => {
        this.setState({
            open : false
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
                colorClass: "colorPalette",
                colorCode: "rgb(255, 255, 255)",
                colorName: "White"
            },
            {
                colorClass: "colorPalette",
                colorCode: "rgb(242, 139, 130)",
                colorName: "Red"
            },
            {
                colorClass: "colorPalette",
                colorCode: "rgb(215, 174, 251)",
                colorName: "Purple"
            },
            {
                colorClass: "colorPalette",
                colorCode: "rgb(255, 192, 203)",
                colorName: "Pink"
            },
            {
                colorClass: "colorPalette",
                colorCode: "rgb(167, 255, 235)",
                colorName: "Teal"
            },
            {
                colorClass: "colorPalette",
                colorCode: "rgb(251, 188, 4)",
                colorName: "Orange"
            },
            {
                colorClass: "colorPalette",
                colorCode: "rgb(174, 203, 250)",
                colorName: "Dark Blue"
            },
            {
                colorClass: "colorPalette",
                colorCode: "rgb(232, 234, 237)",
                colorName: "Gray"
            },
            {
                colorClass: "colorPalette",
                colorCode: "rgb(203, 240, 248)",
                colorName: "Blue"
            },
            {
                colorClass: "colorPalette",
                colorCode: "rgb(230, 201, 168)",
                colorName: "Brown"
            },
            {
                colorClass: "colorPalette",
                colorCode: "rgb(255, 255, 0)",
                colorName: "Yellow"
            },
            {
                colorClass: "colorPalette",
                colorCode: "rgb(204, 255, 144)",
                colorName: "Green"
            }
        ]

        return (
            <span>
                <Popper open={this.state.open} anchorEl={this.state.anchorEl} placement={this.state.placement} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper className="colorSelectionPopperNoteAddCard"  >
                                <div >
                                    {colorPaletteClassName.map((option, index) => (
                                        <IconButton className={option.colorClass} style={{backgroundColor:option.colorCode}}
                                        key = {index}
                                            title={option.colorName}
                                            onClick={() => this.handleColorClick(option.colorCode)}
                                        ></IconButton>
                                    ))}
                                </div>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
                <ClickAwayListener onClickAway={this.handleColorPopperOnOutsideClick} >
                    <img onClick={this.handleShowColorPopper('bottom')} className="noteAddFeatureImages" 
                    src={require('../assets/images/color.svg')} alt="color" 
                    onMouseEnter={this.handleShowColorPopper('bottom')} 
                    onMouseLeave={this.handleShowColorPopper('bottom')} />
                </ClickAwayListener>
            </span>
        )
    }
}