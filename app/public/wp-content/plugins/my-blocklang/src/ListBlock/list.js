import assign from 'lodash/assign';

import './style.scss';
// import './style.scss';
// import { useBlockProps, RichText, InspectorControls , ColorPalette,InnerBlocks} from '@wordpress/block-editor';
import {InspectorControls} from '@wordpress/block-editor';

const { __ } = wp.i18n; // Import __() from wp.i18n
// const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

const { panelBody } = wp.components;
// import assign from 'lodash/assign';
const { addFilter } = wp.hooks;

// Enable spacing control on the following blocks
const enableSpacingControlOnBlocks = [
    'core/list',
];

// Available spacing control options
const spacingControlOptions = [
    {
        label: __( 'None' ),
        value: '',
     
    },
    {
        label: __( 'default' ),
        value: 'default',
    },
    {
        label: __( 'Red' ),
        value: 'Red',
    },
    {
        label: __( 'Blue' ),
        value: 'Blue',
    },
];

const spacingControlOptionss = [
    {
        label: __( 'None' ),
        value: '',
     
    },
    {
        label: __( 'defaults' ),
        value: 'defaults',
    },
    {
        label: __( 'Reds' ),
        value: 'Reds',
    },
    {
        label: __( 'Blues' ),
        value: 'Blues',
    },
];

const addSpacingControlAttribute = ( settings, name ) => {
    // Do nothing if it's another block than our defined ones.
    if ( ! enableSpacingControlOnBlocks.includes( name ) ) {
        return settings;
    }
    // Use Lodash's assign to gracefully handle if attributes are undefined
    settings.attributes = assign( settings.attributes, {
        spacing: {
            type: 'string',
            default: spacingControlOptions[ 0 ].value,
        },
        spacings: {
            type: 'string',
            default: spacingControlOptionss[ 0 ].value,
        },
    } );
    return settings;
};


addFilter( 'blocks.registerBlockType', 'extend-block-example/attribute/spacing', addSpacingControlAttribute );

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { PanelBody, SelectControl } = wp.components;

/**
 * Create HOC to add spacing control to inspector controls of block.
 */
 const withSpacingControl = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        // Do nothing if it's another block than our defined ones.
        if ( ! enableSpacingControlOnBlocks.includes( props.name ) ) {

            return (
                <BlockEdit { ...props } />
            );
        }
        const { spacing, spacings } = props.attributes;
        // add has-spacing-xy class to block
        if ( spacing ) {
            props.attributes.className = `has-spacing-${ spacing } has-spacings-${ spacings }`;
        }
        // add has-spacing-xy class to block
        if ( spacings ) {
            props.attributes.className = `has-spacing-${ spacing } has-spacings-${ spacings }`;
        }
        return ([ 
            <Fragment>
            <BlockEdit { ...props } />
             <InspectorControls>
                <PanelBody
                    title={ __( 'My Spacing Control' ) }
                    initialOpen={ true }
                >
                    <SelectControl
                        label={ __( 'List Color' ) }
                        value={ spacing }
                        options={ spacingControlOptions }
                        onChange={ ( selectedSpacingOption ) => {
                            props.setAttributes( {
                                spacing: selectedSpacingOption,
                            } );
                        } }
                    />
                </PanelBody>
            </InspectorControls>
            <InspectorControls>
                <PanelBody
                    title={ __( 'My Spacing Control' ) }
                    initialOpen={ true }
                >
                    <SelectControl
                        label={ __( 'Inner List Color' ) }
                        value={ spacings }
                        options={ spacingControlOptionss }
                        onChange={ ( selectedSpacingOption ) => {
                            props.setAttributes( {
                                spacings: selectedSpacingOption,
                            } );
                        } }
                    />
                </PanelBody>
            </InspectorControls>
        </Fragment>,
        ]
          
        );
    };
}, 'withSpacingControl' );

addFilter( 'editor.BlockEdit', 'extend-block-example/with-spacing-control', withSpacingControl );


const addSpacingExtraProps = ( saveElementProps, blockType, attributes ) => {
    const { spacing, spacings } = attributes;
    // Do nothing if it's another block than our defined ones.
    if ( ! enableSpacingControlOnBlocks.includes( blockType.name ) ) {
        return saveElementProps;
    }
    const color = {
        default: '#800000',
        Red: '#8B0000',
        Blue: '#A52A2A',
    };
    // if ( spacing ) {        
    //     // Use Lodash's assign to gracefully handle if attributes are undefined
    //     assign( saveElementProps );
    // }

    // if (spacings ) {        
    //     // Use Lodash's assign to gracefully handle if attributes are undefined
    //     assign( saveElementProps, { style: { 'color': spacings } } );
    // }


    if (spacing ) {        
        // Use Lodash's assign to gracefully handle if attributes are undefined
        assign( saveElementProps );
    }
    return saveElementProps;
};

addFilter( 'blocks.getSaveContent.extraProps', 'extend-block-example/get-save-content/extra-props', addSpacingExtraProps );
