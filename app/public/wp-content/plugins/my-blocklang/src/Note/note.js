const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks;
import { useBlockProps, RichText, InspectorControls , ColorPalette,InnerBlocks} from '@wordpress/block-editor';

import {
	__experimentalLinkControl as LinkControl
} from '@wordpress/block-editor';


import { 
	// useBlockProps,
	__experimentalLinkControlSearchInput as LinkControlSearchInput
} from '@wordpress/block-editor';

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { PanelBody, SelectControl } = wp.components;

const spacingControlOptions = [
    {
        label: __( 'None' ),
        value: '',
     
    },
    {
        label: __( 'Note' ),
        value: 'Note',
    },
    {
        label: __( 'Onsite' ),
        value: 'Onsite',
    },

];


registerBlockType('note/note-text', {
    // bulit in attribute
    title: 'Link Detail',
    description: 'To add a tag',
    icon: 'smiley',
    category: 'common',

    attributes: {
        title: {
            type: 'string',
            source: 'html',
            selector: 'a',
            attribute: "src"
        },

       
    },
      // Bulit in function
    edit({ className ,attributes, setAttributes ,mediaURL}){

        const { post,title,spacing} =attributes;

        if ( spacing ) {
            attributes.className = `has-spacing-${ spacing }`;
        }


        function onChangeTitle(newTitle) {
            setAttributes({ title: newTitle })

        }

        return(
            [

            <div { ...useBlockProps() }>
            <LinkControlSearchInput
                placeholder="Add a Link Here"
                renderSuggestions={ ( props ) => suggestionsRender(props) }
                allowDirectEntry={false}
                withURLSuggestion={false}
                value={ attributes.url }
                onChange={ ( newURL ) => setAttributes( { url: newURL } ) }
                withCreateSuggestion={false}
            />
        </div>,

            <InspectorControls>
                <PanelBody
                    title={ __( 'Link Detail' ) }
                    initialOpen={ true }
                >
                    <SelectControl
                        label={ __( 'Link Tag' ) }
                        value={ spacing }
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
        // { ...blockProps }
        tagName="a" // The tag here is the element output and editable in the admin
    
        className={attributes.className}
        href={attributes.url}
        // value={title}
        value={title}

        
         
        allowedFormats={ [ 'core/bold', 'core/italic','core/text-color' , 'core/image' ,'core/more'] } // Allow the content to be made bold or italic, but do not allow other formatting options
        onChange={ onChangeTitle } // Store updated content as a block attribute
        placeholder={ __( 'A Tag' ) } // Display this text before any content has been added by the user
        />





            ]
        )
    },
    save({attributes}){

        const {title,url,className} =attributes;

        return(
   

            <RichText.Content tagName='a'
            value={title}
            href={url} 
            className={className}
             />
        )
        
    }


});