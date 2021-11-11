export const selectStyle = {
    menu: () => ({
        poisition:'relative',
        marginBottom: '2px',
        border: '1px solid grey',
        borderRadius: '3px',
        width:'100%',
    }),
    container: () => ({
        marginTop: '7px',
        marginBottom:'7px',
    }),
    control: (provided) => ({
        ...provided,
        border: '1px solid grey',
        borderRadius: '3px',
        boxShadow: 'none',
        '&:hover': {
            border: '1px solid #93ad18',
        },
    }),
};

export const customClose = { 
    close:{
        position: 'absolute',
        top: '0px',
        right: '-10px',
        border:'none',
        background: 'transparent',
    }
}