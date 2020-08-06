import * as React from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalButton,
    SIZE,
    ROLE,
  } from 'baseui/modal';
import {Button,KIND as ButtonKind } from "baseui/button";

const ModalBox = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  
  
  return (
      <>
       <Button overrides={{
           BaseButton:{
               style:({ $theme})=>{
                   return{
                        backgroundColor:$theme.colors.rating400,
                        borderRadius:"5px",
                        color:$theme.colors.white
                   }
               }
           }
       }} onClick={() => setIsOpen(true)}>Read More</Button>
       <Modal  onClose={() => setIsOpen(false)} isOpen={isOpen} closeable  animate
      autoFocus
      size={SIZE.default}
      role={ROLE.dialog}
      overrides={{
        Close: {
          style: ({ $theme }) => {
            return {
              outline: `${$theme.colors.warning200} solid`,
              backgroundColor: $theme.colors.white
            };
          }
        },
        Dialog: {
            style: ({ $theme }) => {
              return {
                outline: `${$theme.colors.warning200} solid`,
                backgroundColor: $theme.colors.white
              };
            }
          }
      }}>
        <ModalHeader>Hello world</ModalHeader>
        <ModalBody>
          Proin ut dui sed metus pharetra hend rerit vel non mi.
          Nulla ornare faucibus ex, non facilisis nisl. Maecenas
          aliquet mauris ut tempus.
        </ModalBody>
        <ModalFooter>
          <ModalButton kind={ButtonKind.tertiary}>
            Cancel
          </ModalButton>
          <ModalButton >Okay</ModalButton>
        </ModalFooter>
      </Modal>
      </>
   );
}


export default ModalBox;