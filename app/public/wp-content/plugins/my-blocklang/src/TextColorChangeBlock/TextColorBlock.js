const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks;
const{useBlockProps,RichText, InspectorControls , ColorPalette, }=wp-editor;
// import { useBlockProps, RichText, InspectorControls, ColorPalette } from '@wordpress/block-editor';
const { PanelBody ,IconButton ,Button } = wp.components;
// import './pdf.scss';


import {
    MediaUpload,
} from "@wordpress/block-editor";




registerBlockType('text/text-color', {
    // bulit in attribute
    title: 'TextColorChange',
    description: 'To change the color of text',
    icon: 'smiley',
    category: 'common',

    // custome attributes

    attributes: {
        title: {
            type: 'string',
            source: 'html',
            selector: 'h3',
        },
        titleColor: {
            type: 'string',
            default: '#000000',
        },
        bodyColor: {
            type: 'string',
            default: '#000000',
        },

        body: {
            type: 'string',
            source: 'html',
            selector: 'p',

        }
    },

    // Bulit in function
    edit({ className ,attributes, setAttributes }) {
        const { title, body, titleColor, bodyColor } = attributes;
        // custome function
        function onChangeTitle(newTitle) {
            setAttributes({ title: newTitle })

        }

        function onChangeBody(newBody) {
            setAttributes({ body: newBody })

        }

        function onChangeColor(newcolor) {
            setAttributes({ titleColor: newcolor })

        }

        function onChangeBodyColor(newBodycolor) {
            setAttributes({ bodyColor: newBodycolor })

        }
        return ([
            <InspectorControls style={{ marginBotton: '40px' }}>
                <panelBody title={'Custom Color'} >
                    <h2>                <strong>Select a Color For Heading:</strong>
                    </h2>
                    <ColorPalette value={titleColor}
                        onChange={onChangeColor} />
                </panelBody>


            </InspectorControls>,

            <InspectorControls style={{ marginBotton: '40px' }}>
                <panelBody title={'Custom text color'} >
                    <h2><strong>Select a Color for Text:</strong></h2>
                    <ColorPalette value={bodyColor}
                        onChange={onChangeBodyColor} />
                </panelBody>


            </InspectorControls>,
            <div className="cta-container" >
                <RichText key='editable'
                    tagName='h3'
                    placeholder='Give a Title'
                    value={title}
                    onChange={onChangeTitle}
                    style={{ color: titleColor }}
                />

                <RichText key='editable'
                    tagName='p'
                    placeholder='Give a description'
                    value={body}
                    onChange={onChangeBody}
                    style={{ color: bodyColor }} />
            </div>

        ])
    },
    save({ attributes }) {
        const { title, body, titleColor, bodyColor } = attributes;
        return (
            <div className="cta-container">
                <h3 style={{ color: titleColor }}>{title}</h3>
                <RichText.Content tagName='p'
                    value={body}
                    style={{ color: bodyColor }} />
            </div>
        )


    }

});




// for link block

// registerBlockType('pdf/pdf-block', {
//     // bulit in attribute
//     title: 'pdf',
//     description: 'To add pdf file',
//     icon: 'smiley',
//     category: 'common',
//     attributes: {
//         backgroundPdf:{
//             type:'string',
//             default:null,
//         }
//     },

//     edit({className, attributes, setAttributes }){

//         const { backgroundPdf } = attributes;

//         // function onSelectpdf(newpdf) {
//         //     // newpdf.sizes.full.url
//         //     setAttributes({ backgroundPdf: {
//         //         title: media.title,
//         //         filename: media.filename,
//         //         url: media.url,
//         //     } })

//         // }


//         return([

//             <InspectorControls style={{ marginBotton: '40px' }}>
//                 <panelBody title='pdf section' initialOpen={false} >
//                     <h2><strong>Select a pdf file:</strong></h2>
//                         <MediaUpload
//                             onSelect={(media) => {
//                                 setAttributes({
//                                 downloadFile: {
//                                     title: media.title,
//                                     filename: media.filename,
//                                     url: media.url,
//                                     updated: ''
//                                 }
//                                 })
//                             }}                                // type="file"
//                                                         // value={backgroundPdf}
//                                 multiple={false}
//                                 render={({open})=>{
//                                     <IconButton onClick={open} icon={upload} 
//                                     className="editor-media-placeholder__button is-button is-default is-large " > 
//                                     {attributes.downloadFile === null
//                                         ? '+ Upload file'
//                                         : 'x Upload new file'}</IconButton>
//                                 }}/>

//                                 <p>
//                                 {attributes.downloadFile === null
//                                     ? ''
//                                     : '(' + attributes.downloadFile.title + ')'}
//                                 </p>
//                 </panelBody>
//             </InspectorControls>,
//                   <div>My Block Content</div>

