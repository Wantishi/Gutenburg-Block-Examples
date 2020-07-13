const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, BlockControls, AlignmentToolbar } = wp.blockEditor;
import './editor.css';
import './style.css';

// my-plugin/block-name
registerBlockType('block-examples/block-examples-04-controls-block', {
    title: __( 'Controls Block' ),
    icon: 'universal-access-alt',
    category: 'layout',
    attributes: {
      content: {
          type: 'array',
          source: 'children',
          selector: 'h1'
      },
      alignment: {
          type: 'string'
      }
    },
    // used in editor
    edit: ({ className, attributes: { content, alignment }, setAttributes}) => {
        
        const onChangeContent = content => {
            setAttributes({ content: content })
        };

        const onChangeAlignment = newAlignment => {
            setAttributes({ alignment: newAlignment })
        }
        
        return (
            <div>
                <BlockControls>
                    <AlignmentToolbar 
                        value={ alignment }
                        onChange={ onChangeAlignment }
                    />
                </BlockControls>
                <RichText 
                    tagName="h1"
                    className={className}
                    onChange={ onChangeContent }
                    value={ content }
                    style={{ textAlign: alignment }}
                />
            </div>
        )
    },
    // used in frontend
    save: ({ className, attributes: { content, alignment }}) => {
        return (
            <div>
                <RichText.Content
                    tagName="h1"
                    className={className}
                    value={ content }
                    style={{ textAlign: alignment }}
                />
            </div>
        )
    }
});