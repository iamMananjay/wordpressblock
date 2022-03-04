import assign from 'lodash/assign';
import {InspectorControls} from '@wordpress/block-editor';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks;

const { panelBody } = wp.components;
// import assign from 'lodash/assign';
const { addFilter } = wp.hooks;

const enableControlOnBlocks = [
    'core/button',
];

const ControlOptions = [
    {
        label: __( 'None' ),
        value: '',
     
    },
    {
        label: __( 'small' ),
        value: 'small',
    },
    {
        label: __( 'medium' ),
        value: 'medium',
    },
    {
        label: __( 'large' ),
        value: 'large',
    },
];


const SpacingControlAttribute = ( settings, name ) => {
    // Do nothing if it's another block than our defined ones.
    if ( ! enableControlOnBlocks.includes( name ) ) {
        return settings;
    }
    // Use Lodash's assign to gracefully handle if attributes are undefined
    settings.attributes = assign( settings.attributes, {
        btnsection: {
            type: 'string',
            default: ControlOptions[ 0 ].value,
        },
    } );
    return settings;
};

addFilter( 'blocks.registerBlockType', 'extend-block-example/attribute/spacing',  SpacingControlAttribute );
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { PanelBody, SelectControl } = wp.components;


const withSpacingControl = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        if ( ! enableControlOnBlocks.includes( props.name ) ) {

            return (
                <BlockEdit { ...props } />
            );
        }
        const { btnsection } = props.attributes;
        if ( btnsection ) {
            props.attributes.className = `has-spacing-${ btnsection }`;
        }
  

        return ([
            <Fragment>
                 <BlockEdit { ...props } />
                 <InspectorControls>
                <PanelBody
                    title={ __( 'Button Class Section' ) }
                    initialOpen={ true }
                >
                    <SelectControl
                        label={ __( 'Button Size' ) }
                        value={ btnsection}
                        options={ ControlOptions }
                        onChange={ ( selectedSpacingOption ) => {
                            props.setAttributes( {
                                btnsection: selectedSpacingOption,
                            } );
                        } }
                    />
                </PanelBody>
            </InspectorControls>
            </Fragment>
         ])

    }
},'withSpacingControl')

addFilter( 'editor.BlockEdit', 'extend-block-example/with-spacing-control', withSpacingControl );


const addSpacingExtraProps = ( saveElementProps, blockType, attributes ) => {
    const { btnsection} = attributes;
    // Do nothing if it's another block than our defined ones.
    if ( ! enableControlOnBlocks.includes( blockType.name ) ) {
        return saveElementProps;
    }
    const color = {
        default: '#800000',
        Red: '#8B0000',
        Blue: '#A52A2A',
    };



    if (btnsection ) {        
        // Use Lodash's assign to gracefully handle if attributes are undefined
        assign( saveElementProps, { style: { 'color': color[ attributes.btnsection ] } } );
    }
    return saveElementProps;
};

addFilter( 'blocks.getSaveContent.extraProps', 'extend-block-example/get-save-content/extra-props', addSpacingExtraProps );
