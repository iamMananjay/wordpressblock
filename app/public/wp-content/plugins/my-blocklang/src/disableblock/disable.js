const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks;
import { CheckboxControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useBlockProps, RichText, InspectorControls , ColorPalette,InnerBlocks} from '@wordpress/block-editor';
const { PanelBody, SelectControl } = wp.components;

import './style.scss';

let deafaultBoolean;
let deafaultfax;
let deafaultemail;

registerBlockType('disable/disable-block', {
    title: 'Disable Block',
    description: 'To disable the div',
    icon: 'smiley',
    category: 'common',

    
    edit({attributes, setAttributes }){

        const [ isCheckeddefault, setCheckeddefault ] = useState( true );
        const [ isCheckedfax, setCheckedfax ] = useState( true );
        const [ isCheckedemail, setCheckedemail ] = useState( true );

        deafaultBoolean=isCheckeddefault;
        deafaultfax=isCheckedfax;
        deafaultemail=isCheckedemail;

    

        return(
            [
                <InspectorControls>
                <PanelBody
                   title={ __( 'Link Detail' ) }
                   initialOpen={ true }
               >
                      <CheckboxControl
           label="deafault"
           checked={ isCheckeddefault }
           onChange={ setCheckeddefault}
       />
                          <CheckboxControl
           label="Fax"
           checked={ isCheckedfax}
           onChange={ setCheckedfax }
       />
                          <CheckboxControl
           label="Email"
           checked={ isCheckedemail }
           onChange={setCheckedemail }
       />
               </PanelBody>
           </InspectorControls>,
   

                                     <div class="contact_box">
                                        <div class="contact_wrapper">
                                            <div class="contact_info">
                                            {
                                                isCheckeddefault  == true ? <a href="tel:098-840-5151" class="tele">
                                                <div class="fax">
                                                    <span class="tag">お電話</span>
                                                    <p class="contact_ttl -detail -tel">098-840-5151</p>
                                                </div>
                                            </a>:" "
                                            }

                                            {
                                                isCheckedfax == true ? <div class="temp">
                                                <div class="fax">
                                                    <span class="tag">
                                                        FAX
                                                    </span>
                                                    <p class="contact_ttl -detail">098-850-5381</p>
                                                </div>
                                            </div>:""
                                            }
                                           {
                                               isCheckedemail == true ? <a href="mailto:kenshin-yoyaku@yuuai.or.jp" class="mail">
                                               <span class="tag">
                                                   E-mail
                                               </span>
                                               <p class="contact_ttl -detail -tel">kenshin-yoyaku@yuuai.or.jp</p>
                                           </a>:""
                                           }
                                            </div>
                                        </div>
                                    </div>

            ]
        )
    },
    save(){

        let isCheckeddefault = deafaultBoolean;
        let isCheckedfax =  deafaultfax ;
        let isCheckedemail = deafaultemail;



        return(
                                    <div class="contact_box"   >
                                        <div class="contact_wrapper">
                                            <div class="contact_info">
                                              
                                            {
                                               isCheckeddefault == true ? <a href="tel:098-840-5151" class="tele">
                                                <div class="fax">
                                                    <span class="tag">お電話</span>
                                                    <p class="contact_ttl -detail -tel">098-840-5151</p>
                                                </div>
                                            </a>:""
                                            }

                                            {
                                                isCheckedfax == true ? <div class="temp">
                                                <div class="fax">
                                                    <span class="tag">
                                                        FAX
                                                    </span>
                                                    <p class="contact_ttl -detail">098-850-5381</p>
                                                </div>
                                            </div>:""
                                            }
                                           {
                                               isCheckedemail == true ? <a href="mailto:kenshin-yoyaku@yuuai.or.jp" class="mail">
                                               <span class="tag">
                                                   E-mail
                                               </span>
                                               <p class="contact_ttl -detail -tel">kenshin-yoyaku@yuuai.or.jp</p>
                                           </a>:""
                                           }
                                        </div>
                                        </div>
                                    </div>
        )

    }


})