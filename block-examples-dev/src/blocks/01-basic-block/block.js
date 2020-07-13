const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const blockStyle = {
    backgroundColor: '#900',
    color: '#fff',
    padding: '20px'
}

const blockStyleFront = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px'
}

// my-plugin/block-name
registerBlockType('block-examples/block-examples-01-basic-block', {
    title: __( 'Basic Block' ),
    icon: 'universal-access-alt',
    category: 'layout',
    // used in editor
    edit() {
        return (
            <div style={ blockStyle }> TESTING 123, my name is Jared! Basic example with JSX! (editor)</div>
        )
    },
    // used in frontend
    save() {
        return <div style={ blockStyleFront }> Hello! Basic example with JSX! (frontend) </div>
    }
});