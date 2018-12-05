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


export const SearchTabTopBarTheme = createMuiTheme ({
    overrides:{
        MuiSvgIcon:{
            root:{
                fontSize:30,
            },
        },
        MuiInputBase:{
            input:{
                width:440,
                marginLeft:20,
                lineHeight:2,
                padding:0,
                marginTop:0,
            },
        }
    }
});