//             // <div class='pdf-container'  style={{
//             //     backgroundImage:`url($backgroundPdf)`,
//             //     backgroundSize:'Cover',
//             //     backgroundPosition:'center',
//             //     backgroundRepeat:'no-repeat'
//             // }}  >
//             //        <RichText key='editable'
//             //         tagName='h3'
//             //         placeholder='Give a Title'
//             //         // value={title}
//             //         // onChange={onChangeTitle}
//             //         // style={{ color: titleColor }}
//             //     />
//             // </div>
//         ]);
//     },
//     save(){
//         // const { backgroundPdf } = attributes;
//         // return(
//         //     <div class='pdf-container'  style={{
//         //         backgroundImage:`url($backgroundPdf)`,
//         //         backgroundSize:'Cover',
//         //         backgroundPosition:'center',
//         //         backgroundRepeat:'no-repeat'
//         //     }}  ></div>
//         // )

//     },
// });

// import './pdf.scss';


// registerBlockType('pdf/pdf-block', {
//     // bulit in attribute
//     title: 'pdf',
//     description: 'To add pdf file',
//     icon: 'smiley',
//     category: 'common',
//     attributes: {
//         backgroundPdf:{
//             type:'string',
//             default:null,
//         },
//         title: {
//             type: 'string',
//             source: 'html',
//             selector: 'h3',
//         },
//     },

//     edit({className, attributes, setAttributes }){
//                 const { backgroundPdf ,title} = attributes;

//                  function onSelectpdf(newpdf) {
//                      setAttributes({ backgroundPdf:newpdf.sizes.full.url })
//                     }

//                     function onChangeTitle(newTitle) {
//                         setAttributes({ title: newTitle })
            
//                     }


//                     return([
//                         <InspectorControls style={{ marginBotton: '40px' }}>
//                         <PanelBody title={'Custom text color'} >
//                             <h2><strong>Select a Color for Text:</strong></h2>
//                             <MediaUpload
//                             onSelect = {onSelectpdf}
//                             type="image"
//                             value={backgroundPdf}
//                             render={({open})=>{<IconButton className="editor-media-placeholder__button is-button is-default is-large "  onClick={open} icon={upload}> pdf</IconButton>  }}/>
                                                                     
//                         </PanelBody>
        
        
//                     </InspectorControls>,

//                         <div className="cta-container" style={{
//                                                 backgroundImage:`url($backgroundPdf)`,
//                                                 backgroundSize:'Cover',
//                                                 backgroundPosition:'center',
//                                                 backgroundRepeat:'no-repeat'
//                                             }}>
//                         <RichText key='editable'
//                             tagName='h3'
//                             placeholder='Give a Title'
//                             value={title}
//                             onChange={onChangeTitle}
//                             // style={{ color: titleColor }}
//                         />

                
//                         </div>


//                     // <div style={{
//                     //                     backgroundImage:`url($backgroundPdf)`,
//                     //                     backgroundSize:'Cover',
//                     //                     backgroundPosition:'center',
//                     //                     backgroundRepeat:'no-repeat'
//                     //                 }}>
//                     //                     <RichText key='editable'/>
//                     //                 </div>
//                     ])
//     },

//     save(attributes){

//         const { backgroundPdf ,title} = attributes;

//         <div className="cta-container" style={{
//             backgroundImage:`url($backgroundPdf)`,
//             backgroundSize:'Cover',
//             backgroundPosition:'center',
//             backgroundRepeat:'no-repeat'
//         }}>
//                             <h3 >{title}</h3>

      
//         </div>



//     }


// });


// registerBlockType('pdff/pdff-block', {
//     title: 'pdff',
//     description: 'To add pdff file',
//     icon: 'smiley',
//     category: 'common',
//     attributes:{
//         downloadFile: {
//             type:'string',
//             title:'names',
//         },

//         mediaID: {
// 			type: "number",
//             id:null,
// 		},
// 		mediaURL: {
// 			type: "string",
// 			source: "attribute",
// 			selector: "a",
// 			attribute: "src"
// 		},

//     },


    
//     edit({className,attributes,setAttributes}){

//         const {
//             mediaURL, mediaID, downloadFile
//        } = attributes;


//        const onSelectpdf = ( media ) => {
//            setAttributes( {
//                mediaURL: media.url,
//                mediaID: media.id,
//                downloadFile : media.filename,
//            } );
//        };

//         return(
//             [
//                 <MediaUpload
//                     onSelect={onSelectpdf}
//                     allowedTypes="a"
//                     value={mediaID}
//                     multiple={false}
//                     render={({ open }) => (
//                         <div>
                        
//                         <Button onClick={open}  className="editor-media-placeholder__button is-button is-default is-large " >
//                             {mediaID == null
//                             ? 'Upload'
//                             : 'Upload new file'}
                        
//                         </Button>
//                         <p>
//                             {mediaID == null
//                             ? ''
//                             : (
//                         <div>
//                                 <a src={ mediaURL }loading="lazy"  class="img-fluid">
//                                 {downloadFile}
//                             </a><br></br>
//                             {/* <button>Download</button> */}
//                         </div>
//                             )
//                             }
//                             </p>
                            
//                         </div>
//                     )}
//                     />
				
//             ]
//         )
//     },


//     save({attributes}){

//         const {
//             mediaURL,downloadFile
//            } = attributes;
   

//         return(
//             <div>
//                 <p>{downloadFile}</p>
//             {/* <button  src={ mediaURL } >Download</button> */}
//             </div>

//         )

//     }
// });




