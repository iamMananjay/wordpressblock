import './editor.scss';

// import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, InspectorControls , ColorPalette,InnerBlocks} from '@wordpress/block-editor';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

const { panelBody } = wp.components;

import {
    __experimentalItemGroup as ItemGroup,
    __experimentalItem as Item,
} from '@wordpress/components';
 

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */


//  const MyColorPalette = () => {
//     const [ color, setColor ] = useState ( '#f00' )
//     const colors = [
//         { name: 'red', color: '#f00' },
//         { name: 'white', color: '#fff' },
//         { name: 'blue', color: '#00f' },
//     ];
 
//     return (
//         <ColorPalette
//             colors={ colors }
//             value={ color }
//             onChange={ ( color ) => setColor( color ) }
//         />
//     );
// } );
 
registerBlockType( 'ourpulgin/are-you-paying', {
	title: __( 'Are You Paying Attention' ), // Block title.
	icon: 'smiley', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
 
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'h2',
        },
		titleColor: {
			type: 'string',
			default: '#F5F6F7',
		},
    },


	
	

	// const MyColorIndicator = () => <ColorIndicator colorValue="#0073aa" />

 
    edit(props ) {
        const blockProps = useBlockProps();
		// console.log(blockProps);


		const {titleColor}= props.attributes;

		function onTitleColorChange (newcolor){
			props.setAttributes({titleColor:newcolor});
	
		};
 
        return (

	[
			<InspectorControls style={{ marginBottom:'40px'}} >
				<panelBody title={'Font color'} >
					<p><strong>Select a color:</strong></p>
					<ColorPalette  value={titleColor}  onChange={onTitleColorChange} />

				</panelBody>
			</InspectorControls>,





	<div>
				<RichText
			{ ...blockProps }
			tagName="h2" // The tag here is the element output and editable in the admin
			value={ props.attributes.content } // Any existing content, either from the database or an attribute default
			// value={body}
			allowedFormats={ [ 'core/bold', 'core/italic','core/text-color' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
			onChange={ ( content ) => props.setAttributes( { content } ) } // Store updated content as a block attribute
			placeholder={ __( 'Heading...' ) } // Display this text before any content has been added by the user
			style={{ color:titleColor}}



			/>
	</div>
	]
        );
    },
 
    save( { attributes} ) {
		const {titleColor,content}= attributes;
        const blockProps = useBlockProps.save();
 
        return(
			<div>
							{/* <h2 style={{color:titleColor}} >{content}</h2> */}
				<RichText.Content  { ...blockProps } tagName="h2" value={content } style={{color:titleColor}}/>

			</div>
		)
		
		// <RichText.Content 
		// { ...blockProps } tagName="h2" value={props.attributes.content } style={{ color:titleColor}} />; // Saves <h2>Content added in the editor...</h2> to the database for frontend display
    }
} );



// import assign from 'lodash/assign';
// const { addFilter } = wp.hooks;

// // Enable spacing control on the following blocks
// const enableSpacingControlOnBlocks = [
//     'core/list',
// ];


// // Available spacing control options
// const spacingControlOptions = [
//     {
//         label: __( 'None' ),
//         value: '',
     
//     },
//     {
//         label: __( 'default' ),
//         value: 'default',
//     },
//     {
//         label: __( 'Red' ),
//         value: 'Red',
//     },
//     {
//         label: __( 'Blue' ),
//         value: 'Blue',
//     },
// ];


// const spacingControlOptionss = [
//     {
//         label: __( 'None' ),
//         value: '',
     
//     },
//     {
//         label: __( 'defaults' ),
//         value: 'defaults',
//     },
//     {
//         label: __( 'Reds' ),
//         value: 'Reds',
//     },
//     {
//         label: __( 'Blues' ),
//         value: 'Blues',
//     },
// ];

// const addSpacingControlAttribute = ( settings, name ) => {
//     // Do nothing if it's another block than our defined ones.
//     if ( ! enableSpacingControlOnBlocks.includes( name ) ) {
//         return settings;
//     }

//     // Use Lodash's assign to gracefully handle if attributes are undefined
//     settings.attributes = assign( settings.attributes, {
//         spacing: {
//             type: 'string',
//             default: spacingControlOptions[ 0 ].value,
//             // color:spacingControlOptions[0].
//             //  style:{{ color:titleColor}}

//         },
//         spacings: {
//             type: 'string',
//             default: spacingControlOptionss[ 0 ].value,
//             // color:spacingControlOptions[0].
//             //  style:{{ color:titleColor}}

//         },
//     } );

//     return settings;
// };


// addFilter( 'blocks.registerBlockType', 'extend-block-example/attribute/spacing', addSpacingControlAttribute );

