const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks;
const {Button } = wp.components;
import {
    MediaUpload,
} from "@wordpress/block-editor";

registerBlockType('pdf/pdf-block', {
    title: 'pdf',
    description: 'To add pdf file',
    icon: 'smiley',
    category: 'common',
    attributes:{
        downloadFile: {
            type:'string',
            title:'names',
        },

        mediaID: {
			type: "number",
            id:null,
		},
		mediaURL: {
			type: "string",
			source: "attribute",
			selector: "a",
			attribute: "src"
		},

    },


    
    edit({className,attributes,setAttributes}){

        const {
            mediaURL, mediaID, downloadFile
       } = attributes;


       const onSelectpdf = ( media ) => {
           setAttributes( {
               mediaURL: media.url,
               mediaID: media.id,
               downloadFile : media.filename,
           } );
       };

        return(
            [
                <MediaUpload
                    onSelect={onSelectpdf}
                    allowedTypes="a"
                    value={mediaID}
                    multiple={false}
                    render={({ open }) => (
                        <div>
                        
                        <Button onClick={open}  className="editor-media-placeholder__button is-button is-default is-large " >
                            {mediaID == null
                            ? 'Upload'
                            : 'Upload new file'}
                        
                        </Button>
                        <p>
                            {mediaID == null
                            ? ''
                            : (
                        <div>
                                <a src={ mediaURL }loading="lazy"  class="img-fluid">
                                {downloadFile}
                            </a><br></br>
                            {/* <button>Download</button> */}
                        </div>
                            )
                            }
                            </p>
                            
                        </div>
                    )}
                    />
				
            ]
        )
    },


    save({attributes}){

        const {
            mediaURL,downloadFile
           } = attributes;
   

        return(
            <div>
                <p>{downloadFile}</p>
            {/* <button  src={ mediaURL } >Download</button> */}
            </div>

        )

    }
});

