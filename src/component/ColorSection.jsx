/**
 * @description
 * @author Yash
 * @since 8/12/18
 * @version 1.0
 */
import React from 'react'
import { Popper, Paper, MenuItem, IconButton } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';

/**
 * @description Class Component to get color selection process done
 * @exports exporting class component
 */
export default class ColorSelection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showColorPopper: false
        }
        this.handleShowColorPopper = this.handleShowColorPopper.bind(this);
    }


    handleShowColorPopper = placement => event => {
        const { currentTarget } = event;
        this.setState(state => ({
            anchorEl: currentTarget,
            open: state.placement !== placement || !state.open,
            placement,
        }));
    }

    render() {

        const colorPaletteClassName = [
            "colorPaletteSilver",
            "colorPaletteRed",
            "colorPaletteCrimson",
            "colorPaletteLime",
            "colorPaletteTeal",
            "colorPaletteOrange",
            "colorPaletteTurquoise",
            "colorPaletteChocklate",
            "colorPaletteThistle",
            "colorPaletteDarkSalmon",
            "colorPaletteYellowGreen",
            "colorPalettePlum"
        ]

        return (
            <span>
                <Popper open={this.state.open} anchorEl={this.state.anchorEl} placement={this.state.placement} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper className="colorSelectionPopperNoteAddCard"  >
                                <div >
                                    {/* <IconButton className="colorPaletteSilver" ></IconButton>
                                    <IconButton className="colorPaletteRed" ></IconButton>
                                    <IconButton className="colorPaletteCrimson" ></IconButton>
                                    <IconButton className="colorPaletteLime" ></IconButton>
                                    <IconButton className="colorPaletteOrange" ></IconButton> */}
                                    { colorPaletteClassName.map((option, index) => (
                                        <IconButton className={option} ></IconButton>
                                    ))}
                                </div>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
                <img onClick={this.handleShowColorPopper('bottom')} className="noteAddFeatureImages" src={require('../assets/images/color.svg')} alt="color" />
            </span>
        )
    }
}