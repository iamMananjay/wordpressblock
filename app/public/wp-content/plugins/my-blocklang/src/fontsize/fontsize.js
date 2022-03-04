const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks;
import { useBlockProps, RichText, InspectorControls , ColorPalette,InnerBlocks} from '@wordpress/block-editor';
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { PanelBody, SelectControl } = wp.components;
const spacingControlOptions = [
    {
        label: __( 'None' ),
        value: '',
     
    },
    {
        label: __('gothic(default'),
        value: 'Lucida Console',
    },
    {
        label: __( 'Mencho' ),
        value: 'Times New Roman',
    },

];


registerBlockType('font/font-family', {
    // bulit in attribute
    title: 'fontfamily',
    description: 'To add a font family',
    icon: 'smiley',
    category: 'common',
    attributes: {
        title: {
            type: 'string',
            source: 'html',
            selector: 'h3',
        },
    },
    edit({ attributes, setAttributes}){




        const {spacing,title} =attributes;

      
        function onChangeTitle(newTitle) {
            setAttributes({ title: newTitle })

        }
        return(
      
            [
                <InspectorControls>
                <PanelBody
                    title={ __( 'Font Family' ) }
                    initialOpen={ true }
                >
                    <SelectControl
                        label={ __( 'Font Family' ) }
                        value={ spacing}
                        options={ spacingControlOptions }
                        onChange={ ( selectedSpacingOption ) => {
                            setAttributes( {
                                spacing: selectedSpacingOption,
                            } );
                        } }
                    />
                </PanelBody>
            </InspectorControls>,
       
            <RichText
            tagName="h3" 
            value={title}
            style={{ fontFamily: spacing }}    
            onChange={ onChangeTitle } // Store updated content as a block attribute
            placeholder={ __( 'Text..................' ) } // Display this text before any content has been added by the user
            />
            ]
        )
    },

    save({ attributes}){
        const {spacing,title} =attributes;

        return(



            <RichText.Content tagName='h3'
            value={title}
            style={{ fontFamily: spacing }}    
             />
        )

    }
})