const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
import './editor.css';
import './style.css';

// my-plugin/block-name
registerBlockType('block-examples/block-examples-02-stylesheets-block', {
    title: __( 'Stylesheets Block' ),
    icon: 'universal-access-alt',
    category: 'layout',
    // used in editor
    edit: ({className}) => {
        return (
            <div>
                <p className={className}>
                    {__('Hello World, this is the Stylesheets block (from the editor)')}
                </p>
            </div>
        )
    },
    // used in frontend
    save: ({className}) => {
        return (
            <div>
                <p className={className}>
                    {__('Hello World, this is the Stylesheets block (from the frontend - in red)')}
                </p>
            </div>
        )
    }
});