// const { createHigherOrderComponent } = wp.compose;
// const { Fragment } = wp.element;
// // const { InspectorControls } = wp.editor;
// const { PanelBody, SelectControl } = wp.components;


// /**
//  * Create HOC to add spacing control to inspector controls of block.
//  */
//  const withSpacingControl = createHigherOrderComponent( ( BlockEdit ) => {
//     return ( props ) => {
//         // console.log(enableSpacingControlOnBlocks);
//         // Do nothing if it's another block than our defined ones.
//         if ( ! enableSpacingControlOnBlocks.includes( props.name ) ) {

//             return (
//                 // props.attributes.color = {props.attribute.color};

//                 <BlockEdit { ...props } />
//                 // ----

//                 // assign( saveElementProps, { style: { 'color': color[ attributes.spacing ] } } );

//             );
//         }

//         // console.log(enableSpacingControlOnBlocks)

//         const { spacing, spacings } = props.attributes;

//         // add has-spacing-xy class to block
//         if ( spacing ) {
//             props.attributes.className = `has-spacing-${ spacing } has-spacings-${ spacings }`;

            

//         }

        

//         // add has-spacing-xy class to block
//         if ( spacings ) {
//             props.attributes.className = `has-spacing-${ spacing } has-spacings-${ spacings }`;

            

//         }
//         console.log(props.attributes);

//         return ([
            
//             <Fragment>
//             <BlockEdit { ...props } />

//              <InspectorControls>
//                 <PanelBody
//                     title={ __( 'My Spacing Control' ) }
//                     initialOpen={ true }
//                 >
//                     <SelectControl
//                         label={ __( 'List Color' ) }
//                         value={ spacing }
//                         options={ spacingControlOptions }
//                         onChange={ ( selectedSpacingOption ) => {
//                             props.setAttributes( {
//                                 spacing: selectedSpacingOption,
//                             } );
//                         } }
//                     />
//                 </PanelBody>
//             </InspectorControls>
//             <InspectorControls>
//                 <PanelBody
//                     title={ __( 'My Spacing Control' ) }
//                     initialOpen={ true }
//                 >
//                     <SelectControl
//                         label={ __( 'Inner List Color' ) }
//                         value={ spacings }
//                         options={ spacingControlOptionss }
//                         onChange={ ( selectedSpacingOption ) => {
//                             props.setAttributes( {
//                                 spacings: selectedSpacingOption,
//                             } );
//                         } }
//                     />
//                 </PanelBody>
//             </InspectorControls>
//         </Fragment>,
// //         <div>
// //         <RichText
// //     { ...blockProps }
// //     // tagName="h2" // The tag here is the element output and editable in the admin
// //     value={ props.attributes.content } // Any existing content, either from the database or an attribute default
// //     // value={body}
// //     allowedFormats={ [ 'core/text-color' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
// //     onChange={ ( content ) => props.setAttributes( { content } ) } // Store updated content as a block attribute
// //     placeholder={ __( 'Heading...' ) } // Display this text before any content has been added by the user
// //     style={{ color:titleColor}}



// //     />
// // </div>
//         ]
          
//         );
//     };
// }, 'withSpacingControl' );

// addFilter( 'editor.BlockEdit', 'extend-block-example/with-spacing-control', withSpacingControl );


// const addSpacingExtraProps = ( saveElementProps, blockType, attributes ) => {
//     // Do nothing if it's another block than our defined ones.
//     if ( ! enableSpacingControlOnBlocks.includes( blockType.name ) ) {
//         return saveElementProps;
//     }

//     // const margins = {
//     //     small: '5px',
//     //     medium: '15px',
//     //     large: '30px',
//     // };

//     const color = {
//         default: '#800000',
//         Red: '#8B0000',
//         Blue: '#A52A2A',
//     };

//     // if ( attributes.spacing in margins ) {
//     //     // Use Lodash's assign to gracefully handle if attributes are undefined
//     //     assign( saveElementProps, { style: { 'margin-bottom': margins[ attributes.spacing ] } } );
//     // }
//     if ( attributes.spacing in color ) {

//         // console.log(attributes);
//         // console.log(color[attributes.spacing]);
        
//         // Use Lodash's assign to gracefully handle if attributes are undefined
//         assign( saveElementProps, { style: { 'color': color[ attributes.spacing ] } } );
//     }

//     // else if(saveElementProps){
//     //     assign( saveElementProps, { style: { 'color': color[ attributes.spacing ] } } );

//     // }


//     return saveElementProps;
// };

// addFilter( 'blocks.getSaveContent.extraProps', 'extend-block-example/get-save-content/extra-props', addSpacingExtraProps );

