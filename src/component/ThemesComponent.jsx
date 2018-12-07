import { createMuiTheme } from '@material-ui/core';

export default {
    palette:{
        primary:{
            main:'#F44336',

        },
        error:{
            main:'#D50000',
        },
        secondry:{
            main:'#D50000',
        },
    },
}

export const TextFieldsBeforeDashboardTheme = createMuiTheme ({
    overrides : {
        MuiFormControl : {
            root : {
                marginLeft : 21,
                width : 350,
                marginBottom : 10,
                padding : 2,
            }
        },
        MuiButton : {
            extendedFab : {

                marginLeft : 50,
                marginTop : 40,
                width : 300,
                marginBottom : 10,
            }
        }
    }
})

/**
 * @description theme created for input base & muiSvgIcon
 * @exports mui theme SearchTabTopBarTheme
 */
export const SearchTabTopBarTheme = createMuiTheme ({
    overrides : {
        MuiSvgIcon : {
            root : {
                fontSize : 30,
            },
        },
        MuiInputBase:{
            input:{
                width : 440,
                marginLeft : 20,
                lineHeight : 2,
                padding : 0,
                marginTop : 0,
            },
        }
    }
});


/**
 * @description mui Theme creation for note addition card
 * @exports NoteAdditionCard theme
 */
export const NoteAdditionCard = createMuiTheme({
    overrides :{
        MuiCardContent :{
            root : {
                paddingTop : 2,
                marginTop : 15,
                paddingLeft : 5,
                marginLeft : 1,
            },
        },
        MuiInput : {
            root :{
                width : 450,
            }
        }
    }
})