const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks;
import { useBlockProps, RichText, InspectorControls , ColorPalette,InnerBlocks} from '@wordpress/block-editor';
registerBlockType('phone/phone-block', {
    // bulit in attribute
    title: 'PhoneBlock',
    description: 'To edit phone section',
    icon: 'smiley',
    category: 'common',
    attributes: {
        // title: {
        //     type: 'string',
        //     source: 'html',
        //     selector: 'h3',
        // },
        // aTag: {
        //     type: 'string',
        //     source: 'html',
        //     selector: 'a',
        // },
        spanTag: {
            type: 'string',
            source: 'html',
            selector: 'span',
        },
        ptag: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
    },
    edit({attributes, setAttributes }){
        const {ptag, spanTag} = attributes;

        function onChangepTag(newptag) {
            setAttributes({ ptag: newptag })
        }

        function onChangespantag(newspantag) {
            setAttributes({ spanTag: newspantag })
        }

        return(
            [
                <div class="general-cntbox">
                    <div class="inquiry_phone">
                        <div class="inquiry_cont">
                            <p class="inquiry_txt">電話でのお問い合わせ</p> 
                        </div>
                        <div class="inquiry_cont">
                        <a href="tel:098-851-9267" class="inquiry_tele">

                            <svg xmlns="http://www.w3.org/2000/svg" width="25.668" height="25.717" viewBox="0 0 25.668 25.717">
                                <path id="Icon_feather-phone" data-name="Icon feather-phone" d="M25.759,19.671v3.62A2.413,2.413,0,0,1,23.129,25.7,23.881,23.881,0,0,1,12.715,22a23.531,23.531,0,0,1-7.24-7.24A23.881,23.881,0,0,1,1.77,4.3a2.413,2.413,0,0,1,2.4-2.631h3.62A2.413,2.413,0,0,1,10.2,3.742a15.494,15.494,0,0,0,.845,3.391,2.413,2.413,0,0,1-.543,2.546L8.974,11.212a19.307,19.307,0,0,0,7.24,7.24l1.533-1.533a2.413,2.413,0,0,1,2.546-.543,15.494,15.494,0,0,0,3.391.845,2.413,2.413,0,0,1,2.076,2.45Z" transform="translate(-0.926 -0.833)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667"></path>
                            </svg>
                            <RichText key='editable'
                            
                            tagName='span'
                            placeholder='add a number'
                            value={spanTag} 
                            onChange={onChangespantag}
                             /> 
                        </a>
                        <RichText key='editable'
                        className="paragraph"

                            tagName='p'
                            placeholder='add a Text'
                            value={ptag}
                            onChange={onChangepTag}
                             /> 
                        </div>
                    </div>
                </div>
            ]
        )
    },
    save({attributes}){
        const {ptag, spanTag} = attributes;


        return(
            
                <div class="general-cntbox">
                <div class="inquiry_phone">
                    <div class="inquiry_cont">
                        <p class="inquiry_txt">電話でのお問い合わせ</p> 
                    </div>
                    <div class="inquiry_cont">
                    <a href="tel:098-851-9267" class="inquiry_tele">

                        <svg xmlns="http://www.w3.org/2000/svg" width="25.668" height="25.717" viewBox="0 0 25.668 25.717">
                            <path id="Icon_feather-phone" data-name="Icon feather-phone" d="M25.759,19.671v3.62A2.413,2.413,0,0,1,23.129,25.7,23.881,23.881,0,0,1,12.715,22a23.531,23.531,0,0,1-7.24-7.24A23.881,23.881,0,0,1,1.77,4.3a2.413,2.413,0,0,1,2.4-2.631h3.62A2.413,2.413,0,0,1,10.2,3.742a15.494,15.494,0,0,0,.845,3.391,2.413,2.413,0,0,1-.543,2.546L8.974,11.212a19.307,19.307,0,0,0,7.24,7.24l1.533-1.533a2.413,2.413,0,0,1,2.546-.543,15.494,15.494,0,0,0,3.391.845,2.413,2.413,0,0,1,2.076,2.45Z" transform="translate(-0.926 -0.833)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667"></path>
                        </svg>
                        <RichText.Content 
                        tagName='span'
                        value={spanTag} 
                         /> 
                    </a>
                    <RichText.Content
                        className="paragraph"
                        tagName='p'
                        value={ptag}
                         /> 
                    </div>
                </div>
            </div>

            

        )

    }
    

});