// registerBlockType( 'ourpulgin/color-change', {
// 	title: __( 'color change' ), // Block title.
// 	icon: 'smiley', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
// 	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
// 	attributes: {
//         content: {
//             type: 'string',
//             source: 'html',
//             selector: 'li',
//         },
// 		titleColor: {
// 			type: 'string',
// 			default: '#000000',
// 		},
//     },
 
// 	edit:(props)=>{
// 		const blockProps = useBlockProps();
// 		// console.log(blockProps);


// 		const {titleColor}= props.attributes;

// 		function onTitleColorChange (newcolor){
// 			props.setAttributes({titleColor:newcolor});
// 		}
// 		return(	
// 		[
// 			<InspectorControls style={{ marginBottom:'40px'}} >
// 			<panelBody title={'Font color'} >
// 				<p><strong>Select a list color:</strong></p>
// 				<ColorPalette  value={titleColor}  onChange={onTitleColorChange} />

// 			</panelBody>
// 		</InspectorControls>,

// 		<div>

// 		<RichText
// 			{ ...blockProps }
// 			tagName="ul" // The tag here is the element output and editable in the admin
// 			value={ props.attributes.content } // Any existing content, either from the database or an attribute default
// 			// value={body}
// 			allowedFormats={ [ 'core/bold', 'core/italic','core/text-color' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
// 			onChange={ ( content ) => props.setAttributes( { content } ) } // Store updated content as a block attribute
// 			placeholder={ __( 'list' ) } // Display this text before any content has been added by the user
// 			style={{ color:titleColor}}
// 			multiline="li"



// 			/>


// 		</div>
// 		]
// 		)
// 	},
// 	save:(props)=>{
// 		return(
			
// 			<h1>Hy</h1>
			
// 		)
// 	}
 

// });





// --------------

/**
 * BLOCK: tomisiro-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
// import './editor.scss';
// import './style.scss';

// const {
// 	__
// } = wp.i18n; // Import __() from wp.i18n
// const {
// 	registerBlockType
// } = wp.blocks; // Import registerBlockType() from wp.blocks

// const {RichText,
// 	InspectorControls,
// 	ColorPalette,
// } = wp.editor;

// const { PanelBody, RadioControl } = wp.components;

// /**
//  * Register: aa Gutenberg Block.
//  *
//  * Registers a new block provided a unique name and an object defining its
//  * behavior. Once registered, the block is made editor as an option to any
//  * editor interface where blocks are implemented.
//  *
//  * @link https://wordpress.org/gutenberg/handbook/block-api/
//  * @param  {string}   name     Block name.
//  * @param  {Object}   settings Block settings.
//  * @return {?WPBlock}          The block, if it has been successfully
//  *                             registered; otherwise `undefined`.
//  */
// registerBlockType('tomisiro-heading/qna', {
// 	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
// 	title: "Q&A", // Block title.
// 	icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question" viewBox="0 0 16 16"><path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/></svg>, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
// 	category: 'tomisiro-block',
// 	attributes: {
// 		title: {
// 			type: 'string',
// 			source: 'html',
// 			selector: 'h2',
// 		},

// 	},

// 	edit({
// 		attributes,
// 		setAttributes
// 	}) {

// 		const {
// 			title
// 		} = attributes;


// 		function onChangeTitle(newTitle) {
// 			setAttributes({
// 				title: newTitle
// 			});
// 		}

// 		return ([ 
// 		<div>
// 			<div class="yk-trny-title">
// 				<RichText key = "editable"
// 				className="yk-trny-heading"
// 				tagName = "h2"
// 				placeholder = "H2 Heading here"
// 				value = {
// 					title
// 				}
// 				onChange = {
// 					onChangeTitle
// 				}
// 				/> 
// 			</div>
// 		</div>
// 		]);
// 	},

// 	save ({
// 		attributes
// 	}) {
// 		const {
// 			title
// 		} = attributes;

// 		return (
// 			<div>
// 				<div class="yk-trny-title">
// 					<h2 class="yk-trny-heading">
// 						{ title }
// 					</h2>
// 				</div>
// 			</div>
// 		)},

// });




// add_filter( 'render_block', 'wrap_classic_block', 10, 2 );
// function wrap_classic_block( $block_content, $block ) {
//   if (  'core/heading' === $block['blockName'] && ! empty( $block_content ) && ! ctype_space( $block_content ) ) {
//     $block_content = '<div class="example">' . $block_content . '</div>';
//   }
//   return $block_content;
// }

// const ALLOWED_BLOCKS = ['core/heading']

{/* <InnerBlocks allowedBlock ={ALLOWED_BLOCKS}/> */}

