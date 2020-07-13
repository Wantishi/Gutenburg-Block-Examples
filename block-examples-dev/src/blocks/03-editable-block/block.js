const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;
import './editor.css';
import './style.css';


// my-plugin/block-name
registerBlockType('block-examples/block-examples-03-editable-block', {
    title: __( 'Editable Block' ),
    icon: 'universal-access-alt',
    category: 'layout',
    attributes: {
      content: {
          type: 'array',
          source: 'children',
          selector: 'p'
      }
    },
    // used in editor
    edit: (props) => {
        
        const onChangeContent = content => {
            props.setAttributes({content:content})
        };
        
        return (
            <RichText 
                tagName="p"
                className={props.className}
                onChange={ onChangeContent }
                value={ props.attributes.content }
            />
        )
    },
    // used in frontend
    save: (props) => {
        return (
            <div>
                <RichText.Content
                    tagName="p"
                    className={props.className}
                    value={ props.attributes.content }
                />
            </div>
        )
    }
});