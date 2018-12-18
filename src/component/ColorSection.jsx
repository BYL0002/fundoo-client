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
            this.props.getColor(this.state.defaultColor,this.props.option);
        }
        else {
            this.props.getColor(colorCodeSelected, this.props.option);
        }
    };

    render() {

        /**
         * @description Array of object of color and its details
         */
        const colorPaletteClassName = [
            {
                colorClass: "colorPaletteWhite",
                colorCode: "rgb(255, 255, 255)",
                colorName: "White"
            },
            {
                colorClass: "colorPaletteRed",
                colorCode: "rgb(242, 139, 130)",
                colorName: "Red"
            },
            {
                colorClass: "colorPalettePurple",
                colorCode: "rgb(215, 174, 251)",
                colorName: "Purple"
            },
            {
                colorClass: "colorPalettePink",
                colorCode: "rgb(255, 192, 203)",
                colorName: "Pink"
            },
            {
                colorClass: "colorPaletteTeal",
                colorCode: "rgb(167, 255, 235)",
                colorName: "Teal"
            },
            {
                colorClass: "colorPaletteOrange",
                colorCode: "rgb(251, 188, 4)",
                colorName: "Orange"
            },
            {
                colorClass: "colorPaletteDarkBlue",
                colorCode: "rgb(174, 203, 250)",
                colorName: "Dark Blue"
            },
            {
                colorClass: "colorPaletteGray",
                colorCode: "rgb(128, 128, 128)",
                colorName: "Gray"
            },
            {
                colorClass: "colorPaletteBlue",
                colorCode: "rgb(203, 240, 248)",
                colorName: "Blue"
            },
            {
                colorClass: "colorPaletteBrown",
                colorCode: "rgb(230, 201, 168)",
                colorName: "Brown"
            },
            {
                colorClass: "colorPaletteYellow",
                colorCode: "rgb(255, 255, 0)",
                colorName: "Yellow"
            },
            {
                colorClass: "colorPaletteGreen",
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
                                        <IconButton className={option.colorClass}
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
                    <img onClick={this.handleShowColorPopper('bottom')} className="noteAddFeatureImages" src={require('../assets/images/color.svg')} alt="color" />
                </ClickAwayListener>
            </span>
        )
    }
}