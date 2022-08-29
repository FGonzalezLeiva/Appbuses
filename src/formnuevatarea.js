
import React, { useState,useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,Input} from 'reactstrap';

export const  Formnuevatarea=(args) =>{
  //console.log(args)
  const [modal, setModal] = useState(false);
  const [tareaG,setTarea] = useState('')

  const cambiostipeo = (a)=> {setTarea({name:a,hecha:'No'})}
  const toggle = () => setModal(!modal);
  const tareaguardada = ()=>{toggle();args.func(tareaG)}


  return (
    <div>
      <Button color="success" onClick={toggle}>
        Nueva tarea
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Nueva tarea</ModalHeader>
        <ModalBody>
        <div>
        Nombre tarea <Input onKeyDown={(e)=>{if(e.key==='Enter'){tareaguardada()}}} autoFocus onChange={(e)=>{cambiostipeo(e.target.value)}}
        />
        </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={tareaguardada}>
            Guardar tarea
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
